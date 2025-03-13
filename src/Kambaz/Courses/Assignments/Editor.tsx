import {
  Button,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";
import { Link, useParams } from "react-router";
import { addAssignment, updateAssignment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function AssignmentEditor() {
  const dispatch = useDispatch();
  const { cid, aid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  let currentAssignment = assignments.find(
    (assignment: any) => assignment._id === aid
  );
  const [assignment, setAssignment] = useState<any>(currentAssignment);
  const title = assignment?.title || "";
  const description = assignment?.description || "";
  const points = assignment?.points || 100;
  const dueDate = assignment?.dueDate || "";
  const from = assignment?.from || "";
  const until = assignment?.until || "";

  return (
    <div id="wd-assignments-editor">
      <FormGroup className="mb-3" controlId="wd-email">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl
          type="text"
          placeholder="New Assignment"
          value={title}
          onChange={(e) =>
            setAssignment((prev: any) => ({ ...prev, title: e.target.value }))
          }
        />
        <br />
        <FormControl
          as="textarea"
          rows={10}
          value={description}
          onChange={(e) =>
            setAssignment((prev: any) => ({
              ...prev,
              description: e.target.value,
            }))
          }
        />
      </FormGroup>
      <FormGroup as={Row}>
        <Col>
          <FormLabel>Points</FormLabel>
        </Col>
        <Col xs={9}>
          <FormControl
            type="text"
            value={points}
            onChange={(e) =>
              setAssignment((prev: any) => ({
                ...prev,
                points: e.target.value,
              }))
            }
          />
        </Col>
      </FormGroup>
      <FormGroup as={Row}>
        <Col>
          <FormLabel>Assignments</FormLabel>
        </Col>
        <Col xs={9}>
          <FormSelect aria-label="Assignment Groups">
            <option value="ASSIGNMENT1">Assignment1</option>
            <option value="ASSIGNMENT2">Assignment2</option>
            <option value="ASSIGNMENT3">Assignment3</option>
          </FormSelect>
        </Col>
      </FormGroup>

      <FormGroup as={Row}>
        <Col>
          <FormLabel>Display Grade as</FormLabel>
        </Col>
        <Col xs={9}>
          <FormSelect aria-label="Display Grade as">
            <option value="Percentage">Percentage</option>
            <option value="four-point">Four Point</option>
            <option value="Letter">Letter</option>
          </FormSelect>
        </Col>
      </FormGroup>

      <FormGroup as={Row}>
        <Col>
          <FormLabel>Submission Type</FormLabel>
        </Col>
        <Col xs={9}>
          <div className="p-3 border-black border border-light-subtle">
            <FormSelect aria-label="Submission Type">
              <option value="Online">Online</option>
              <option value="Physical">Physical</option>
            </FormSelect>
            <form>
              <input
                type="checkbox"
                className="m-2"
                id="textEntry"
                name="textEntry"
              />
              <label htmlFor="textEntry">Text Entry</label>
              <br />
              <input
                type="checkbox"
                className="m-2"
                id="websiteUrl"
                name="websiteUrl"
              />
              <label htmlFor="websiteUrl">Website URL</label>
              <br />
              <input
                type="checkbox"
                className="m-2"
                id="mediaRecordings"
                name="mediaRecordings"
              />
              <label htmlFor="mediaRecordings">Media Recordings</label>
              <br />
              <input
                type="checkbox"
                className="m-2"
                id="studentAnnotation"
                name="studentAnnotation"
              />
              <label htmlFor="studentAnnotation">Student Annotation</label>
              <br />
              <input
                type="checkbox"
                className="m-2"
                id="fileUploads"
                name="fileUploads"
              />
              <label htmlFor="fileUploads">File Uploads</label>
              <br />
            </form>
          </div>
        </Col>
      </FormGroup>

      <FormGroup as={Row}>
        <Col>
          <FormLabel>Assign</FormLabel>
        </Col>
        <Col xs={9}>
          <div className="p-3 border-black border border-light-subtle">
            <FormLabel>Assign to</FormLabel>
            <FormControl type="text" />
            <FormLabel>Due</FormLabel>
            <FormControl
              type="date"
              name="duedate"
              value={dueDate}
              onChange={(e) =>
                setAssignment((prev: any) => ({ ...prev, due: e.target.value }))
              }
            />
            <Row>
              <Col>
                <FormLabel>Available from</FormLabel>
                <FormControl
                  type="date"
                  name="availableFromDate"
                  value={from}
                  onChange={(e) =>
                    setAssignment((prev: any) => ({
                      ...prev,
                      from: e.target.value,
                    }))
                  }
                />
              </Col>
              <Col>
                <FormLabel>Until</FormLabel>
                <FormControl
                  type="date"
                  name="availableUntilDate"
                  value={until}
                  onChange={(e) =>
                    setAssignment((prev: any) => ({
                      ...prev,
                      until: e.target.value,
                    }))
                  }
                />
              </Col>
            </Row>
          </div>
        </Col>
        <hr />
        <Col>
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button className="float-end" variant="secondary">
              Cancel
            </Button>
          </Link>
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button
              className="float-end"
              variant="danger"
              onClick={() => {
                if (currentAssignment) {
                  dispatch(updateAssignment({ ...assignment, course: cid }));
                } else {
                  dispatch(addAssignment({ ...assignment, course: cid }));
                }
              }}
            >
              Save
            </Button>
          </Link>
        </Col>
      </FormGroup>
    </div>
  );
}
