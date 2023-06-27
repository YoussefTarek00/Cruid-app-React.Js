import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import Swal from "sweetalert2";

import "./Product.css";

function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  };

  const deleteProduct = (product) => {
    Swal.fire({
      title: `r u sure to delete ${product.title}?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`https://fakestoreapi.com/products/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            getAllProducts();
          });
      }
    });
  };
  return (
    <>
      <h1>Products Page</h1>

      <Link to={"/products/add"} className="btn btn-success mt-3">
        Add New Product
      </Link>

      <table className="table table-success table-striped mt-5 products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>operations</th>
          </tr>
        </thead>

        <tbody>
          {product.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description.slice(0, 20)}...</td>
                <td>price: {product.price}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(product)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-info btn-sm"
                  >
                    View
                  </Link>
                  <button className="btn btn-primary btn-sm">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Outlet />
    </>
  );
}

export default Products;
