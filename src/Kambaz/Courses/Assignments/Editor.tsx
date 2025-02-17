import { Button, Form } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === aid
  );

  if (!assignment) {
    return <div>Assignment not found.</div>;
  }

  const { title, description, points, dueDate, availableDate } = assignment;

  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue={title} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="wd-description">
          <Form.Control as="textarea" rows={3} defaultValue={description} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="wd-points">
          <div className="d-flex align-items-center">
            <Form.Label className="me-3" style={{ width: "150px" }}>
              Points
            </Form.Label>
            <Form.Control
              type="number"
              defaultValue={points}
              style={{ flex: 1 }}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center">
          <Form.Label className="me-3" style={{ width: "150px" }}>
            Due Date
          </Form.Label>
          <Form.Control
            type="date"
            defaultValue={dueDate}
            style={{ flex: 1 }}
          />
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center">
          <Form.Label className="me-3" style={{ width: "150px" }}>
            Available From
          </Form.Label>
          <Form.Control
            type="date"
            defaultValue={availableDate}
            style={{ flex: 1 }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <div className="d-flex align-items-start">
            <Form.Label
              className="me-3"
              style={{ marginBottom: "10px", width: "150px" }}
            >
              Assign
            </Form.Label>

            <div className="border p-3 rounded" style={{ flex: 1 }}>
              <div className="mb-3">
                <Form.Label
                  className="fw-bold"
                  style={{ marginBottom: "10px" }}
                >
                  Assign to
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Everyone"
                  title="Everyone"
                  id="wd-assign-to"
                />
              </div>

              <div className="mb-3">
                <Form.Label
                  className="fw-bold"
                  style={{ marginBottom: "10px" }}
                >
                  Due
                </Form.Label>
                <Form.Control
                  type="date"
                  id="wd-date"
                  placeholder="mm-dd-yyyy"
                  className="mb-2"
                />
              </div>

              <div className="d-flex">
                <div className="mb-3 me-3" style={{ flex: 1 }}>
                  <Form.Label
                    className="fw-bold"
                    style={{ marginBottom: "10px" }}
                  >
                    Available from
                  </Form.Label>
                  <Form.Control
                    type="date"
                    id="wd-date"
                    placeholder="mm-dd-yyyy"
                    className="mb-2"
                  />
                </div>

                <div className="mb-3" style={{ flex: 1 }}>
                  <Form.Label
                    className="fw-bold"
                    style={{ marginBottom: "10px" }}
                  >
                    Until
                  </Form.Label>
                  <Form.Control
                    type="date"
                    id="wd-date"
                    placeholder="mm-dd-yyyy"
                    className="mb-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </Form.Group>

        <Button
          variant="danger"
          size="lg"
          className="me-2 float-end"
          id="wd-save"
        >
          Save
        </Button>
        <Link
          to={`/Kambaz/Courses/${cid}/Assignments`}
          className="btn btn-secondary btn-lg float-end me-2"
          id="wd-cancel"
        >
          Cancel
        </Link>
      </Form>
    </div>
  );
}
