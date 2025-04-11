import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { addQuiz, updateQuiz } from "./reducer";
import MultipleChoiceEditor from "./MultipleChoiceEditor";
import TrueFalseEditor from "./TrueFalseEditor";
import FillBlankEditor from "./FillBlankEditor";

export default function QuizEditor() {
  const { cid, qid } = useParams();
  const { quizId } = useParams();
  const dispatch = useDispatch();
  const { quizzes } = useSelector((state: any) => state.quizReducer);

  let currentQuiz = quizzes.find((quiz: any) => quiz._id === qid);

  const [quizState, setQuizState] = useState<any>(
    currentQuiz || { title: "", description: "", questions: [] }
  );

  const quizTitle = quizState?.title || "";
  const description = quizState?.description || "";
  const assignTo = quizState?.assignTo || 100;
  const type = quizState?.type || "";
  const points = quizState?.points || 100;
  const assignmentGroup = quizState?.group || "";
  const shuffleAnswer = quizState?.shuffle || "";
  const timeLimit = quizState?.time || 20;
  const multipleAttempts = quizState?.attempts || "";
  const correctAnswer = quizState?.answer || "";
  const accessCode = quizState?.code || "";
  const oneQuestion = quizState?.oneQuestion || "";
  const webcamRequired = quizState?.webcam || "";
  const lockQuestions = quizState?.lock || "";
  const dueDate = quizState?.due || "";
  const availableDate = quizState?.from || "";
  const untilDate = quizState?.until || "";
  const [questionType, setQuestionType] = useState("");

  const handleSave = () => {
    if (currentQuiz) {
      dispatch(updateQuiz(quizState));
    } else {
      dispatch(addQuiz({ ...quizState, course: cid }));
    }
  };

  const [activeTab, setActiveTab] = useState("details");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      type: "Multiple choice question",
      text: "",
      options: ["", "", "", ""],
      correctOption: 0,
      points: 1,
    };
    setQuizState((prev: any) => ({
      ...prev,
      questions: [...prev.questions, newQuestion],
    }));
  };

  const handleQuestionChange = (index: number, field: string, value: any) => {
    const updatedQuestions = quizState.questions.map((q: any, i: number) =>
      i === index ? { ...q, [field]: value } : q
    );
    setQuizState((prev: any) => ({ ...prev, questions: updatedQuestions }));
  };

  const [selectedType, setSelectedType] = useState("multiple");

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };

  const handleDeleteQuestion = (index: number) => {
    const updatedQuestions = quizState.questions.filter(
      (_: any, i: number) => i !== index
    );
    setQuizState((prev: any) => ({ ...prev, questions: updatedQuestions }));
  };

  return (
    <div id="wd-quiz-editor">
      <div id="wd-quiz-buttons" className="d-flex justify-content-center gap-2">
        <Link to={`/Kambaz/Courses/${cid}/Quizzes/QuizDetails`}>
          <Button
            variant="light"
            size="lg"
            className="me-1"
            id="wd-add-module-btn"
            onClick={() => handleTabClick("details")}
          >
            Details
          </Button>
        </Link>

        <Link to={`/Kambaz/Courses/${cid}/Quizzes/QuizQuestions`}>
          <Button
            variant="light"
            size="lg"
            className="me-1"
            id="wd-add-module-btn"
            onClick={() => handleTabClick("questions")}
          >
            Questions
          </Button>
        </Link>
      </div>

      {activeTab === "details" && questionType === "" ? (
        <div id="wd-quiz-editing">
          <Form>
            <Form.Group className="mb-3" controlId="wd-name">
              <Form.Label>Quiz Name</Form.Label>
              <Form.Control
                type="text"
                value={quizTitle}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                placeholder="Enter quiz name"
              />
            </Form.Group>

            {/* Description */}
            <Form.Group className="mb-3" controlId="wd-description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Enter quiz description"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-points">
              <Form.Label>Quiz Type</Form.Label>
              <Form.Control
                as="select"
                value={quizState?.type || ""}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    type: e.target.value,
                  }))
                }
              >
                <option value="Graded Quiz">Graded Quiz</option>
                <option value="Practice Quiz">Practice Quiz</option>
                <option value="Graded Survey">Graded Survey</option>
                <option value="Ungraded Survey">Ungraded Survey</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-points">
              <Form.Label>Points</Form.Label>
              <Form.Control
                type="number"
                value={points}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    points: e.target.value,
                  }))
                }
                placeholder="Enter points"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-points">
              <Form.Label>Assignment Group</Form.Label>
              <Form.Control
                as="select"
                value={quizState?.group || ""}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    group: e.target.value,
                  }))
                }
              >
                <option value="Quizzes">Quizzes</option>
                <option value="Exams">Exams</option>
                <option value="Assignments">Assignments</option>
                <option value="Project">Project</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-shuffle-answers">
              <Form.Check
                type="checkbox"
                checked={quizState.shuffle}
                onChange={(e) =>
                  setQuizState({ ...quizState, shuffle: e.target.checked })
                }
                inline
              />
              <Form.Label>Shuffle Answers</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-points">
              <Form.Label>Time Limit</Form.Label>
              <Form.Control
                type="number"
                value={timeLimit}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    time: e.target.value,
                  }))
                }
                placeholder="Enter points"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-points">
              <Form.Check
                type="checkbox"
                checked={quizState.attempts}
                onChange={(e) =>
                  setQuizState({ ...quizState, attempts: e.target.checked })
                }
                inline
              />
              <Form.Label>Multiple Attempts</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-points">
              <Form.Check
                type="checkbox"
                checked={quizState.answers}
                onChange={(e) =>
                  setQuizState({ ...quizState, answers: e.target.checked })
                }
                inline
              />
              <Form.Label>Show Correct Answers</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-name">
              <Form.Label>Access Code</Form.Label>
              <Form.Control
                type="text"
                value={accessCode}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                placeholder="Enter acess code"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-points">
              <Form.Check
                type="checkbox"
                checked={quizState.oneQuestion}
                onChange={(e) =>
                  setQuizState({ ...quizState, oneQuestion: e.target.checked })
                }
                inline
              />
              <Form.Label>One Question at a Time</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-points">
              <Form.Check
                type="checkbox"
                checked={quizState.webcam}
                onChange={(e) =>
                  setQuizState({ ...quizState, webcam: e.target.checked })
                }
                inline
              />
              <Form.Label>Webcam Required </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-points">
              <Form.Check
                type="checkbox"
                checked={quizState.lock}
                onChange={(e) =>
                  setQuizState({ ...quizState, lock: e.target.checked })
                }
                inline
              />
              <Form.Label>Lock Questions After Answering</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-due">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                value={dueDate}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    due: e.target.value,
                  }))
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-available">
              <Form.Label>Available From</Form.Label>
              <Form.Control
                type="date"
                value={availableDate}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    from: e.target.value,
                  }))
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="wd-available">
              <Form.Label>Available Until</Form.Label>
              <Form.Control
                type="date"
                value={untilDate}
                onChange={(e) =>
                  setQuizState((prev: any) => ({
                    ...prev,
                    until: e.target.value,
                  }))
                }
              />
            </Form.Group>

            <div className="d-flex justify-content-end gap-2">
              <Link to={`/Kambaz/Courses/${cid}/Quizzes`}>
                <Button variant="danger">Save</Button>
              </Link>

              <Link to={`/Kambaz/Courses/${cid}/Quizzes`}>
                <Button variant="danger">Save and Publish</Button>
              </Link>

              <Link to={`/Kambaz/Courses/${cid}/Quizzes`}>
                <Button variant="secondary">Cancel</Button>
              </Link>
            </div>
          </Form>
        </div>
      ) : (
        <div id="wd-quiz-questions">
          <h3>Questions</h3>

          {quizState.questions.length > 0 ? (
            quizState.questions.map((question: any, index: number) => (
              <div key={question.id} className="mb-3 p-3 border rounded">
                <Form.Group className="mb-2">
                  <Form.Label>Question {index + 1}</Form.Label>
                  <Form.Control
                    type="text"
                    value={question.text}
                    onChange={(e) =>
                      handleQuestionChange(index, "text", e.target.value)
                    }
                    placeholder="Enter question text"
                  />
                </Form.Group>

                {/* <Form.Group className="mb-2">
                  <Form.Label>Question Type</Form.Label>
                  <Form.Select
                    value={question.type}
                    onChange={(e) =>
                      handleQuestionChange(index, "type", e.target.value)
                    }
                  >
                    <option>Multiple choice question</option>
                    <option>True/false question</option>
                    <option>Fill in a blank question</option>
                  </Form.Select>
                </Form.Group> */}

                <div>
                  <Form.Group className="mb-2">
                    <Form.Label>Question Type</Form.Label>
                    <Form.Select
                      value={selectedType}
                      onChange={handleTypeChange}
                    >
                      <option value="multiple">Multiple choice question</option>
                      <option value="truefalse">True/false question</option>
                      <option value="fillblank">
                        Fill in a blank question
                      </option>
                    </Form.Select>
                  </Form.Group>

                  <div className="mt-4">
                    {selectedType === "multiple" && <MultipleChoiceEditor />}
                    {selectedType === "truefalse" && <TrueFalseEditor />}
                    {selectedType === "fillblank" && <FillBlankEditor />}
                  </div>
                </div>

                {/* {question.type === "Multiple choice question" &&
                  question.options.map((option: string, optIndex: number) => (
                    <Form.Group key={optIndex} className="mb-2">
                      <Form.Label>Choice {optIndex + 1}</Form.Label>
                      <Form.Control
                        type="text"
                        value={option}
                        onChange={(e) => {
                          const updatedOptions = [...question.options];
                          updatedOptions[optIndex] = e.target.value;
                          handleQuestionChange(
                            index,
                            "options",
                            updatedOptions
                          );
                        }}
                      />
                    </Form.Group> */}
                {/* ))} */}

                {/* <Form.Group className="mb-2">
                  <Form.Label>Points</Form.Label>
                  <Form.Control
                    type="number"
                    value={question.points}
                    onChange={(e) =>
                      handleQuestionChange(
                        index,
                        "points",
                        Number(e.target.value)
                      )
                    }
                  />
                </Form.Group> */}

                <div className="mt-3 d-flex justify-content-end gap-2">
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteQuestion(index)}
                    className="me-2"
                  >
                    Cancel
                  </Button>
                  <Button variant="danger" onClick={handleSave}>
                    Save
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p>No questions added yet.</p>
          )}

          <div className="d-flex gap-3 mt-4">
            <Button variant="primary" onClick={handleAddQuestion}>
              + Add Question
            </Button>

            <Link
              to={`/Kambaz/Courses/${cid}/Quizzes/${quizId}/preview`}
              className="btn btn-secondary"
            >
              Preview Quiz
            </Link>
          </div>

          <div
            id="question-actions"
            className="d-flex justify-content-center gap-2 mt-3"
          ></div>
        </div>
      )}
    </div>
  );
}
