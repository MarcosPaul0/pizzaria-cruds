import { useState } from 'react'
import { useData } from "../hooks/useData";
import { Link } from "react-router-dom";

import trashImg from "../assets/images/trashIcon.svg";
import pencilImg from "../assets/images/pencilIcon.svg";
import searchImg from '../assets/images/searchIcon.svg';

import { ButtonLink } from "../components/ButtonLink";

export function Combos() {
  const baseUrl = "http://localhost:3001/combos";

  const [search, setSearch] = useState('');
  
  const data = useData(baseUrl, search, 'name');

  const combosList = data.map((combo) => {
    return (
      <tr className="border-t border-gray-400" key={combo.id}>
        <td className="py-2 px-8 text-center">{combo.code}</td>
        <td className="py-2 px-8 text-center">{combo.name}</td>
        <td className="py-2 px-8 text-center">{combo.products}</td>
        <td className="py-2 px-8 text-center">{combo.price}</td>
        <td className="flex py-2 px-8 text-center">
          <Link to={`/combos/update/${combo.id}`} className="mr-2">
            <img src={pencilImg} alt="ícone de caneta" className="h-6" />
          </Link>
          <Link to={`/combos/delete/${combo.id}`}>
            <img src={trashImg} alt="ícone de lixeira" className="h-5" />
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
          placeholder="Insira o Nome"
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={searchImg} alt="Ícone de lupa" className="p-1" />
      </div>
      <div className="mt-8 border border-gray-400 rounded-xl overflow-hidden shadow-md">
        <table className="table-fixed">
          <thead className="bg-gray-300">
            <tr>
              <th className="py-2 px-8 text-center">Código</th>
              <th className="py-2 px-8 text-center">Nome</th>
              <th className="py-2 px-8 text-center">Produtos</th>
              <th className="py-2 px-8 text-center">Preço</th>
              <th className="py-2 px-8 text-center">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white">{combosList}</tbody>
        </table>
      </div>
      <ButtonLink to={`/combos/add`} color="green">
        Novo combo
      </ButtonLink>
    </main>
  );
}
