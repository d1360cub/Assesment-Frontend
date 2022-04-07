const API_URL = 'https://fakestoreapi.com/products';

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error('Error fetching products');
  }
};

export const getOneProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch {
    throw new Error('Error fetching product');
  }
};
