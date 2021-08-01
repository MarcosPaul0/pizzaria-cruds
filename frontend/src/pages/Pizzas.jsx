import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../hooks/useData';
import { addToSale } from '../hooks/useSale'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import trashImg from '../assets/images/trashIcon.svg';
import pencilImg from '../assets/images/pencilIcon.svg';
import searchImg from '../assets/images/searchIcon.svg';
import addToSaleImg from '../assets/images/addSaleIcon.svg'

import { ButtonLink } from '../components/ButtonLink';

export function Pizzas() {
  const baseUrl = 'http://localhost:3001/pizzas';

  const [search, setSearch] = useState('');

  const data = useData(baseUrl, 'name', search);

  const notify = () =>
    toast.success('Pizza adicionada ao carrinho!', {
      position: 'bottom-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

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
            <button onClick={e => addToSale(pizza.name, pizza.price, notify)}>
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
      <div className="mt-6 border-2 border-red-700 bg-red-700 flex flex-row rounded-2xl overflow-hidden">
        <input
          id="search"
          name="search"
          value={search}
          type="text"
          className="rounded-2xl pl-2 outline-none w-52"
          placeholder="Digite o Tipo ou Tamanho"
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={searchImg} alt="Ícone de lupa" className="p-1" />
      </div>
      <div className="mt-8 border border-gray-400 rounded-xl overflow-hidden shadow-md">
        <table className="table-fixed">
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
        </table>
      </div>
      <ButtonLink to={`/pizzas/add`} color="green">
        Nova pizza
      </ButtonLink>
    </main>
  );
}
