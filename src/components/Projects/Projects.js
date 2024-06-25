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
              ghLink="https://github.com/panditabhi04/Ecomm.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Imadb}
              isBlog={false}
              title="IMDB Clone"
              description="
              Crafted a captivating IMDb clone using React.js. Dynamic movie listings, detailed reviews, and user ratings bring the cinema world to life. Advanced search functionality and personalized user profiles enhance the experience. Responsive design ensures seamless browsing. Admin panel streamlines content management. A cinematic journey awaits on this immersive platform."
              ghLink="https://github.com/AbhishekPandit4/IMDB.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Book Appointment For Clinic"
              description="Designed and developed a comprehensive Book Appointment for Clinic application using the MERN stack. Seamlessly schedule appointments, manage patient information, and track medical records. Secure user authentication ensures data confidentiality. Intuitive interface simplifies appointment booking process. Real-time updates and notifications enhance user experience. Efficient clinic management at your fingertips."
              ghLink="https://github.com/panditabhi04/Book_Appointment_For_Clinic.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CRUD}
              isBlog={false}
              title="Student Application"
              description="Developed a robust Student Application application using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows users to Create, Read, Update, and Delete records seamlessly. It features a responsive user interface, secure authentication, real-time data updates, and an intuitive admin panel for efficient data management."
              ghLink="https://github.com/panditabhi04/Crud.git"
            />
          </Col>

      

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="MERN TodoList"
              description="Crafted a dynamic TodoList application using the MERN stack. Seamlessly manage tasks, prioritize activities, and track progress with ease. Secure user authentication ensures data privacy. Intuitive user interface facilitates effortless task management. Real-time updates and notifications keep users informed. Simplify your day-to-day with this efficient and user-friendly TodoList solution."
              ghLink="https://github.com/AbhishekPandit4/MERN_TodoList.git"
            />
          </Col>

       <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anime}
              isBlog={false}
              title="Anime Characters"
              description="Creating an Anime Characters Card Project involves designing visually appealing, detailed cards featuring popular anime characters. Each card showcases unique attributes, skills, and backstories, making them collectible and engaging. The project blends artistic creativity with precise character representation. High-quality illustrations, captivating descriptions, and interactive elements provide an immersive experience, celebrating the diversity and richness of anime culture."
              ghLink="https://github.com/AbhishekPandit4/React_Anime.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
