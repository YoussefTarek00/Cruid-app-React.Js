import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState();

  let { productID } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, []);

  return <>
  {product && <h1> {product.title} </h1>}
  {product && <p> {product.description} </p>}
  {/* {product && <img> {product.image} </img>} */}
  {product && <p>Price: {product.price} </p>}
  </>;
}

export default ProductDetails;
