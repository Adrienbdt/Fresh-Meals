import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import htmlParse from "html-react-parser";
import Image from "react-bootstrap/Image";

export default function ProductModal(props) {
  return (
    <Modal
      className="product-modal"
      show={props.show}
      onHide={props.handleClose}
      onEscapeKeyDown={props.handleClose}
      backdrop="static"
      keyboard={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ margin: "0 auto", color: "#fff", fontSize: "1.5em" }}
        >
          <span id="modal_title_left">{props.product.title}</span>
          <span id="modal_title_right">
            <Button id="btn_close_modal" onClick={props.handleClose}>
              <span
                style={{
                  transform: "translate(-50%, -55%)",
                  position: "absolute",
                  fontWeight: "700",
                }}
              >
                x
              </span>
            </Button>
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          margin: "0 auto",
          color: "#152619",
          fontSize: "0.2em !important",
          display: "block",
          position: "relative",
        }}
      >
        <Image
          style={{
            width: "70%",
            display: "block",
            margin: "0 auto",
          }}
          src={props.product.image.src}
          roundedCircle
        />
        <span id="modal_desc">{htmlParse(props.product.body_html)}</span>
        <span
          id="price_modal_left"
          style={{
            display: "block",
            position: "relative",
            margin: "0 auto",
            fontWeight: 700,
            color: "#b81d19",
            textAlign: "center",
          }}
        >
          ${props.product.variants[0].price}
        </span>
      </Modal.Body>
      <Modal.Footer>
        <span id="button_modal_right">
          <Button
            id="btn_add_cart"
            onClick={props.addToCart}
            variant="primary"
            block
          >
            Add to Cart
          </Button>
        </span>
      </Modal.Footer>
    </Modal>
  );
}
