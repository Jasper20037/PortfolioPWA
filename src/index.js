// importing reactDOM to render components and elements
import ReactDOM from "react-dom";
// importing App component
import App from "./App";
// importing router component
import { BrowserRouter } from 'react-router-dom';
// importing css file
import "./main.css";


// rendering App component (app.jsx - const app) in id root (index.html (main))
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));

// rendering App component (Product.jsx - const Product) in id root (productPage.html (main))
// ReactDOM.render(<Product />, document.getElementById("product-page"));
