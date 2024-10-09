import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProductScreen from "./screens/ProductScreen.jsx";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext } from "react";
import { Store } from "./Store.jsx";
import CartScreen from "./screens/CartScreen.jsx";
import SigninScreen from "./screens/SigninScreen.jsx";
import SignupScreen from "./screens/SignupScreen.jsx";
import ShippingAddressScreen from "./screens/ShippingAddressScreen.jsx";
import PaymentMethodScreen from "./screens/PaymentMethodScreen.jsx";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.jsx";
import OrderScreen from "./screens/OrderScreen.jsx";
import OrderHistoryScreen from "./screens/OrderHistoryScreen.jsx";
import UserProfileScreen from "./screens/UserProfileScreen.jsx";

const App = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1}></ToastContainer>
        <header>
          <Navbar
            bg="dark"
            variant="dark"
            className="fixed-top"
            expand="lg"
            style={{
              background: "rgba(240, 240, 240, 0.8)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <h4>
                    {" "}
                    <strong>WristUp⌚</strong>
                  </h4>
                </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto w-100  justify-content-end">
                  <Link to="/" className="nav-link">
                    Home / Products
                  </Link>
                  <Link to="/cart" className="nav-link">
                    Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>

                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link" to="/signin">
                      Sign In
                    </Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/order/:id" element={<OrderScreen />}></Route>

              <Route
                path="/orderhistory"
                element={<OrderHistoryScreen />}
              ></Route>
              <Route path="/profile" element={<UserProfileScreen />} />
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>
              <Route path="/payment" element={<PaymentMethodScreen />}></Route>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>

        <footer className="bg-dark text-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2 className="text-primary">
                  <strong>About WristUp</strong>
                </h2>

                <p>
                  Welcome to <span className="text-primary">WristUp</span>,
                  where time meets elegance. We are passionate about delivering
                  timepieces that transcend mere functionality, turning each
                  moment into a stylish statement. Our commitment to quality
                  ensures that every watch in our collection is a masterpiece,
                  designed to complement your unique style and grace every
                  occasion. Explore the world of WristUp and discover the
                  perfect companion for your journey through time.
                </p>
              </div>
              <div className="col-md-4">
                <h2 className="text-primary">Quick Links</h2>
                <ul className="list-unstyled">
                  <Link to="/">
                    <li>Home</li>
                  </Link>
                  <Link to="/">
                    <li>Products</li>
                  </Link>

                  <Link to="/signup">
                    <li>Sign Up</li>
                  </Link>

                  <Link to="/profile">
                    {" "}
                    <li>user profile</li>
                  </Link>
                </ul>
              </div>
              <div className="col-md-4">
                <h2 className="text-primary">Contact Us</h2>
                <p>
                  Email: <a href="mailto:info@WristUp.com">info@WristUp.com</a>
                </p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="mb-0 ">
              © 2024 WristUp Watch Company. All rights reserved.
              <br />
              <br />
              <strong className="text-primary">
                <h3>Developed By Muhammad Akram Khan</h3>
              </strong>
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
