import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import axios from "axios";
import { useContext } from "react";
import { Store } from "../Store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = (props) => {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    toast.success(" Successfully Added to Cart", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  return (
    <Card className="custom-card border-0 custom-grey-bg">
      <Link to={`/product/${product.slug}`} className="card-link">
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body className="custom-card-body">
        <Link to={`/product/${product.slug}`} className="card-link">
          <Card.Title className="custom-card-title">{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text className="custom-card-text">${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled className="custom-button">
            Out of stock
          </Button>
        ) : (
          <Button
            onClick={() => addToCartHandler(product)}
            className="custom-button"
          >
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
