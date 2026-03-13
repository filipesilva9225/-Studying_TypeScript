// TODO CartItem
type CartItem = {
  id: number;
  price: number;
};

// TODO ShoppingCart
type ShoppingCart = {
  cartItems: CartItem[];
};

// TOPO Criar variavel do tipe ShoppingCart contendo CartItem
const shoppingCart = {
  cartItems: [
    {
      id: 1000,
      price: 200,
    },
    {
      id: 1001,
      price: 300,
    },
    {
      id: 1002,
      price: 400,
    },
  ],
};

//Função do tipo void para somar os valores dos items

export function calculateTotal(shoppingCart: ShoppingCart): void {
  const total = shoppingCart.cartItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );
  console.log(`Total: ${total.toFixed(2)}`);
}

calculateTotal(shoppingCart);
