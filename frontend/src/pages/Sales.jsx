import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useData } from "../hooks/useData";

import { SaleContext } from '../context/SaleContext'

import pencilImg from "../assets/images/pencilIcon.svg";
import okImg from '../assets/images/okIcon.svg'
import { Search } from "../components/Search";
import { Table } from "../components/Table";

export function Sales() {
  const baseUrl = "http://localhost:3001/sales";
  const history = useHistory()

  const [search, setSearch] = useState("");

  const saleContext = useContext(SaleContext)

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
          <button onClick={() => saleContext.addToPayment(sale, history)}>
            <img src={okImg} alt="Ícone de ok" className="h-4" />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <main className=" main flex flex-col items-center bg-projectGray-25">
      <Search
        placeholder="Digite o Cliente ou Data"
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
      <Table>
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
      </Table>
    </main>
  );
}
