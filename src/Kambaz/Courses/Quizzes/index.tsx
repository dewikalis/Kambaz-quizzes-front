import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useParams, Link } from "react-router";

export default function Quizzes() {
  const { cid } = useParams();
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Link to={`/Kambaz/Courses/${cid}/Quizzes/QuizEditor`}>
        <Button
          variant="danger"
          size="lg"
          className="me-1 float-end"
          id="wd-add-module-btn"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Quiz
        </Button>
      </Link>
    </div>
  );
}
