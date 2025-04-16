import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useParams, Link } from "react-router";
import * as client from "./client"

export default function Quizzes() {
  const { cid } = useParams();
  const [quizzes, setQuizzes] = useState({});

  useEffect(() => {
    const fetchQuizzes = async () => {
      if (!cid) return
      const quizzes = await client.getQuizzes(cid);
      console.log(quizzes)
      setQuizzes(quizzes);
    }

    fetchQuizzes();
  }, [cid])

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
