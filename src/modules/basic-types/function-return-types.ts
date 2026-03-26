// TODO CartItem
type CartItem = {
  id: number;
  price: number;
};

type Address = {
  cep: string;
  default: boolean;
};

type Custumer = {
  addresses: Address[];
};

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

const addresses: Address[] = [
  {
    cep: '00000-001',
    default: true,
  },
  {
    cep: '00000-002',
    default: false,
  },
  {
    cep: '00000-003',
    default: false,
  },
];

const custumer: Custumer = {
  addresses: addresses,
};

export function calculateTotal(shoppingCart: ShoppingCart): string {
  const total = shoppingCart.cartItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );

  return total.toFixed(2);
}

const total = calculateTotal(shoppingCart);
console.log(`Total: ${total}`);

export function gerPrincipalAdress(custumer: Custumer): Address | undefined {
  return custumer.addresses.find((address) => address.default);
}

const principalAddress = gerPrincipalAdress(custumer);

console.log('Principal Address:', principalAddress);
