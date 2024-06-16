import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "../css/products.css";
import { Link, useLoaderData } from "react-router-dom";

import { getAllProducts, deleteProduct } from "../api/productAPI";

export default function Products() 
{
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => 
    {
      try {
        const productsData = await getAllProducts();
        setProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  /**Delete Handler */
  const handleDelete = async (productId) => 
  {
    try {
      await deleteProduct(productId);
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-5 text-center mt-5">
      <h1>Our Products</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <Link to={`/products/${product.id}`}>
                  <i className="bi bi-eye-fill fs-5 text-warning icon-spacing"></i>
                </Link>

                <Link to={`/products/${product.id}/edit`}>
                  <i className="bi bi-pencil-square fs-5 text-primary icon-spacing"></i>
                </Link>
                <i
                  className="bi bi-trash3-fill fs-5 icon-spacing text-danger"
                  onClick={() => handleDelete(product.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
