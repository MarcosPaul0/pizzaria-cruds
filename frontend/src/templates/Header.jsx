import SaleImg from '../assets/images/saleIcon.svg';
import PizzaIgm from '../assets/images/Logo.svg';

import { ButtonLink } from '../components/ButtonLink'

export function Header(props) {
  const pathName = props.location.pathname.split('/')[1];
  let page = '';

  if (pathName === '') {
    page = 'Início';
  } else if (pathName === 'employees') {
    page = 'Funcionários';
  } else if (pathName === 'pizzas') {
    page = 'Pizzas';
  } else if (pathName === 'accompaniments') {
    page = 'Acompanhamentos';
  } else if (pathName === 'combos') {
    page = 'Combos';
  } else if (pathName === 'sales') {
    page = 'Vendas';
  } else if (pathName === 'payments') {
    page = 'Pagamentos';
  }

  return (
    <header className="header bg-gradient-to-r from-beige-light via-beige-medium to-beige-medium grid grid-cols-2 justify-items-stretch">
      <div className="flex">
        <img src={PizzaIgm} alt="pizza" className="h-32 w-32 ml-8 z-10 mt-2" />
        <div className="ml-14 text-white">
          <h1 className="text-4xl font-bold">Pefeizzaria</h1>
          <p className="text-xl font-medium ml-40">&gt; {page}</p>
        </div>
      </div>
      <ButtonLink to={'/sales/add'} className="justify-self-end mr-8">
        <div className="px-5 py-2 rounded-xl bg-red-800 mt-4 flex flex-row">
          <img src={SaleImg} alt="Carrinho de compras" className="h-8" />
          <p></p>
        </div>
      </ButtonLink>
    </header>
  );
}
