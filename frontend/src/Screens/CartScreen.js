import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);


  const removeFromCartHandler = (id) => {
      dispatch(removeFromCart(id))
  }
  // (function removeFromCartHandler(id){
  //   dispatch(removeFromCart(id))
  // })();

  const checkoutHandler = () => {
      history.push('/login?redirect=shipping')
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Button className='btn btn-success'>
            <Link to="/">Go Back</Link>
          </Button>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroupItem key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) => 
                        dispatch(addToCart(item.product, Number(e.target.value)))}
                    >
                     
                      {[...Array(item.stock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                      <Button type='button' variant='danger' onClick={() => removeFromCartHandler(item.product)}><i className='fa fa-trash'></i></Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>

    { cartItems.length === 0 ? <h1>Cart Is Empty!</h1> : (
       <Col md={4}>
          <Card>
              <ListGroup variant='flush'>
                  <ListGroupItem>
                      <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items </h2>
                      <h6>Total Amount: ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</h6>
                      {/* <h6>Tax: ${cartItems.reduce((acc, item) => acc + item.qty * item.price * 0.12, 0).toFixed(2)}</h6>
                      <h6>Shipping Fee: ${cartItems.reduce((acc, item) => acc + item.qty * item.price / 10, 0).toFixed(2)}</h6> */}
                  </ListGroupItem>
                  <ListGroupItem>
                      <Button type='button' className='btn-block' disabled={cartItems.length === 0}
                      onClick={checkoutHandler}>Proceed to Checkout</Button>
                  </ListGroupItem>
              </ListGroup>
          </Card>
      </Col>
    )}
      
    </Row>
  );
};

export default CartScreen;
