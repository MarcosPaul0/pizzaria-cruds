import { Link } from 'react-router-dom';

import peopleIcon from '../assets/images/peopleIcon.svg';
import pizzaIcon from '../assets/images/pizzaIcon.svg';
import homeIcon from '../assets/images/homeIcon.svg';
import juiceIcon from '../assets/images/juiceIcon.svg';
import saleIcon from '../assets/images/saleIcon.svg';
import paymentIcon from '../assets/images/paymentIcon.svg';
import comboIcon from '../assets/images/comboIcon.svg';

export function Nav() {
  return (
    <nav className="nav flex flex-col justify-center bg-projectRed-default text-white">
      <Link
        to="/"
        className="transition duration-300 flex flex-column w-full items-center justify-center p-3 hover:bg-projectRed-light"
      >
        <img src={homeIcon} alt="icone de casa" className="h-5 mr-2" /> Início
      </Link>
      <Link
        to="/employees"
        className="transition duration-300 flex flex-column w-full items-center justify-center p-3 hover:bg-projectRed-light"
      >
        <img src={peopleIcon} alt="icone de casa" className="h-5 mr-2" /> Funcionários
      </Link>
      <Link
        to="/pizzas"
        className="transition duration-300 flex flex-column w-full items-center justify-center p-3 hover:bg-projectRed-light"
      >
        <img src={pizzaIcon} alt="icone de casa" className="h-7 mr-2" /> Pizzas
      </Link>
      <Link
        to="/accompaniments"
        className="transition duration-300 flex flex-column w-full items-center justify-center p-3 hover:bg-projectRed-light"
      >
        <img src={juiceIcon} alt="icone de casa" className="h-6 mr-2" /> Acompanhamentos
      </Link>
      <Link
        to="/combos"
        className="transition duration-300 flex flex-column w-full items-center justify-center p-3 hover:bg-projectRed-light"
      >
        <img src={comboIcon} alt="icone de casa" className="h-6 mr-2" /> Combos
      </Link>
      <Link
        to="/sales"
        className="transition duration-300 flex flex-column w-full items-center justify-center p-3 hover:bg-projectRed-light"
      >
        <img src={saleIcon} alt="icone de casa" className="h-6 mr-2 text-white" /> Vendas
      </Link>
      <Link
        to="/payments"
        className="transition duration-300 flex flex-column w-full items-center justify-center p-3 hover:bg-projectRed-light"
      >
        <img src={paymentIcon} alt="icone de casa" className="h-6 mr-2" /> Pagamentos
      </Link>
    </nav>
  );
}
