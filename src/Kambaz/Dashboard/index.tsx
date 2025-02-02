import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img variant="top" src="/images/reactjs.jpg" width={200} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS1234 React JS
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Full Stack software developer
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/5678/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/miffy.jpeg"
                  width={200}
                  style={{ objectFit: "cover", height: "160px" }}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    ARTG1123 Illustration
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Designing
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/91011/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/fish.jpeg"
                  width={200}
                  style={{ objectFit: "cover", height: "160px" }}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    BIO1837 Marine Biology
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Saving Fish
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1213/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/bear.jpeg"
                  width={200}
                  style={{ objectFit: "cover", height: "160px" }}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    PHIL1437 Mindfulness
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Relaxing
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1415/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/meow.jpeg"
                  width={200}
                  style={{ objectFit: "cover", height: "160px" }}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    PHIL1565 Beauty and Art
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Defining Beauty
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1617/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/myrollingstar.jpeg"
                  width={200}
                  style={{ objectFit: "cover", height: "160px" }}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    PHIL3827 Happiness
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Finding Meaning
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/1819/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/images/frogg.jpeg"
                  width={200}
                  style={{ objectFit: "cover", height: "160px" }}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    BIO1110 Animal Studies
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Learning about Animals
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
