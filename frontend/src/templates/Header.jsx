import PizzaIgm from '../assets/images/pizza.svg'

export function Header(props) {
    const pathName = props.location.pathname.split('/')[1]
    let page = ''
    
    if(pathName === '') {
        page = 'Início'
    } else if(pathName === 'employees') {
        page = 'Funcionários'
    } else if(pathName === 'pizzas') {
        page = 'Pizzas'
    } else if(pathName === 'accompaniments') {
        page = 'Acompanhamentos'
    } else if(pathName === 'combos') {
        page = 'Combos'
    } else if(pathName === 'sales') {
        page = 'Vendas'
    } else if(pathName === 'payments') {
        page = 'Pagamentos'
    }

    return (
        <header className="header bg-red-700 flex flex-row">
            <img src={ PizzaIgm } alt="pizza" className="h-24 w-24 ml-12 mt-2" />
            <div className="ml-14 text-white">
                <h1 className="text-4xl">Pizzaria Nome</h1>
                <p className="text-xl ml-40" >&gt; {page}</p>
            </div>
        </header>
    )
}