import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Tilt from 'react-tilt';
import './Experience.css';
function Experience() {
  return (
    <div id="experience" className="exp">
      <h1 className="pt-3 text-center font-details-b pb-3">Experience</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize align-items-center"
                  src="#"
                  alt="logo....."
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Front End Developer
                  </Card.Title>
                </div>
                <div>
                  <div className="text-center style">
                    <strong className="body-title-style ">
                      Neproid Academy
                    </strong>
                    <br />
                    <strong>Programing Language:</strong> HTML5,
                    javascript,Bootstrap ,css,jquery..
                    <br />
                    <strong>Duration:</strong> Internship (2020)
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Well Trained</strong> in Neproid Academy
                      </li>
                      <li>
                        <strong>Developed</strong> Website using Reactjs,
                        javascript,Bootstrap ,css.
                      </li>
                      <li>
                        <strong>Provided</strong> assistance to senior
                        colleagues according to changes in client
                        specifications.
                      </li>
                      <li>
                        <strong>Created</strong>n.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Experience;
