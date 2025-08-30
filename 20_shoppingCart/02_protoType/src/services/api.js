const BASE_URL = "https://fakestoreapi.com/";

export async function getProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch data");
    throw err;
  }
}
getProducts;

export async function getProductId(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (err) {
    console.error("Failed to fetch data");
    throw err;
  }
}
