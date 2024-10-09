import { useEffect, useReducer } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import TitleBanner from "../TitleBanner";
import Hero from "../../Hero";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const HomeScreen = () => {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("http://localhost:5000/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>WristUp</title>
      </Helmet>
      <TitleBanner />
      <Hero />
      <h1>
        <strong>Featured Products</strong>
      </h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
      <div
        className="watch-products-info my-4 p-4 bg-light"
        style={{ backgroundColor: "#444", borderRadius: "15px", color: "#444" }}
      >
        <h2 className="text-center mb-4">🕰️ Discover Exquisite Watches 🕰️</h2>
        <p className="text-center">
          🌟 Explore our meticulously curated collection of high-quality
          watches. Each piece is expertly crafted with precision and style to
          elevate your wrist game. Find the perfect watch that not only tells
          time but also suits your lifestyle and makes a bold statement.
        </p>
        <p className="text-center">
          ⌚ Timekeeping has never been this stylish. From timeless classics to
          cutting-edge innovations, our watch collection caters to every watch
          enthusiast's taste. Find the watch that resonates with your
          personality and adds a touch of elegance to every moment.
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;
