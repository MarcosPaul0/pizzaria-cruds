import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useData } from "../hooks/useData";
import { addToPayment } from '../hooks/useSale'

import pencilImg from "../assets/images/pencilIcon.svg";
import searchImg from "../assets/images/searchIcon.svg";
import okImg from '../assets/images/okIcon.svg'

export function Sales() {
  const baseUrl = "http://localhost:3001/sales";
  const history = useHistory()

  const [search, setSearch] = useState("");

  const data = useData(baseUrl, "client", search);

  const salesList = data.map((sale) => {
    return (
      <tr className="border-t border-gray-400" key={sale.id}>
        <td className="py-2 px-8 text-center">{sale.client}</td>
        <td className="py-2 px-8 text-center">{sale.date}</td>
        <td className="py-2 px-8 text-center">{sale.employee}</td>
        <td className="py-2 px-8 text-center">{sale.products}</td>
        <td className="py-2 px-8 text-center">{sale.total}</td>
        <td className="flex py-2 px-8 text-center">
          <Link to={`/sales/update/${sale.id}`} className="mr-2">
            <img src={pencilImg} alt="Ícone de caneta" className="h-6" />
          </Link>
          <button onClick={e => addToPayment(sale, history)}>
            <img src={okImg} alt="Ícone de ok" className="h-4" />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <main className=" main flex flex-col items-center bg-projectGray-25">
      <div className="mt-6 border-2 border-red-700 bg-red-700 flex flex-row rounded-2xl overflow-hidden">
        <input
          id="search"
          name="search"
          value={search}
          type="text"
          className="rounded-2xl pl-2 outline-none w-52"
          placeholder="Digite o Cliente ou Data"
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={searchImg} alt="Ícone de lupa" className="p-1" />
      </div>
      <div className="mt-6 border border-gray-400 rounded-xl overflow-hidden shadow-md">
        <table className="table-fixed">
          <thead className="bg-gray-300">
            <tr>
              <th className="py-2 px-8 text-center">Cliente</th>
              <th className="py-2 px-8 text-center">Data</th>
              <th className="py-2 px-8 text-center">Funcionário</th>
              <th className="py-2 px-8 text-center">Produtos</th>
              <th className="py-2 px-8 text-center">Total</th>
              <th className="py-2 px-8 text-center">Editar</th>
            </tr>
          </thead>
          <tbody className="bg-white">{salesList}</tbody>
        </table>
      </div>
    </main>
  );
}
