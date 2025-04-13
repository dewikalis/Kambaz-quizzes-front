import { Button, Dropdown } from "react-bootstrap";
import { FaEllipsisV, FaPlus } from "react-icons/fa";
import { useParams, Link } from "react-router";

export default function Quizzes() {
  const { cid } = useParams();

  const handleDelete = () => {
    console.log("Quiz deleted");
  };

  const handlePublish = () => {
    console.log("Quiz published/unpublished");
  };

  const handleCopy = () => {
    console.log("Quiz copied to another course");
  };

  return (
    <div id="wd-modules-controls" className="d-flex justify-content-end gap-2">
      {/* Quiz Button */}
      <Link to={`/Kambaz/Courses/${cid}/Quizzes/QuizEditor`}>
        <Button variant="danger" size="lg" id="wd-add-module-btn">
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Quiz
        </Button>
      </Link>

      {/* Context Menu Button */}
      <Dropdown>
        <Dropdown.Toggle
          variant="light"
          id="dropdown-basic"
          className="border border-gray-300"
        >
          <FaEllipsisV />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to={`/Kambaz/Courses/${cid}/Quizzes/QuizDetails`}
          >
            Edit
          </Dropdown.Item>
          <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
          <Dropdown.Item onClick={handlePublish}>
            Publish / Unpublish
          </Dropdown.Item>
          <Dropdown.Item onClick={handleCopy}>Copy</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
