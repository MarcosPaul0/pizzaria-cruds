import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../hooks/useData';

import trashImg from '../assets/images/trashIcon.svg';
import pencilImg from '../assets/images/pencilIcon.svg';

import { ButtonLink } from '../components/ButtonLink';
import { Search } from '../components/Search';
import { Table } from '../components/Table';

export function Employees() {
  const baseUrl = 'http://localhost:3001/employees';

  const [search, setSearch] = useState('');

  const data = useData(baseUrl, 'name', search);

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
      <Search
        placeholder="Digite o CPF ou Nome"
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
      <Table>
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
      </Table>
      <ButtonLink to={`/employees/add`} color="green">
        Novo Funcionário
      </ButtonLink>
    </main>
  );
}
