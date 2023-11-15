/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
// import products from "../products";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() =>{
      const fetchProduct = async()=>{
        const {data} = await axios.get("/api/products"); // fetch data from backend
        setProducts(data)
        console.log(data);
      }
      fetchProduct()
  },[])
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          //   const { name } = product;
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
