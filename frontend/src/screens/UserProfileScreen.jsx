// UserProfileScreen.jsx
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../Store";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const UserProfileScreen = () => {
  const navigate = useNavigate();
  const { state } = useContext(Store);
  const { userInfo } = state;

  if (!userInfo) {
    navigate("/signin");
    return null;
  }

  return (
    <Container className="mt-5">
      <Helmet>
        <title>User Profile</title>
      </Helmet>
      <h1 className="mb-4">User Profile</h1>
      <Row>
        <Col md={6} className="mb-4">
          <div className="border p-4">
            <h4 className="mb-3">Personal Information</h4>
            <p>
              <strong>Email:</strong> {userInfo.email}
            </p>
            <p>
              <strong>Name:</strong> {userInfo.name}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfileScreen;
