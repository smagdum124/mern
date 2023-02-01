import React from "react";
import { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const addproduct = async () => {
    // console.log(name,price,category,company)
    console.log(!name);
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };
  return (
    <div className="add-product">
      <h1 className="text">Add Product</h1>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Enter product name"
        className="input-box"
      />
      {error && !name && (
        <span className="invalid-name"> Enter valid name</span>
      )}
      <input
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        type="text"
        placeholder="Enter product price"
        className="input-box"
      />
          {error && !price && (
        <span className="invalid-name"> Enter valid price</span>
      )}
      <input
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        type="text"
        placeholder="Enter product category"
        className="input-box"
      />
          {error && !category && (
        <span className="invalid-name"> Enter valid category</span>
      )}
      <input
        onChange={(e) => setCompany(e.target.value)}
        value={company}
        type="text"
        placeholder="Enter product company"
        className="input-box"
      />
          {error && !company && (
        <span className="invalid-name"> Enter valid company</span>
      )}
      <button onClick={addproduct} className="btn" type="submit">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
