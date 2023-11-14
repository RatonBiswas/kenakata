import { useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import products from "../products";
import Rating from "../components/Rating";
const ProductScreen = () => {
  const { id: productId } = useParams();
  const comparedProduct = products.find((product) => product._id === productId);
//   console.log(comparedProduct);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={comparedProduct.image} alt={comparedProduct.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{comparedProduct.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={comparedProduct.rating}
                text={`${comparedProduct.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price : ${comparedProduct.price}</ListGroup.Item>
            <ListGroup.Item>Description: {comparedProduct.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                    <Col>Price:</Col>
                    <Col><strong>${comparedProduct.price}</strong> </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                    <Col>Status:</Col>
                    <Col><strong>{comparedProduct.countInStock> 1 ? 'In Stock' : 'Out Of Stock'}</strong> </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button type="button" className="btn-block" disabled={comparedProduct.countInStock===0}>Add To Card</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
