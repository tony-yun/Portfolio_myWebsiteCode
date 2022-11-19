import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import wateraiInfo from "../../Assets/Projects/wateraiInfo.png";
import suicide from "../../Assets/Projects/suicide.png";
import smallDataControl from "../../Assets/Projects/smallDataControl.png";
import wateraiCamera from "../../Assets/Projects/wateraiCamera.png";
import smallWateraiCollector from "../../Assets/Projects/smallWateraiCollector.png";
import smallBbeego from "../../Assets/Projects/smallBbeego.png";
import floodforecast from "../../Assets/Projects/floodforecast.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wateraiInfo}
              isBlog={false}
              title="(Main)[React Native] wateraiInfo"
              description="The app published on App Store & Google Play Store. From design and coding to publish on store worked by myself, check the full description about application on Github : "
              ghLink="https://github.com/tony-yun/Portfolio_projectCode/tree/master/infoApp"
              demoLink="https://blog.naver.com/lifeyun24/222930485570"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smallWateraiCollector}
              isBlog={false}
              title="[React Native] File Uploading App"
              description="The application for users (Internally) to upload videos and form data to server. View the screenshot and features in Github:"
              ghLink="https://github.com/tony-yun/Portfolio_projectCode/tree/master/uploadApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wateraiCamera}
              isBlog={false}
              title="[React Native] Auto Recording App"
              description="The application made to replace the CCTV, features are auto & loop recording, could change the recording duration and zoom value according to response data."
              ghLink="https://github.com/tony-yun/Portfolio_projectCode/tree/master/cameraApp"
              demoLink="https://blog.naver.com/lifeyun24/222898997954"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smallDataControl}
              isBlog={true}
              title="[React Native] Data Control App"
              description="The application to modify and fetching the data from Database, with using axios, nodejs and database connection. Available with MySQL CRUD queries."
              ghLink="https://blog.naver.com/lifeyun24/222889715832"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smallBbeego}
              isBlog={true}
              title="[React] bbeego"
              description="Designed responsive website by using React (team project), then turned the website into webview app. The site: https://www.bbeego.com/"
              ghLink="https://blog.naver.com/lifeyun24/222759490806"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={floodforecast}
              isBlog={true}
              title="[Data engineering] Data forecast"
              description="With using Python, Pandas lib, PyTorch, Cuda to forecast the flood(LSTM), increased the accuracy from 20% to 80%."
              ghLink="https://blog.naver.com/lifeyun24/222869311919"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
