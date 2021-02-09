import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './Aboutme.style.css';

function Aboutme() {
  return (
    <div id="aboutme">
      <h1 className="pt-3 text-center font-details-b pb-3">About me</h1>
      <Container>
        <Row>
          {/* about image section */}
          <Col xs={12} md={6}>
            <Row>
              <Image
                className="about-image"
                src={process.env.PUBLIC_URL + '/Image/about-image.jpg'}
                thumbnail
              />
            </Row>
          </Col>
          {/* aboutme description section */}
          <Col xs={12} md={6}>
            <Row className=" about-details">
              Hi there! My name is{' '}
              <strong className="mb-4">&nbsp;Sudeep Bhandari</strong>
              <br />
              I am a student from CITE, Tinkune, Kathmandu. Currently studying
              Bachalor in Computer Application (BCA) learning to improve digital
              customer experience through my college . I am passionate about Web
              and Mobile App Development using JavaScript. I aspire to be a Full
              Front End Web Developer with HTML, CSS, JavaScript, React.js.
              <br />
              I love continuous learning to improve my skills as well as add new
              tools under my belt.
              <br />
              I work well in a team setting and believe in using my full
              potential towards providing better solutions to clients.
              <br />I love learning about new technologies, what problems are
              they solving and How can I use them to build better and scalable
              products. My vision is to make a difference in the world through
              technology.
              <br /> <br />
            </Row>
            <Row className="mt-3">
              <div>
                <a href="#contact">
                  <Button className="m-2" variant="outline-primary">
                    Let's Talk
                  </Button>
                </a>
              </div>
              <div>
                <a
                  href="D:/CV/Sudeep%20Bhandari%20Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="m-2" variant="outline-success">
                    My Resume
                  </Button>
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/sudeepbhandari6545"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="m-2" variant="outline-dark">
                    GitHub
                  </Button>
                </a>
              </div>
              <div>
                <a
                  href="https://np.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="m-2" variant="outline-info">
                    LinkedIn
                  </Button>
                </a>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutme;
