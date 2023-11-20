import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tony Yun </span>
            from <span className="purple"> Seoul, South Korea.</span>
            <br />
            I'm currently working as a software engineer(App developer) in an IT
            company with 1 and a half year of experience.
            <br />I graduated from Peking University, majored in business
            administration.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Drinking Beer 🍻
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 🛫
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference !"{" "}
          </p>
          <footer className="blockquote-footer">Tony Yun</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
