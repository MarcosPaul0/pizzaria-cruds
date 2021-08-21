import { useState } from "react";
import { Search } from "../components/Search";
import { Table } from "../components/Table";
import { useData } from "../hooks/useData";

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
            <th className="py-2 px-8 text-center">Montante</th>
          </tr>
        </thead>
        <tbody className="bg-white">{paymentsList}</tbody>
      </Table>
    </main>
  );
}
