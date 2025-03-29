import { Button, InputGroup, ListGroup, Modal } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import { Form, Row, Col } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { LuNotebookPen } from "react-icons/lu";
import { IoEllipsisVertical } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { deleteAssignment, setAssignments } from "./reducer";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import * as assignmentClient from "./client"

export default function Assignments() {
  const dispatch = useDispatch();
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<any>(null);

  const fetchAssignments = async () => {
    if (!cid) return
    const assignments = await assignmentClient.findAssignmentsForCourse(cid);
    dispatch(setAssignments(assignments));
  };

  const handleDeleteClick = (assignment: any) => {
    setSelectedAssignment(assignment);
    setShowDeleteDialog(true);
  };

  const handleDeleteConfirm = async () => {
    if (selectedAssignment) {
      await assignmentClient.deleteAssignment(selectedAssignment._id);
      dispatch(deleteAssignment(selectedAssignment._id));
    }
    setShowDeleteDialog(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteDialog(false);
  };

  useEffect(() => { fetchAssignments() }, [])

  return (
    <div id="wd-assignments">
      <div className="d-flex col justify-content-between align-items-center mb-5">
        <Row>
          <Form.Group as={Col}>
            <InputGroup>
              <InputGroup.Text>
                <IoIosSearch />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search here.." />
            </InputGroup>
          </Form.Group>
        </Row>
        <div>
          <Button
            variant="secondary"
            size="lg"
            className="me-1 align-self-end"
            id="wd-view-progress"
          >
            + Group
          </Button>
          <Button
            variant="danger"
            size="lg"
            className="me-1 justify-content-end"
            id="wd-view-progress"
          >
            <Link
              className="text-decoration-none text-white"
              to={`/Kambaz/Courses/${cid}/Assignments/new`}
            >
              + Assignment
            </Link>
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-4 ps-2 bg-secondary">
            <BsGripVertical className="fs-3 mx-2" />
            ASSIGNMENTS
            <div className="float-end">
              <span className="me-1 p-2 position-relative border rounded-5 border-black">
                40% of Total
              </span>
              <BsPlus />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <ListGroup.Item
                  key={assignment._id}
                  className="wd-lesson p-3 ps-1 d-flex flex-row align-items-center"
                >
                  <BsGripVertical className="me-2 fs-3 flex-shrink-0 mx-2" />
                  <LuNotebookPen className="flex-shrink-0 mx-2" />
                  <span className="d-flex flex-column flex-grow-1 flex-shrink-1 mx-2">
                    {isFaculty ? (
                      <a
                        href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                        className="wd-assignment-link text-decoration-none text-black"
                      >
                        <strong>{assignment.title}</strong>
                      </a>
                    ) : (
                      <strong>{assignment.title}</strong>
                    )}
                    <div>
                      <span className="d-block">
                        <span style={{ color: "#DC3545" }}>
                          Multiple Modules
                        </span>{" "}
                        | <b>Not available until </b> {assignment.from}{" "}
                        |
                      </span>
                      <span className="d-block">
                        {" "}
                        <b>Due </b> {assignment.due} | {assignment.points}
                        pts
                      </span>
                    </div>
                  </span>
                  {isFaculty && (
                    <FaTrash
                      className="text-danger me-2 mb-1"
                      cursor={"pointer"}
                      onClick={() => handleDeleteClick(assignment)}
                    />
                  )}
                  <LessonControlButtons />
                </ListGroup.Item>
              ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>

      <Modal show={showDeleteDialog} onHide={handleDeleteCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete{" "}
          <strong>{selectedAssignment?.title}</strong>? This action cannot be
          undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
