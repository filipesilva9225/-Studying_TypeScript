let product = 'electry fridge';
let price = 657.32;

export function display(product: string, price: number) {
  console.log(product.toUpperCase(), price.toFixed(2));
}

display(product, price);
