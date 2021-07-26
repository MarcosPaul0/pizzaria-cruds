import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../hooks/useData';

import trashImg from '../assets/images/trashIcon.svg';
import pencilImg from '../assets/images/pencilIcon.svg';
import searchImg from '../assets/images/searchIcon.svg';

import { ButtonLink } from '../components/ButtonLink';

export function Employees() {
  const baseUrl = 'http://localhost:3001/employees';

  const [search, setSearch] = useState('');

  const data = useData(baseUrl, search, 'name');

  const employeesList = data.map((employee) => {
    return (
      <tr className="border-t border-gray-400" key={employee.id}>
        <td className="py-2 px-8 text-center">{employee.cpf}</td>
        <td className="py-2 px-8 text-center">{employee.name}</td>
        <td className="py-2 px-8 text-center">{employee.birth}</td>
        <td className="py-2 px-8 text-center">{employee.admission}</td>
        <td className="flex py-2 px-8 text-center">
          <Link to={`/employees/update/${employee.id}`} className="mr-2">
            <img src={pencilImg} alt="ícone de caneta" className="h-6" />
          </Link>
          <Link to={`/employees/delete/${employee.id}`}>
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
          placeholder="Digite o CPF ou Nome"
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={searchImg} alt="Ícone de lupa" className="p-1" />
      </div>
      <div className="mt-6 border border-gray-400 rounded-xl overflow-hidden shadow-md">
        <table className="table-fixed">
          <thead className="bg-gray-300">
            <tr>
              <th className="py-2 px-8 text-center">CPF</th>
              <th className="py-2 px-8 text-center">Nome</th>
              <th className="py-2 px-8 text-center">Admissão</th>
              <th className="py-2 px-8 text-center">Nascimento</th>
              <th className="py-2 px-8 text-center">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white">{employeesList}</tbody>
        </table>
      </div>
      <ButtonLink to={`/employees/add`} color="green">
        Novo Funcionário
      </ButtonLink>
    </main>
  );
}
