/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5050/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5050/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="title mt-6 md-3 has-text-centered is-uppercase has-text-weight-bold">
        Parfume Product List
      </h1>
      <p className="is-size-5 has-text-centered">
        Create CRUD with input card image using Express.JS, React.JS
      </p>
      <Link to="/add" className="button is-success px-5">
        Create New
      </Link>
      <div className="columns is-multiline mt-2">
        {products.map((product) => (
          <div className="column is-one-quarter" key={product.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={product.url} alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{product.name}</p>
                  </div>
                </div>
              </div>

              <footer className="card-footer">
                <Link
                  to={`edit/${product.id}`}
                  className="card-footer-item button is-info m-1"
                >
                  Edit
                </Link>
                <a
                  onClick={() => deleteProduct(product.id)}
                  className="card-footer-item button is-danger m-1"
                >
                  Delete
                </a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
