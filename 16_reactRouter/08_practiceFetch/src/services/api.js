const BASE_URL = "https://fakestoreapi.com/products";

export async function fetchProducts() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Error Occured");
    }
    return await response.json();
  } catch (err) {
    console.error("Error Occured", err);
    throw err;
  }
}

export async function fetchProductId(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Error Occured: ");
    }
    return await response.json();
  } catch (err) {
    console.error("Error Occured", err);
    throw err;
  }
}
