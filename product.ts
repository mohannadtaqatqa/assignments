// Test 4
interface Product {
  name: string;
  price: number;
}

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}


const products: Product[] = [
  { name: "Apple", price: 3 },
  { name: "Banana", price: 1 },
  { name: "Orange", price: 2 },
];

console.log("Total Price:", calculateTotalPrice(products)); // Output: Total Price: 6


// Test 5

/**
* Validates if the provided string is a valid email address.
* @param email
* @returns
*/
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const email1 = "test@example.com";
const email2 = "invalid-email";

console.log(`Is "${email1}" a valid email?`, isValidEmail(email1));
console.log(`Is "${email2}" a valid email?`, isValidEmail(email2));
