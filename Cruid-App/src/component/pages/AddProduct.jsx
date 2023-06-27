import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  
  let navigate = useNavigate()

  const formSubmit = (e) => {
    e.preventDefault();
  };

  // axios
  //   .post("https://fakestoreapi.com/products", {
  //     title,
  //     price,
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     navigate('/products')
  //   });
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers:{
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

  return (
    <>
      <h1> Add Product</h1>

      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="product title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="product title"
            placeholder=" product Title"
            aria-describedby="product title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="product price"
            aria-describedby="productPrice"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddProduct;
