const productsSale = {
  client: '',
  products: [],
  price: 0,
}

function addToPayment(sale, history) {
  history.push('/payments/add')

  productsSale.client = sale.client
  productsSale.products = sale.products
  productsSale.price = sale.total
}

function addToSale(product, price, notify) {
  productsSale.products.push(product);
  productsSale.price += parseFloat(price);

  notify()
}

function resetProducts() {
  productsSale.client = ''
  productsSale.products = [];
  productsSale.price = 0;
}

export { productsSale, addToSale, addToPayment, resetProducts}