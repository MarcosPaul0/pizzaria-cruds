import { createContext, useState } from 'react';

const initialSale = {
  client: '',
  products: [],
  price: 0,
}

const SaleContext = createContext(initialSale)

function Car(props) {
  const [sale, setSale] = useState(initialSale)
  
  function updateSale(product, price) {
    const newSale = {...sale}
    newSale.products.push(product)
    newSale.price += +price

    setSale(newSale)
  }

  function addToPayment(sale, history) {
    history.push('/payments/add')
  
    setSale({
      client: sale.client,
      products: sale.products,
      price: sale.total
    })
  }
  
  function resetProducts() {
    setSale(initialSale)
  }

  return (
    <SaleContext.Provider value={{
      sale: sale,
      updateSale,
      addToPayment,
      resetProducts
    }}>
      {props.children}
    </SaleContext.Provider>
  )
}

export { SaleContext, Car }