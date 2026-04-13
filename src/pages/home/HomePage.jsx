import Header from "../../components/Header";

import "./HomePage.css";

import axios from "axios";
import { useEffect, useState } from "react";
import ProductGrids from "./ProductGrids";

const HomePage = ({ cartItems }) => {
  // fetch("http://localhost:3000/api/products").then((response) => {
  //   response.json().then((data) => {
  //     console.log(data);
  //   });
  // });

  const [products2, setProducts2] = useState([]);

  useEffect(() => {
    // axios
    //   .get("/api/products")
    //   .then((response) => {
    //     setProducts2(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts2(response.data);
    };

    getHomeData();
  }, []);

  //same as above but with better formatting
  // fetch("http://localhost:3000/api/products").then((response) => {
  //   return response.json()
  // }).then((data) => {
  //   console.log(data);
  // });

  return (
    <>
      <title>Home</title>
      <Header cartItems={cartItems} />

      <div className="home-page">
        <ProductGrids products={products2} />
      </div>
    </>
  );
};

export default HomePage;
