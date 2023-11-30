import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  // Get the id from the url
  const { id, name } = useParams();

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product id: {id}</p>
      <p>Product name: {name}</p>
    </div>
  );
};

export default ProductPage;
