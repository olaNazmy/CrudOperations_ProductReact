import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import { getProductById,updateProduct,addProduct} from "../api/productAPI";
import '../css/productform.css';

import { useNavigate, useParams } from "react-router-dom";

/**Set Product Object */
export default function ProductForm({ productId, onSubmit }) 
 {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: ''
  });
  /**navigate and get id from url */
  let [product,setProduct] = useState(); 
  const navigate = useNavigate();
  const {id} = useParams();
  /**use effect to  */
useEffect(() => 
{
  /**check id value to decide add or edit */
  if(id !== 0)
    {
      getProductById(id).then(response =>
        {
          setFormData(response.data);
        }).catch(error=>
        {
          console.log(error)
        })
    }

},[]);


 

  /**Set Data */
  const FormHandler = (e) => 
  {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
      [e.target.price] : e.target.value,
      [e.target.quantity] : e.target.value

    })
  }

  const handleSubmit = (e) => 
  {
    e.preventDefault();
    if(id == 0)
      {
        addProduct(formData).then(()=>{
          navigate('/products');
    
        }).catch((error)=>console.log(error));
    
      }
      else
      {
        updateProduct(id,formData);
        navigate('/products');
      }
  };

  return (
    <div>
      <h1>{productId ? 'Edit Product' : 'Add Product'}</h1>
      <div className="container mt-3">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter product name"
              onChange={FormHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProductPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              placeholder="Enter price"
              onChange={FormHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProductQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              value={formData.quantity}
              placeholder="Enter quantity"
              onChange={FormHandler}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {id == 0 ? 'Add Product' : 'Update Product'}
          </Button>
        </Form>
      </div>
    </div>
  );
}
