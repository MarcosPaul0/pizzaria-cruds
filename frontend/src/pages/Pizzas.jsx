import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { useData } from '../hooks/useData';
import { SaleContext } from '../context/SaleContext'
import { useNotify } from '../hooks/useNotify'

import trashImg from '../assets/images/trashIcon.svg';
import pencilImg from '../assets/images/pencilIcon.svg';
import addToSaleImg from '../assets/images/addSaleIcon.svg'

import { ButtonLink } from '../components/ButtonLink';
import { Search } from '../components/Search';

import { Table } from '../components/Table';
import { ToastContainer } from "react-toastify";

export function Pizzas() {
  const baseUrl = 'http://localhost:3001/pizzas';
  const [search, setSearch] = useState('');

  const data = useData(baseUrl, 'name', search);

  const { updateSale } = useContext(SaleContext)
  const { successNotify } = useNotify()

  const pizzasList = data.map((pizza) => {
    return (
      <tr className="border-t border-gray-400" key={pizza.id}>
        <td className="py-2 px-8 text-center">{pizza.name}</td>
        <td className="py-2 px-8 text-center">{pizza.size}</td>
        <td className="py-2 px-8 text-center">{pizza.ingredients}</td>
        <td className="py-2 px-8 text-center">{pizza.price}</td>
        <td className="vertical-middle py-2 px-8">
          <div className="flex">
            <Link to={`/pizzas/update/${pizza.id}`} className="mr-2">
              <img src={pencilImg} alt="ícone de caneta" className="h-6" />
            </Link>
            <Link to={`/pizzas/delete/${pizza.id}`} className="mr-3">
              <img src={trashImg} alt="ícone de lixeira" className="h-5" />
            </Link>
            <button onClick={() => {
              updateSale(pizza.name, pizza.price)
              successNotify('Produto adicionada ao carrinho') 
            }}>
              <img src={addToSaleImg} alt="Ícone de carrinho com um sinal de adição" />
            </button>
            <ToastContainer/>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <main className=" main flex flex-col items-center bg-projectGray-25">
      <Search
        placeholder="Digite o Tipo ou Tamanho"
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
      <Table>
          <thead className="bg-gray-300">
            <tr>
              <th className="py-2 px-8 text-center">Tipo</th>
              <th className="py-2 px-8 text-center">Tamanho</th>
              <th className="py-2 px-8 text-center">Descrição</th>
              <th className="py-2 px-8 text-center">Preço</th>
              <th className="py-2 px-8 text-center">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white">{pizzasList}</tbody>
      </Table>
      <ButtonLink to={`/pizzas/add`} color="green">
        Nova pizza
      </ButtonLink>
    </main>
  );
}
