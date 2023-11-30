// Jsx to use emmits for the app

// rafce to create a react arrow function component with export
import React from "react";

// ? Importing all components to show them on the page
// importing the nav component
import Nav from "./components/nav/Nav";
// Import product page
import ProductPage from "./components/product/ProductPage";

const Product = () => {
  return (
    // Importing all components in the main app(lication) to show them on the page
    // Components in order of view order
    <div>
      <Nav />
      <ProductPage />
    </div>
  );
};

export default Product;
