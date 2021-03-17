import React, { useState } from "react";
import { getProducts } from "../api";
import {
  Container,
  Badge,
  Card,
  ListGroup,
  Row,
  Col,
  Grid,
  Form,
  Button,
} from "react-bootstrap";
import htmlParse from "html-react-parser";
import Navbar from "../components/Navigation/Navbar";
import ProductModal from "../components/Modals/ProductModal";
import Footer from "../components/Footer/Footer";
import {
  faCartPlus,
  faShoppingCart,
  shoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Shop() {
  const payload = getProducts();
  const [shoppingCart, setShoppingCart] = useState({
    products: {},
  });

  // Display Total or not - by default should not be displayed
  const [totalShow, setTotalShow] = useState(false);

  const [showModalProductId, setShowModalProductId] = useState();

  const toggleTotal = () => {
    setTotalShow((prev) => true);
  };

  //Remove prod from cart
  const removeProdFromCart = (productId) => {
    setShoppingCart((current) => {
      const newProducts = { ...current.products };
      delete newProducts[productId];
      return {
        products: newProducts,
      };
    });
  };

  // our shoppingCart STATE will change through setShoppingCart() :
  const addToShoppingCart = (product) => {
    setShoppingCart((currentShoppingCart) => {
      // products{} assigned to local variable newProducts
      const newProducts = { ...currentShoppingCart.products };
      // newProducts contains all the properties of each product
      // product key - value all the properties of the targeted product object
      // quantity key - value --- if this proty, else seduct.id is already part of our newProducts [] then add 1 to the quantit 1
      const newQuantity = newProducts[product.id]
        ? newProducts[product.id].quantity + 1
        : 1;

      newProducts[product.id] = {
        product: product,
        quantity: newQuantity,
        subTotal: newQuantity * product.variants[0].price,
      };

      if (newProducts[product.id].quantity > 0 && totalPrice != null) {
        toggleTotal();
      }

      return {
        products: newProducts, //OBJECT TO LOOP OVER
      };
    });
  };

  const subtractProduct = function (productId) {
    setShoppingCart((current) => {
      const newProducts = { ...current.products };

      const newProduct = { ...newProducts[productId] };
      newProduct.quantity = current.products[productId].quantity - 1;
      const productPrice = newProducts[productId].product.variants[0].price;
      newProduct.subTotal = newProduct.quantity * productPrice;

      if (newProduct.quantity < 1) {
        delete newProducts[productId];
      } else {
        newProducts[productId] = newProduct;
      }

      const newShoppingCart = {
        products: newProducts,
      };
      return newShoppingCart;
    });
  };

  const showModal = (productId) => {
    setShowModalProductId(productId);
  };

  /* COMPONENT RENDERING */

  // SHOPPING CART ELEMENTS RENDERING
  const shoppingCartElements = [];
  for (const productId in shoppingCart.products) {
    shoppingCartElements.push(
      <Container>
        <Row style={{ paddingTop: "1em" }}>
          <Col
            id="cart_desc_col"
            lg={8}
            style={{
              display: "flex",
              fontSize: "0.8em",
              paddingRight: "0px !important",
            }}
          >
            {shoppingCart.products[productId].product.title}
          </Col>

          <Col lg={1} style={{ display: "flex", justifyContent: "center" }}>
            <Button
              className="btn_cart_add_rem"
              data-item={productId}
              onClick={(event) => subtractProduct(productId)}
              variant="primary"
              size="sm"
              id="removeQty"
            >
              <span
                style={{
                  transform: "translate(-50%, -55%)",
                  position: "absolute",
                  fontWeight: "700",
                }}
              >
                -
              </span>{" "}
            </Button>
          </Col>
          <Col lg={1} style={{ display: "flex", justifyContent: "center" }}>
            <Badge pill style={{ width: "100% !important" }}>
              {shoppingCart.products[productId].quantity}
            </Badge>
          </Col>
          <Col lg={1} style={{ display: "flex", justifyContent: "center" }}>
            <Button
              className="btn_cart_add_rem"
              onClick={(event) =>
                addToShoppingCart(shoppingCart.products[productId].product)
              }
              variant="primary"
              size="sm"
            >
              <span
                style={{
                  transform: "translate(-50%, -55%)",
                  position: "absolute",
                  fontWeight: "700",
                }}
              >
                +
              </span>{" "}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              id="cart_remove_full_item"
              onClick={(event) => removeProdFromCart(productId)}
              style={{ fontSize: "0.8em" }}
            >
              Remove
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  // ALL PRODUCTS
  const productElements = payload.products.map((product, idx) => (
    <Container
      className="prod_card"
      style={{
        display: "flex",
        margin: "0.9em 0",
        width: "30%",
        justifyContent: "space-between",
      }}
    >
      <ProductModal
        show={showModalProductId === product.id}
        product={product}
        handleClose={(event) => setShowModalProductId(null)}
        addToCart={(event) => {
          addToShoppingCart(product);
          setShowModalProductId(null);
        }}
      />
      <Row>
        <Col>
          <Card style={{ padding: " 0" }}>
            <Card.Img variant="top" src={product.image.src} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${product.variants[0].price}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                id="btn_view_more"
                onClick={(event) => showModal(product.id)}
                variant="link"
              >
                View More
              </Button>
              <Button
                id="btn_add_cart"
                onClick={(event) => addToShoppingCart(product)}
              >
                <FontAwesomeIcon icon={faCartPlus} className="icon_add_cart" />
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  ));

  ///////////////////////////
  // SHOPPING SECTION MAIN
  /////////////////////////////

  let totalPrice = 0.0;
  let totalP = `$ ${Math.round(totalPrice)}`;
  for (const productId in shoppingCart.products) {
    totalPrice += shoppingCart.products[productId].subTotal;
  }
  return (
    <div className="shop_wrapper">
      <Container fluid>
        {/* Navbar */}
        <Row>
          <Col style={{ padding: 0 }}>
            <Navbar title="Shop" />
          </Col>
        </Row>
        <Row>
          <Col style={{ height: "5em" }}></Col>
        </Row>
        {/* Products - left */}
        <Row>
          <Col lg={9}>
            <Container>
              <Col>
                <Row
                  id="list_products_row"
                  style={{
                    display: "flex",
                  }}
                >
                  {productElements}
                </Row>
              </Col>
            </Container>
          </Col>
          {/* Shopping Cart */}
          <Col lg={3} id="cart_col">
            <Card style={{ padding: "0 !important" }}>
              <Card.Header>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  id="icon_cart_shopcart"
                />
                Your Order
              </Card.Header>
              {shoppingCartElements}
              {totalShow && totalPrice != 0 ? (
                <span id="cart_total">Total: $ {totalPrice.toFixed(2)}</span>
              ) : null}
            </Card>
          </Col>
        </Row>
        <Col className="lastCol" style={{ padding: "0" }}>
          <Row style={{ marginTop: "6em" }}>
            <Footer />
          </Row>
        </Col>
      </Container>
    </div>
  );
}
