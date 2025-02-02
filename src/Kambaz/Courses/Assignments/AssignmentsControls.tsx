import { FaPlus } from "react-icons/fa";
import { Button } from "react-bootstrap";

export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">
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
