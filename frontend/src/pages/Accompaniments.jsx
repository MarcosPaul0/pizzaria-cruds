import { Link } from "react-router-dom";
import { useState, useContext } from 'react'
import { useData } from "../hooks/useData";
import { useNotify } from '../hooks/useNotify'

import { SaleContext } from '../context/SaleContext'

import trashImg from "../assets/images/trashIcon.svg";
import pencilImg from "../assets/images/pencilIcon.svg";
import addToSaleImg from '../assets/images/addSaleIcon.svg'

import { Search } from '../components/Search'
import { ButtonLink } from "../components/ButtonLink";
import { Table } from '../components/Table';

import { ToastContainer } from "react-toastify";

export function Accompaniments() {
  const baseUrl = "http://localhost:3001/accompaniments";
  const [search, setSearch] = useState('');

  const data = useData(baseUrl, 'name', search);

  const { updateSale } = useContext(SaleContext)
  const { successNotify } = useNotify()
  
  const accompanimentsList = data.map((accompaniment) => {
    return (
      <tr className="border-t border-gray-400" key={accompaniment.id}>
        <td className="py-2 px-8 text-center">{accompaniment.name}</td>
        <td className="py-2 px-8 text-center">{accompaniment.description}</td>
        <td className="py-2 px-8 text-center">{accompaniment.price}</td>
        <td className="flex py-2 px-8 text-center">
          <Link to={`/accompaniments/update/${accompaniment.id}`} className="mr-2">
            <img src={pencilImg} alt="ícone de caneta" className="h-6" />
          </Link>
          <Link to={`/accompaniments/delete/${accompaniment.id}`} className="mr-2">
            <img src={trashImg} alt="ícone de lixeira" className="h-5" />
          </Link>
          <button onClick={() => {
            updateSale(accompaniment.name, accompaniment.price)
            successNotify('Produto adicionado ao carrinho') 
          }}>
            <img src={addToSaleImg} alt="Ícone de carrinho com um sinal de adição" />
          </button>
          <ToastContainer />
        </td>
      </tr>
    );
  });

  return (
    <main className=" main flex flex-col items-center bg-projectGray-25">
      <Search 
        placeholder="Insira o Nome"
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
      <Table>
        <thead className="bg-gray-300">
          <tr>
            <th className="py-2 px-8 text-center">Nome</th>
            <th className="py-2 px-8 text-center">Descrição</th>
            <th className="py-2 px-8 text-center">Preço</th>
            <th className="py-2 px-8 text-center">Ações</th>
          </tr>
        </thead>
        <tbody className="bg-white">{accompanimentsList}</tbody>
      </Table>
      <ButtonLink to={`/accompaniments/add`} color="green">
        Novo acompanhamento
      </ButtonLink>
    </main>
  );
}
