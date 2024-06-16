import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../api/productAPI";

import '../css/productdetails.css';

export default function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => 
    {
      try {
        const response = await getProductById(id);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchData();
  }, [id]);

  const backToProducts = () => {
    navigate("/products");
  };

  return (
    <div className="bg-dark p-5 text-white">
      <div className="container">
        <h1 className="text-warning mb-4">Product Details</h1>
        {product && (
          <Card className="mx-auto" style={{ width: "300px", height: "200px" }}>
            <Card.Body>
              <Card.Title className="mb-3 text-light">{product.name}</Card.Title>
              <Card.Text className="mb-2">Price: ${product.price}</Card.Text>
              <Card.Text className="mb-2">Quantity: {product.quantity}</Card.Text>
            </Card.Body>
          </Card>
        )}
        <Button
          onClick={backToProducts}
          className="btn btn-success mt-4"
        >
          Back
        </Button>
      </div>
    </div>
  );
}
