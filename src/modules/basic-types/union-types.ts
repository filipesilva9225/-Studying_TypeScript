let shoppingCart = [200.32, 120.32, '33.29', '44', 'not define'];

export function totalize(values: (string | number)[]) {
  return values
    .map((value) => (typeof value === 'number' ? value : parseFloat(value)))
    .filter((value) => !isNaN(value))
    .reduce((acc, curr) => acc + curr, 0);
}

totalize(shoppingCart);
