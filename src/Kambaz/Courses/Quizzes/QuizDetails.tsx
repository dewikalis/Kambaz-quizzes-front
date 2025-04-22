import { Button } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router";
import * as client from "./client"

export default function QuizDetails() {
  const { cid, qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer)
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";

  const singleQuiz = quizzes.find((quiz: any) => quiz._id === qid);

  const formatDate = (dateStr?: string) => {
    if (!dateStr || isNaN(Date.parse(dateStr))) return "None";
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", options);
  };

  const handleClick = async () => {
    const body = {
      _id: qid,
      questions: [],
      points: 0
    }
    const result = await client.takeQuiz(body)
    console.log(result)
  }

  return (
    <div>
      {isFaculty && (
        <div
          id="wd-modules-controls"
          className="d-flex justify-content-center gap-2"
        >
          <Link to={`/Kambaz/Courses/${cid}/Quizzes/${qid}/preview`}>
            <Button variant="light" size="lg" className="me-1" id="wd-add-module-btn">
              Preview
            </Button>
          </Link>

          <Link to={`/Kambaz/Courses/${cid}/Quizzes/${singleQuiz._id}`}>
            <Button variant="light" size="lg" className="me-1" id="wd-add-module-btn">
              <FaPencilAlt className="position-relative me-2" style={{ bottom: "1px" }} />
              Edit
            </Button>
          </Link>
        </div>
      )}

      {isStudent && (
        <div className="d-flex justify-content-center mt-3">
          <Link to={`/Kambaz/Courses/${cid}/Quizzes/${qid}/preview`}>
            <Button
              variant="danger"
              size="lg"

            >
              Start Quiz
            </Button>
          </Link>
        </div>
      )}




      {/* <div>
    <h3> {singleQuiz.title}</h3>
    <h6><b>Quiz Type:</b> {singleQuiz.type}</h6>
    <h6><b>Points:</b> {singleQuiz.points}</h6>
    <h6><b>Assignment Group:</b> {singleQuiz.assignmentGroup}</h6>
    <h6><b>Shuffle Answers:</b> {singleQuiz.shuffle}</h6>
    <h6><b>Time Limit:</b> {singleQuiz.timeLimit}</h6>
    <h6><b>Multiple Attempts:</b> {singleQuiz.multipleAttempts}</h6>
    <h6><b>How Many Attempts:</b> {singleQuiz.shuffle}</h6>
    <h6><b>Show Correct Answers:</b> {singleQuiz.showCorrectAnswer}</h6>
    <h6><b>Access Code:</b> {singleQuiz.accessCode}</h6>
    <h6><b>One Question At A Time:</b> {singleQuiz.oneQuestion}</h6>
    <h6><b>Webcam Required:</b> {singleQuiz.webcamRequired}</h6>
    <h6><b>Lock Questions After Answering:</b> {singleQuiz.lockQuestions}</h6>
    <h6><b>Due Date:</b> {singleQuiz.due}</h6>
    <h6><b>Available Date:</b> {singleQuiz.from}</h6>
    <h6><b>Until Date:</b> {singleQuiz.to}</h6> */}

      <div className="mt-4">
        <h2>{singleQuiz.title}</h2>

        <div onClick={handleClick}>
          button
        </div>

        <div className="d-flex justify-content-between">
          <h6 className="text-end me-3" style={{ width: "40%" }}><b>Quiz Type:</b></h6>
          <h6 className="text-start" style={{ width: "60%" }}>{singleQuiz.type}</h6>
        </div>

        <div className="d-flex justify-content-between">
          <h6 className="text-end me-3" style={{ width: "40%" }}><b>Points:</b></h6>
          <h6 className="text-start" style={{ width: "60%" }}>{singleQuiz.points}</h6>
        </div>

        <div className="d-flex justify-content-between">
          <h6 className="text-end me-3" style={{ width: "40%" }}><b>Assignment Group:</b></h6>
          <h6 className="text-start" style={{ width: "60%" }}>{singleQuiz.assignmentGroup}</h6>
        </div>

        <div className="d-flex justify-content-between">
          <h6 className="text-end me-3" style={{ width: "40%" }}><b>Shuffle Answers:</b></h6>
          <h6 className="text-start" style={{ width: "60%" }}>{singleQuiz.shuffle ? "Yes" : "No"}</h6>
        </div>

        <div className="d-flex justify-content-between">
          <h6 className="text-end me-3" style={{ width: "40%" }}><b>Time Limit:</b></h6>
          <h6 className="text-start" style={{ width: "60%" }}>{singleQuiz.timeLimit}</h6>
        </div>

        <div className="d-flex justify-content-between">
          <h6 className="text-end me-3" style={{ width: "40%" }}><b>Multiple Attempts:</b></h6>
          <h6 className="text-start" style={{ width: "60%" }}>{singleQuiz.multipleAttempts ? "Yes" : "No"}</h6>
        </div>

        <div className="d-flex justify-content-between">
          <h6 className="text-end me-3" style={{ width: "40%" }}><b>How Many Attempts:</b></h6>
          <h6 className="text-start" style={{ width: "60%" }}>{singleQuiz.howManyAttempts}</h6>
        </div>

        <div className="d-flex justify-content-between">
          <h6 className="text-end me-3" style={{ width: "40%" }}><b>Show Correct Answers:</b></h6>
          <h6 className="text-start" style={{ width: "60%" }}>{singleQuiz.showCorrectAnswer ? "Yes" : "No"}</h6>
        </div>

        <div className="d-flex justify-content-between">
          <h6 className="text-end me-3" style={{ width: "40%" }}><b>Access Code:</b></h6>
          <h6 className="text-start" style={{ width: "60%" }}>{singleQuiz.accessCode ? singleQuiz.accessCode : "None"}</h6>
        </div>

        <div className="d-flex justify-content-between">
          <h6 className="text-end me-3" style={{ width: "40%" }}><b>One Question At A Time:</b></h6>
          <h6 className="text-start" style={{ width: "60%" }}>{singleQuiz.oneQuestion ? "Yes" : "No"}</h6>
        </div>

        <div className="d-flex justify-content-between">
          <h6 className="text-end me-3" style={{ width: "40%" }}><b>Webcam Required:</b></h6>
          <h6 className="text-start" style={{ width: "60%" }}>{singleQuiz.webcamRequired ? "Yes" : "No"}</h6>
        </div>

        <div className="d-flex justify-content-between">
          <h6 className="text-end me-3" style={{ width: "40%" }}><b>Lock Questions After Answering:</b></h6>
          <h6 className="text-start" style={{ width: "60%" }}>{singleQuiz.lockQuestions ? "Yes" : "No"}</h6>
        </div>

        <div className="d-flex justify-content-between">
          <h6 className="text-end me-3" style={{ width: "40%" }}><b>Due Date:</b></h6>
          <h6 className="text-start" style={{ width: "60%" }}>{formatDate(singleQuiz.due)}</h6>
        </div>

        <div className="d-flex justify-content-between">
          <h6 className="text-end me-3" style={{ width: "40%" }}><b>Available Date:</b></h6>
          <h6 className="text-start" style={{ width: "60%" }}>{formatDate(singleQuiz.from)}</h6>
        </div>

        <div className="d-flex justify-content-between">
          <h6 className="text-end me-3" style={{ width: "40%" }}><b>Until Date:</b></h6>
          <h6 className="text-start" style={{ width: "60%" }}>{formatDate(singleQuiz.to)}</h6>
        </div>
      </div>





    </div>
  );
}
