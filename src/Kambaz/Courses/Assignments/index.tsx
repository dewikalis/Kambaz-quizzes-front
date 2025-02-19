import { Form, InputGroup, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { RiFileEditLine } from "react-icons/ri";
import { useParams } from "react-router";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentsButton from "./AssignmentsButton";
import LessonControlButtons from "../Modules/LessonControlButtons";
import * as db from "../../Database";
import "./styles.css";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === cid
  );

  return (
    <div id="wd-assignments">
      <div className="wd-header">
        <InputGroup className="wd-search-bar">
          <InputGroup.Text>
            <FaSearch className="fs-4 text-secondary" />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Search..."
            id="wd-search-assignment"
          />
        </InputGroup>
        <AssignmentsControls />
      </div>

      <ListGroup className="rounded-0" id="wd-modules">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />
          ASSIGNMENTS <AssignmentsButton />
        </div>

        {assignments.length > 0 ? (
          <ListGroup className="wd-lessons rounded-0">
            {assignments.map((assignment) => (
              <ListGroup.Item
                key={assignment._id}
                className="wd-lesson p-3 ps-1 d-flex align-items-center"
              >
                <BsGripVertical className="me-2 fs-3" />
                <RiFileEditLine className="me-2 fs-3" color="green" />
                <div className="wd-assignment-text ms-2">
                  <a
                    href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link d-block"
                  >
                    {assignment.title}
                  </a>
                  <span className="d-block">
                    <span style={{ color: "#DC3545" }}>Multiple Modules</span> |{" "}
                    <b>Not available until </b> {assignment.availableDate} |
                  </span>
                  <span className="d-block">
                    {" "}
                    <b>Due </b> {assignment.dueDate} | {assignment.points}pts
                  </span>
                </div>
                <div className="ms-auto">
                  <LessonControlButtons />
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <p className="text-center p-3">
            No assignments found for this course.
          </p>
        )}
      </ListGroup>
    </div>
  );
}
