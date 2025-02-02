import { Form, InputGroup, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import AssignmentsControls from "./AssignmentsControls";
import { RiFileEditLine } from "react-icons/ri";
import "./styles.css";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsButton from "./AssignmentsButton";

export default function Assignments() {
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

        <ListGroup className="wd-lessons rounded-0">
          <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <RiFileEditLine className="me-2 fs-3" color="green" />
            <div className="wd-assignment-text ms-2">
              <a
                href="#/Kambaz/Courses/1234/Assignments/123"
                className="wd-assignment-link d-block"
              >
                A1
              </a>
              <span className="d-block">
                Multiple Modules | Not available until May 6 at 12:00am |
              </span>
              <span className="d-block">Due May 13 at 11:59pm | 100pts</span>
            </div>

            <div className="ms-auto">
              <LessonControlButtons />
            </div>
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="wd-lessons rounded-0">
          <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <RiFileEditLine className="me-2 fs-3" color="green" />
            <div className="wd-assignment-text ms-2">
              <a
                href="#/Kambaz/Courses/1234/Assignments/123"
                className="wd-assignment-link d-block"
              >
                A2
              </a>
              <span className="d-block">
                Multiple Modules | Not available until May 13 at 12:00am |
              </span>
              <span className="d-block">Due May 20 at 11:59pm | 100pts</span>
            </div>

            <div className="ms-auto">
              <LessonControlButtons />
            </div>
          </ListGroup.Item>
        </ListGroup>

        <ListGroup className="wd-lessons rounded-0">
          <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <RiFileEditLine className="me-2 fs-3" color="green" />
            <div className="wd-assignment-text ms-2">
              <a
                href="#/Kambaz/Courses/1234/Assignments/123"
                className="wd-assignment-link d-block"
              >
                A3
              </a>
              <span className="d-block">
                Multiple Modules | Not available until May 20 at 12:00am |
              </span>
              <span className="d-block">Due May 27 at 11:59pm | 100pts</span>
            </div>

            <div className="ms-auto">
              <LessonControlButtons />
            </div>
          </ListGroup.Item>
        </ListGroup>
      </ListGroup>
    </div>
  );
}
