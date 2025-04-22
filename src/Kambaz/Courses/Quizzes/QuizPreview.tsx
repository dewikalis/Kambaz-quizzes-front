import { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

type Question = {
  id: string;
  question: string;
  choices: string[];
  correctAnswer: string;
};

export default function QuizPreview() {
  const { quizId, cid, qid } = useParams();
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);

  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const singleQuiz = quizzes.find((quiz: any) => quiz._id === qid);
  const questionsList = singleQuiz?.questions || [];

  // 🔁 Convert backend format to frontend format
  const quizQuestions: Question[] = useMemo(() => {
    return questionsList.map((q: any, index: number) => ({
      id: `q${index}`,
      question: q.title || `Question ${index + 1}`,
      choices: q.answers || [],
      correctAnswer: q.answers[q.correctOption] || "",
    }));
  }, [questionsList]);

  const currentQuestion = quizQuestions[currentQIndex];
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  useEffect(() => {
    const saved = localStorage.getItem(`quiz-preview-${quizId}`);
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, [quizId]);

  const handleSelect = (qid: string, answer: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qid]: answer }));
  };

  const handleSubmit = () => {
    let correct = 0;
    quizQuestions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
    localStorage.setItem(`quiz-preview-${quizId}`, JSON.stringify(answers));
  };

  const goToNext = () => {
    if (currentQIndex < quizQuestions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex((prev) => prev - 1);
    }
  };

  if (!quizQuestions.length) {
    return <div className="text-center mt-10">No questions available.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold border-b pb-3">Quiz Preview</h2>

      <div className="border border-gray-200 p-4 rounded-md bg-gray-50">
        <h3 className="text-lg font-medium mb-4">
          Question {currentQIndex + 1} of {quizQuestions.length}
        </h3>
        <p className="mb-4 font-semibold">{currentQuestion.question}</p>

        <div className="space-y-3">
          {currentQuestion.choices.map((choice) => {
            const isSelected = answers[currentQuestion.id] === choice;
            const isCorrect = choice === currentQuestion.correctAnswer;
            const isIncorrect =
              isSelected && choice !== currentQuestion.correctAnswer;

            return (
              <div key={choice}>
                <label
                  className={`flex items-center p-2 cursor-pointer transition ${submitted
                    ? isCorrect
                      ? "bg-green-100"
                      : isIncorrect
                        ? "bg-red-100"
                        : "bg-white"
                    : "hover:bg-gray-100"
                    }`}
                >
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    value={choice}
                    checked={isSelected}
                    onChange={() => handleSelect(currentQuestion.id, choice)}
                    disabled={submitted}
                    className="mr-3 scale-125"
                  />
                  <span className="text-base">{choice}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between pt-4">
        {currentQIndex > 0 ? (
          <Button variant="secondary" onClick={goToPrevious}>
            Previous
          </Button>
        ) : (
          <div />
        )}

        {currentQIndex < quizQuestions.length - 1 ? (
          <Button onClick={goToNext} disabled={!answers[currentQuestion.id]}>
            Next
          </Button>
        ) : !submitted ? (
          <Button
            onClick={handleSubmit}
            disabled={!answers[currentQuestion.id]}
            className="bg-blue-600"
          >
            Submit Quiz
          </Button>
        ) : null}
      </div>

      {submitted && (
        <div className="text-xl font-semibold text-center text-indigo-700 pt-4">
          Score: {score} / {quizQuestions.length}
        </div>
      )}

{isFaculty && (
      <div className="flex justify-end pt-6">
        <Link to={`/Kambaz/Courses/${cid}/Quizzes/QuizQuestions`}>
          <Button variant="secondary">Edit Quiz</Button>
        </Link>
      </div>
)}
    </div>
  );
}
