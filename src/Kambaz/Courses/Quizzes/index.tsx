import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useParams, Link } from "react-router";
import * as client from "./client"
import { useDispatch, useSelector } from "react-redux";
import { setQuizzes } from "./reducer";

export default function Quizzes() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer)

  useEffect(() => {
    const fetchQuizzes = async () => {
      if (!cid) return;
      const quizzes = await client.getQuizzes(cid);
      dispatch(setQuizzes(quizzes));
    };

    fetchQuizzes();
  }, [cid, dispatch])

  console.log(JSON.stringify(quizzes, null, 2))

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
