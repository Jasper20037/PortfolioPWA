// Jsx to use emmits for the app

// rafce to create a react arrow function component with export
import React from "react";

// ? Importing all components to show them on the page
// Importing the header component
import Header from "./components/header/Header";
// importing the nav component
import Nav from "./components/nav/Nav";
// importimng the about component
import About from "./components/about/About";
// importing the experience component
import Experience from "./components/experience/Experience";
// importing services component
import LearningOutcomes from "./components/learningOutcomes/LearningOutcomes";
// importing main component
import Main from "./components/main/Main";
// importing testimonials component
import Feedbacks from "./components/feedback/Feedback";
// importing contact component
import Contact from "./components/contact/Contact";
// importing footer component
import Footer from "./components/footer/Footer";
// importing routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./components/product/ProductPage";

const App = () => {
  return (
    // Importing all components in the main app(lication) to show them on the page
    // Components in order of view order
    <div>
      {/* All components */}
      <Header />
      <Nav />
      <About />
      <Experience />
      <LearningOutcomes />
      {/* <Routes>
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes> */}
      <Main />
      <Feedbacks />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/header/Header";
// import Nav from "./components/nav/Nav";
// import About from "./components/about/About";
// import Experience from "./components/experience/Experience";
// import LearningOutcomes from "./components/learningOutcomes/LearningOutcomes";
// import Main from "./components/main/Main";
// import Feedbacks from "./components/feedback/Feedback";
// import Contact from "./components/contact/Contact";
// import Footer from "./components/footer/Footer";
// import ProductPage from "./components/product/ProductPage"; // Import the ProductPage component

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Nav />
//         <Routes>
//           <Route path="/product/:bookmark" element={<ProductPage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/experience" element={<Experience />} />
//           <Route path="/main" element={<Main />} />
//           <Route path="/feedback" element={<Feedbacks />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/footer" element={<Footer />} />
//           <Route path="/" element={<LearningOutcomes />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
