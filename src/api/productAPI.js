import axios from "axios";

const baseUrl = "http://localhost:3005/products";

// Function to get all products
const getAllProducts = async () => 
  {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error("Error while fetching all products:", error);
    throw error;
  }
};

// Function to get a product by ID
const getProductById = (productId) => axios.get(`${baseUrl}/${productId}`);

// Function to add a product
const addProduct =  (product) => axios.post(baseUrl, product); 

// Function to update a product
const updateProduct =  (productId, updatedProduct) => axios.put(`${baseUrl}/${productId}`, updatedProduct);

// Function to delete a product
const deleteProduct =  (productId) =>  axios.delete(`${baseUrl}/${productId}`);


export { getAllProducts, addProduct, deleteProduct, updateProduct, getProductById };
