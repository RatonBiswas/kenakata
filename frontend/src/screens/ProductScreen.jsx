import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import axios from "axios";

const ProductScreen = () => {
  const [product, setProduct] = useState({});
  const { id: productId } = useParams();
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    };
    fetchProducts();
  }, [productId]);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>{" "}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 1 ? "In Stock" : "Out Of Stock"}
                    </strong>{" "}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={product.countInStock === 0}
                >
                  Add To Card
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;

//-------- Without backend and fetch data by axios---------

// import { useParams } from "react-router-dom";
// import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import products from "../products";
// import Rating from "../components/Rating";
// const ProductScreen = () => {
//   const { id: productId } = useParams();
//   const comparedProduct = products.find((product) => product._id === productId);
//   console.log(comparedProduct);
//   return (
//     <>
//       <Link className="btn btn-light my-3" to="/">
//         Go Back
//       </Link>
//       <Row>
//         <Col md={5}>
//           <Image src={comparedProduct.image} alt={comparedProduct.name} fluid />
//         </Col>
//         <Col md={4}>
//           <ListGroup variant="flush">
//             <ListGroup.Item>
//               <h3>{comparedProduct.name}</h3>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <Rating
//                 value={comparedProduct.rating}
//                 text={`${comparedProduct.numReviews} reviews`}
//               />
//             </ListGroup.Item>
//             <ListGroup.Item>Price : ${comparedProduct.price}</ListGroup.Item>
//             <ListGroup.Item>Description: {comparedProduct.description}</ListGroup.Item>
//           </ListGroup>
//         </Col>
//         <Col md={3}>
//           <Card>
//             <ListGroup variant="flush">
//               <ListGroup.Item>
//                 <Row>
//                     <Col>Price:</Col>
//                     <Col><strong>${comparedProduct.price}</strong> </Col>
//                 </Row>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Row>
//                     <Col>Status:</Col>
//                     <Col><strong>{comparedProduct.countInStock> 1 ? 'In Stock' : 'Out Of Stock'}</strong> </Col>
//                 </Row>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Button type="button" className="btn-block" disabled={comparedProduct.countInStock===0}>Add To Card</Button>
//               </ListGroup.Item>
//             </ListGroup>
//           </Card>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default ProductScreen;
