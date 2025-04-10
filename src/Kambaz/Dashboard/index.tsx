import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const { enrollments } = useSelector((state: any) => state.enrollmentReducer);

  const isFaculty = currentUser.role === "FACULTY";

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>

      <hr />
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}
      <div className="d-flex justify-content-between">
        <h2 id="wd-dashboard-published">
          Published Courses ({courses.length})
        </h2>
        <button
          onClick={() => setEnrolling(!enrolling)}
          className="float-end btn btn-primary"
        >
          {enrolling ? "My Courses" : "All Courses"}
        </button>{" "}
      </div>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => {
            // const isEnrolled = enrollments.some(
            //   (enrollment: any) =>
            //     enrollment.user === currentUser._id &&
            //     enrollment.course === course._id
            // );
            return (
              <Col
                key={course._id}
                className="wd-dashboard-course"
                style={{ width: "350px" }}
              >
                <Card
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Link
                    to={`/Kambaz/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <Card.Img
                      variant="top"
                      src="/images/reactjs.jpg"
                      height={200}
                    />
                    <Card.Body style={{ flexGrow: 1 }}>
                      <Card.Title className="wd-dashboard-course-title">
                        {enrolling && (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              updateEnrollment(course._id, !course.enrolled);
                            }}
                            className={`btn ${
                              course.enrolled ? "btn-danger" : "btn-success"
                            } float-end`}
                          >
                            {course.enrolled ? "Unenroll" : "Enroll"}
                          </button>
                        )}
                        {course.name}
                      </Card.Title>
                      <Card.Text
                        className="wd-dashboard-course-description overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </Card.Text>
                      <Button variant="primary">Go</Button>
                      {isFaculty && (
                        <>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
