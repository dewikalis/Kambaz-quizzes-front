import { Editor, EditorProvider } from "react-simple-wysiwyg";
import { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { QuestionEditorProps } from "./QuizEditor";

export default function TrueFalseQuestionEditor({ index, handleUpdateQuestion }: QuestionEditorProps) {
  const [title, setTitle] = useState("");
  const [points, setPoints] = useState(0);
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("true");

  const handleSave = () => {
    alert("Question saved!");
    handleUpdateQuestion(index, { title, points, description: "", answers: [correctAnswer], choices: ["true", "false"], type: "FILL-IN" })
  }
  const handleCancel = () => {
    setTitle("");
    setPoints(0);
    setQuestion("");
    setCorrectAnswer("true");
  };

  return (
    <EditorProvider>
      <Card className="p-4 w-100 max-w-2xl mx-auto">
        <Card.Body>
          {/* Title */}
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
            />
          </Form.Group>

          {/* Points */}
          <Form.Group className="mb-3">
            <Form.Label>Points</Form.Label>
            <Form.Control
              type="number"
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
              placeholder="Enter points"
            />
          </Form.Group>

          {/* Question with WYSIWYG Editor */}
          <Form.Group className="mb-3">
            <Form.Label>Question</Form.Label>
            <Editor
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </Form.Group>

          {/* Correct Answer (True/False) */}
          <Form.Group className="mb-3">
            <Form.Label>Correct Answer</Form.Label>
            <div className="d-flex gap-3">
              <Form.Check
                type="radio"
                label="True"
                name="correctAnswer"
                value="true"
                checked={correctAnswer === "true"}
                onChange={() => setCorrectAnswer("true")}
              />
              <Form.Check
                type="radio"
                label="False"
                name="correctAnswer"
                value="false"
                checked={correctAnswer === "false"}
                onChange={() => setCorrectAnswer("false")}
              />
            </div>
          </Form.Group>

          {/* Actions */}
          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Question
            </Button>
          </div>
        </Card.Body>
      </Card>
    </EditorProvider>
  );
}
