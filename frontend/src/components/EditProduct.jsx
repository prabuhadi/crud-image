import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files(0);
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form>
          <div className="field">
            <label className="label">Product Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Product Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Product Name</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                  />
                  <span className="fila-cta">
                    <span className="file-label">Choose File</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
