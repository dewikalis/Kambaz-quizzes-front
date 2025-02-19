import { Button, Form } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const assignments = db.assignments;

  return (
    <div id="wd-assignments-editor">
      {assignments
        .filter((assignment) => assignment._id === aid)
        .map((assignment) => (
          <Form key={assignment._id}>
            <Form.Group className="mb-3" controlId="wd-name">
              <Form.Label>Assignment Name</Form.Label>
              <Form.Control type="text" defaultValue={assignment.course} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-description">
              <Form.Control
                as="textarea"
                rows={3}
                defaultValue={assignment.description}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex align-items-center"
              controlId="wd-points"
            >
              <Form.Label className="me-2 mb-0">Points</Form.Label>
              <Form.Control type="text" defaultValue={assignment.points} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-assign-group">
              <div className="d-flex align-items-center">
                <Form.Label className="me-3" style={{ width: "150px" }}>
                  Assignment Group
                </Form.Label>
                <Form.Select defaultValue="ASSIGNMENT1" style={{ flex: 1 }}>
                  <option value="ASSIGNMENT1">Assignment 1</option>
                  <option value="ASSIGNMENT2">Assignment 2</option>
                  <option value="ASSIGNMENT3">Assignment 3</option>
                </Form.Select>
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-display-grade">
              <div className="d-flex align-items-center">
                <Form.Label className="me-3" style={{ width: "150px" }}>
                  Display Grade As
                </Form.Label>
                <Form.Select defaultValue="PERCENTAGE" style={{ flex: 1 }}>
                  <option value="PERCENTAGE">Percentage</option>
                  <option value="DECIMAL">Decimal</option>
                  <option value="LETTERS">Letters</option>
                </Form.Select>
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-submission-type">
              <div className="d-flex align-items-start">
                <Form.Label className="me-3" style={{ width: "150px" }}>
                  Submission Type
                </Form.Label>
                <div className="border p-3 rounded" style={{ flex: 1 }}>
                  <Form.Select defaultValue="ONLINE" style={{ flex: 1 }}>
                    <option value="ONLINE">Online</option>
                    <option value="INPERSON">In Person</option>
                  </Form.Select>

                  <div className="mt-3">
                    <b>Online Entry Option</b>
                    {[
                      "Text Entry",
                      "Website URL",
                      "Media Recordings",
                      "Student Annotation",
                      "File Uploads",
                    ].map((label, index) => (
                      <Form.Check
                        key={index}
                        type="checkbox"
                        id={`checkbox${index}`}
                        label={label}
                        className="mb-3"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-assign">
              <div className="d-flex align-items-start">
                <Form.Label className="me-3" style={{ width: "150px" }}>
                  Assign
                </Form.Label>
                <div className="border p-3 rounded" style={{ flex: 1 }}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Assign to</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Everyone"
                      title="Everyone"
                      id="wd-assign-to"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Due</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={assignment.dueDate}
                      id="wd-date"
                      className="mb-2"
                    />
                  </Form.Group>

                  <div className="d-flex">
                    <Form.Group className="mb-3 me-3" style={{ flex: 1 }}>
                      <Form.Label className="fw-bold">
                        Available from
                      </Form.Label>
                      <Form.Control
                        type="text"
                        value={assignment.availableDate}
                        className="mb-2"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" style={{ flex: 1 }}>
                      <Form.Label className="fw-bold">Until</Form.Label>
                      <Form.Control
                        type="date"
                        value={assignment.dueDate}
                        className="mb-2"
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Link
                to={`/Kambaz/Courses/${cid}/Assignments`}
                className="wd-assignment-link d-block"
              >
                <Button
                  variant="danger"
                  size="lg"
                  className="me-1"
                  id="wd-save-btn"
                >
                  Save
                </Button>
              </Link>
              <Link
                to={`/Kambaz/Courses/${cid}/Assignments`}
                className="wd-assignment-link d-block"
              >
                <Button variant="light" size="lg" id="wd-cancel-btn">
                  Cancel
                </Button>
              </Link>
            </div>
          </Form>
        ))}
    </div>
  );
}
