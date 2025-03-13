import { FaPlus } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export default function AssignmentsControls() {
  const { cid } = useParams();
  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <Link to={`/Kambaz/Courses/${cid}/Assignments/Editor`}>
        <Button
          variant="danger"
          size="lg"
          className="me-2 float-end"
          id="wd-add-assignment"
          style={{
            color: "white",
            backgroundColor: "#dc3545",
            borderColor: "#dc3545",
          }}
        >
          <FaPlus className="me-2" /> Assignment
        </Button>
      </Link>

      <Button
        variant="secondary"
        size="lg"
        className="me-2 float-end"
        id="wd-add-assignment-group"
      >
        <FaPlus className="me-2" /> Group
      </Button>
    </div>
  );
}
