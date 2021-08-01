import { useState } from "react";
import { useData } from "../hooks/useData";

import searchImg from "../assets/images/searchIcon.svg";

export function Payments() {
  const baseUrl = "http://localhost:3001/payments";

  const [search, setSearch] = useState("");

  const data = useData(baseUrl, "client", search);

  const paymentsList = data.map((payment) => {
    return (
      <tr className="border-t border-gray-400" key={payment.id}>
        <td className="py-2 px-8 text-center">{payment.client}</td>
        <td className="py-2 px-8 text-center">{payment.date}</td>
        <td className="py-2 px-8 text-center">{payment.employee}</td>
        <td className="py-2 px-8 text-center">{payment.amount}</td>
        <td className="py-2 px-8 text-center">{payment.receipt}</td>
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
              <th className="py-2 px-8 text-center">Montante</th>
              <th className="py-2 px-8 text-center">Recibo</th>
            </tr>
          </thead>
          <tbody className="bg-white">{paymentsList}</tbody>
        </table>
      </div>
    </main>
  );
}
