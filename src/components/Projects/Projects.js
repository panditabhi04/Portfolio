import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import book from "../../Assets/Projects/book.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import CRUD from "../../Assets/Projects/MERN-CRUD.png";
import ecommerce from "../../Assets/Projects/ecommerce.jpg";
import todolist from "../../Assets/Projects/todolist.jpg";
import Imadb from "../../Assets/Projects/IMDB.jpg";

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
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce"
              description="Developed a dynamic and user-friendly e-commerce platform using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application features a robust product catalog, secure user authentication, and a seamless shopping cart experience. It also includes real-time inventory management, efficient order processing, and an intuitive admin dashboard for managing products and users."
              ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Imadb}
              isBlog={false}
              title="IMDB Clone"
              description="
              Crafted a captivating IMDb clone using React.js. Dynamic movie listings, detailed reviews, and user ratings bring the cinema world to life. Advanced search functionality and personalized user profiles enhance the experience. Responsive design ensures seamless browsing. Admin panel streamlines content management. A cinematic journey awaits on this immersive platform."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Book Appointment For Clinic"
              description="Designed and developed a comprehensive Book Appointment for Clinic application using the MERN stack. Seamlessly schedule appointments, manage patient information, and track medical records. Secure user authentication ensures data confidentiality. Intuitive interface simplifies appointment booking process. Real-time updates and notifications enhance user experience. Efficient clinic management at your fingertips."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CRUD}
              isBlog={false}
              title="Student Application"
              description="Developed a robust Student Application application using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows users to Create, Read, Update, and Delete records seamlessly. It features a responsive user interface, secure authentication, real-time data updates, and an intuitive admin panel for efficient data management."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

      

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="MERN TodoList"
              description="Crafted a dynamic TodoList application using the MERN stack. Seamlessly manage tasks, prioritize activities, and track progress with ease. Secure user authentication ensures data privacy. Intuitive user interface facilitates effortless task management. Real-time updates and notifications keep users informed. Simplify your day-to-day with this efficient and user-friendly TodoList solution."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
