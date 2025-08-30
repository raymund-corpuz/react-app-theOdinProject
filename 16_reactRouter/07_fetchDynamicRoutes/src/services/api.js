const BASE_URL = "https://fakestoreapi.com/products";

export async function getProducts() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Error Occured");
    }
    return await response.json();
  } catch (err) {
    console.error("Error Fetching products:", err);
    throw err;
  }
}

export async function getProductById(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Error Occured");
    }
    return await response.json();
  } catch (err) {
    console.error("Error fetching products", err);
    throw err;
  }
}
