import { useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../hooks/useData";

import pencilImg from "../assets/images/pencilIcon.svg";
import searchImg from "../assets/images/searchIcon.svg";

import { ButtonLink } from "../components/ButtonLink";

export function Sales() {
  const baseUrl = "http://localhost:3001/sales";

  const [search, setSearch] = useState("");

  const data = useData(baseUrl, search, "clientName");

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
            <img src={pencilImg} alt="ícone de caneta" className="h-6" />
          </Link>
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
          placeholder="Digite o CPF ou Nome"
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
      <ButtonLink to={`/sales/add`} color="green">
        Registrar Venda
      </ButtonLink>
    </main>
  );
}
