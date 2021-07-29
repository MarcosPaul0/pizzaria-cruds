import { Route, Switch } from "react-router"

import { Home } from './pages/Home'

import { Employees } from './pages/Employees' //Funcionários
import { AddEmployee } from './cruds/employees/AddEmployee'
import { UpdateEmployee } from './cruds/employees/UpdateEmployee'
import { DeleteEmployee } from './cruds/employees/DeleteEmployee'

import { Pizzas } from './pages/Pizzas' //Pizzas
import { AddPizza } from './cruds/pizzas/AddPizza'
import { UpdatePizza } from './cruds/pizzas/UpdatePizza'
import { DeletePizza } from './cruds/pizzas/DeletePizza'

import { Accompaniments } from './pages/Accompaniments' //Acompanhamentos
import { AddAccompaniment } from './cruds/accompaniments/AddAccompaniment'
import { UpdateAccompaniment } from './cruds/accompaniments/UpdateAccompaniment'
import { DeleteAccompaniment } from './cruds/accompaniments/DeleteAccompaniment'

import { Combos } from './pages/Combos' //Combos
import { AddCombo } from './cruds/combos/AddCombo'
import { UpdateCombo } from './cruds/combos/UpdateCombo'
import { DeleteCombo } from './cruds/combos/DeleteCombo'

import { Sales } from './pages/Sales' //vendas
import { AddSale } from './cruds/sales/AddSales'
import { UpdateSale } from './cruds/sales/UpdateSale'

import { Payments } from './pages/Payments'
import { AddPayment } from './cruds/payments/AddPayment'

export function Router() {
    return (
        <Switch>
            <Route path="/" exact component={ Home }/>
            <Route path="/employees" exact component={ Employees }/>
            <Route path="/employees/add" component={ AddEmployee }/>
            <Route path="/employees/update/:id" component={ UpdateEmployee }/>
            <Route path="/employees/delete/:id" component={ DeleteEmployee }/>

            <Route path="/pizzas" exact component={ Pizzas }/>
            <Route path="/pizzas/add" component={ AddPizza }/>
            <Route path="/pizzas/update/:id" component={ UpdatePizza }/>
            <Route path="/pizzas/delete/:id" component={ DeletePizza }/>

            <Route path="/accompaniments" exact component={ Accompaniments }/>
            <Route path="/accompaniments/add" component={ AddAccompaniment }/>
            <Route path="/accompaniments/update/:id" component={ UpdateAccompaniment }/>
            <Route path="/accompaniments/delete/:id" component={ DeleteAccompaniment }/>

            <Route path="/combos" exact component={ Combos }/>
            <Route path="/combos/add" component={ AddCombo }/>
            <Route path="/combos/update/:id" component={ UpdateCombo }/>
            <Route path="/combos/delete/:id" component={ DeleteCombo }/>

            <Route path="/sales" exact component={ Sales }/>
            <Route path="/sales/add" component={ AddSale }/>
            <Route path="/sales/update/:id" component={ UpdateSale }/>
            
            <Route path="/payments" exact component={ Payments }/>
            <Route path="/payments/add" exact component={ AddPayment }/>
        </Switch>
    )
}