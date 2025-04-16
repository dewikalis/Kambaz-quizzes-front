import { Button } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import { useParams, Link } from "react-router";

export default function QuizDetails() {
  const { cid } = useParams();
  const { quizId } = useParams();
  return (
    <div
      id="wd-modules-controls"
      className="d-flex justify-content-center gap-2"
    >
      <Link to={`/Kambaz/Courses/${cid}/Quizzes/${quizId}/preview`}>
        <Button
          variant="light"
          size="lg"
          className="me-1"
          id="wd-add-module-btn"
        >
          Preview
        </Button>
      </Link>

      <Link to={`/Kambaz/Courses/${cid}/Quizzes/QuizEditor`}>
        <Button
          variant="light"
          size="lg"
          className="me-1"
          id="wd-add-module-btn"
        >
          <FaPencilAlt
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Edit
        </Button>
      </Link>
    </div>
  );
}
