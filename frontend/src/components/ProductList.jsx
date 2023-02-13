/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await axios.get("http://localhost:5050/products");
    setProducts(response.data);
  };
  return (
    <div className="container mt-5">
      <div className="columns is-multiline">
        {product.map((product) => (
          <div className="column is-one-quarter" key={product.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={product.url} alt="Placeholder image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-4">{product.name}</p>
                    <p className="subtitle is-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur eius suscipit ea accusantium sint vitae porro
                      fugit perferendis soluta expedita.
                    </p>
                  </div>
                </div>
              </div>

              <footer className="card-footer">
                <a className="card-footer-item">Edit</a>
                <a className="card-footer-item">Delete</a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
