import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { render } from "react-dom";

import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FoodFooter() {
  return (
    <Container className="bottomCont" fluid>
      <footer class="foot">
        <div class="container">
          <div class="row" id="footer_top">
            <div class="col-md-4 footer-column">
              <ul class="foot flex-column">
                <li class="foot-item">
                  <span class="footer-title">Meal Plans</span>
                </li>

                <li class="foot-item">
                  <a class="foot-link" href="#">
                    Farms
                  </a>
                </li>
                <li class="foot-item">
                  <a class="foot-link" href="#">
                    Plans & Prices
                  </a>
                </li>
                <li class="foot-item">
                  <a class="foot-link" href="#">
                    Frequently asked questions
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 footer-column">
              <ul class="foot flex-column">
                <li class="foot-item">
                  <span class="footer-title">Fresh Meal Plans</span>
                </li>
                <li class="foot-item">
                  <a class="foot-link" href="#">
                    About us
                  </a>
                </li>
                <li class="foot-item">
                  <a class="foot-link" href="#">
                    Job postings
                  </a>
                </li>
                <li class="foot-item">
                  <a class="foot-link" href="#">
                    News and articles
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 footer-column">
              <ul class="foot flex-column">
                <li class="foot-item">
                  <span class="footer-title">Contact & Support</span>
                </li>
                <li class="foot-item">
                  <a class="foot-link" href="#">
                    <i class="fas fa-comments"></i>Live chat
                  </a>
                </li>
                <li class="foot-item">
                  <a class="foot-link" href="#">
                    <i class="fas fa-envelope"></i>Contact us
                  </a>
                </li>
                <li class="foot-item">
                  <a class="foot-link" href="#">
                    <i class="fas fa-star"></i>Give feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="row-center" style={{ backgroundColor: "#fff" }}>
            <div class="col-md-4 box">
              <span class="copyright">
                Copyright &copy; {"Fresh Meal Plans"}
              </span>
            </div>
            <div class="col-md-4 box">
              <ul class="social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} className="social_i" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 box" id="last_term">
              <a href="#">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
}
