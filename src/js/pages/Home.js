import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer/Footer";

export const Home = () => {
  let history = useHistory();

  const [validated, setValidated] = useState(false);
  const [zipCodeInvalid, setZipCodeInvalid] = useState(false);
  const [zipCodeFeedback, setZipCodeFeedback] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [emailFeedback, setEmailFeedback] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const zipcode = formData.get("zipcode");
    const email = formData.get("email");
    const emailRegEx = /\S+@\S+\.\S+/;
    const emailResult = emailRegEx.test(email);

    setZipCodeInvalid(false);
    setEmailInvalid(false);

    if (!zipcode) {
      setZipCodeInvalid(true);
      setZipCodeFeedback("Please enter a zipcode");
      return;
    } else if (zipcode !== "10001") {
      setZipCodeInvalid(true);
      setZipCodeFeedback("We do not deliver to your area");
      console.log(zipCodeFeedback);

      return;
    } else if (!email || !emailResult) {
      console.log(`email invalid should kick in`);
      setEmailInvalid(true);
      setEmailFeedback("Please enter a valid email address");
      console.log(emailFeedback);
      return;
    }

    history.push("/order");
  };

  return (
    <div className="wrapper">
      <Container fluid>
        <Row>
          <Col style={{ padding: 0 }}>
            <Navbar title="Home" />
          </Col>
        </Row>
        {/* MAIN CONTENT */}
        <Row
          className="home"
          style={{
            margin: "10em 0 0 0",
          }}
        >
          <Col>
            <div className="container_main">
              <div className="container_main_left">
                <Col>
                  <Row>
                    <h2>Fresh Meal Plans</h2>
                  </Row>
                  <Row style={{ height: "2em" }}></Row>
                  <Row>
                    <p>Our purpose is to nourish people and their mind</p>
                    <p>
                      We deliver plant based delicious meals at your door step
                    </p>
                  </Row>
                </Col>
              </div>
              <div className="container_main_right">
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={onSubmit}
                  className="home_form"
                >
                  <Form.Group>
                    <Form.Label>Please indicate your zipcode</Form.Label>
                    <Form.Control
                      isInvalid={zipCodeInvalid}
                      name="zipcode"
                      type="zipcode"
                      placeholder="Zip Code"
                    />
                    <Form.Control.Feedback type="invalid">
                      {zipCodeFeedback}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Please enter your email address</Form.Label>

                    <Form.Control
                      isInvalid={emailInvalid}
                      name="email"
                      placeholder="Email"
                    />
                    <Form.Control.Feedback type="invalid">
                      {emailFeedback}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button id="btn_shop_now" type="submit">
                    Shop now
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
        <Col>
          <Row
            style={{
              margin: "10em 0 0 0",
            }}
          ></Row>
        </Col>
        {/* FOOTER */}
        <Col className="lastCol" style={{ padding: "0" }}>
          <Row>
            <Footer />
          </Row>
        </Col>
      </Container>
    </div>
  );
};
