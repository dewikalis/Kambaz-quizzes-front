import { useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useParams, useNavigate } from "react-router";
import * as client from "./client"
import { useDispatch, useSelector } from "react-redux";
import { setQuizzes } from "./reducer";
import { BsGripVertical } from "react-icons/bs";

const getAvailabilityStatus = (availableDate: string, dueDate: string) => {
  const currentDate = new Date();
  const availableDateObj = new Date(availableDate);
  const dueDateObj = new Date(dueDate);

  // If the current date is after the available date
  if (currentDate > availableDateObj) {
    if (currentDate <= dueDateObj) {
      return "Available";
    } else {
      return "Closed";
    }
  } else {
    return `Not available until ${availableDateObj.toLocaleString("en-US", { year: "numeric", month: "long", day: "2-digit" })}`;
  }
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return "None";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function Quizzes() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      if (!cid) return;
      const quizzes = await client.getQuizzes(cid);
      dispatch(setQuizzes(quizzes));
    };

    fetchQuizzes();
  }, [cid, dispatch])

  return (
    <div id="wd-quizzes" className="container mt-3">
      <div className="mb-3 d-flex justify-content-end">
        <Button
          variant="danger"
          size="lg"
          className="me-1 float-end"
          id="wd-add-module-btn"
          onClick={async () => {
            const data = await client.saveQuiz({ course: cid })
            navigate(`/Kambaz/Courses/${cid}/Quizzes/${data._id}`)
          }}
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Quiz
        </Button>
      </div>



      <div id="wd-modules-controls" className="text-nowrap">
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-4 ps-2 bg-secondary">
              <BsGripVertical className="fs-3 mx-2" />
              Assignment Quizzes
            </div>

            <ListGroup className="wd-lessons rounded-0">
              {quizzes
                .map((quiz: any) => (
                  <ListGroup.Item
                    key={quiz._id}
                    className="wd-lesson p-3 ps-1 d-flex flex-row align-items-center"
                  >
                    <BsGripVertical className="me-2 fs-3 flex-shrink-0 mx-2" />
                    <div className="flex-grow-1">
                      <div className="mb-2">
                        <a
                          href={`#/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/QuizDetails`}
                          className="wd-assignment-link text-decoration-none text-black"
                        >
                          <strong>{quiz.title}</strong>
                        </a>
                      </div>

                      <div className="text-muted small">
                        <span >
                          {getAvailabilityStatus(quiz.from, quiz.due)}
                        </span>
                        <span >
                          {" "}
                          | <b>Due </b> {formatDate(quiz.due)} | {quiz.points}
                          pts | {quiz.questions?.length} Questions
                        </span>
                      </div>
                    </div>

                  </ListGroup.Item>
                ))}
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>

      </div>
    </div>

  );
}
