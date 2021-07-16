import { Route, Switch } from "react-router"

import { Home } from './pages/Home'
import { Accompaniments } from './pages/Accompaniments' //Produtos
import { Pizzas } from './pages/Pizzas'
import { Combos } from './pages/Combos'
import { Sales } from './pages/Sales'
import { Payments } from './pages/Payments'

import { Employees } from './pages/Employees' //Funcionários
import { AddEmployee } from './cruds/employees/AddEmployee'
import { UpdateEmployee } from './cruds/employees/UpdateEmployee'
import { DeleteEmployee } from './cruds/employees/DeleteEmployee'

export function Router() {
    return (
        <Switch>
            <Route path="/" exact component={ Home }/>
            <Route path="/employees" exact component={ Employees }/>
            <Route path="/employees/add" component={ AddEmployee }/>
            <Route path="/employees/update/:id" component={ UpdateEmployee }/>
            <Route path="/employees/delete/:id" component={ DeleteEmployee }/>
            <Route path="/accompaniments" exact component={ Accompaniments }/>
            <Route path="/accompaniments/add/:id" component={ Accompaniments }/>
            <Route path="/accompaniments/delete/:id" component={ Accompaniments }/>
            <Route path="/pizzas" exact component={ Pizzas }/>
            <Route path="/pizzas/add/:id" component={ Pizzas }/>
            <Route path="/pizzas/delete/:id" component={ Pizzas }/>
            <Route path="/combos" exact component={ Combos }/>
            <Route path="/combos/add/:id" component={ Combos }/>
            <Route path="/combos/delete/:id" component={ Combos }/>
            <Route path="/sales" exact component={ Sales }/>
            <Route path="/sales/add/:id" component={ Sales }/>
            <Route path="/sales/delete/:id" component={ Sales }/>
            <Route path="/payments" exact component={ Payments }/>
            <Route path="/payments/add/:id" component={ Payments }/>
            <Route path="/payments/delete/:id" component={ Payments }/>
        </Switch>
    )
}