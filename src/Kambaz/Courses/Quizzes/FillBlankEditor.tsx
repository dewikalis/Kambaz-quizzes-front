import { Editor, EditorProvider } from "react-simple-wysiwyg";
import { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { QuestionEditorProps } from "./QuizEditor";

export default function FillInTheBlankEditor({ index, handleUpdateQuestion }: QuestionEditorProps) {
  const [title, setTitle] = useState<string>("");
  const [points, setPoints] = useState<number>(0);
  const [question, setQuestion] = useState<string>("");
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([""]);

  // Handle changes to each answer in the list
  const handleAnswerChange = (index: number, value: string) => {
    const updatedAnswers = [...correctAnswers];
    updatedAnswers[index] = value;
    setCorrectAnswers(updatedAnswers);
  };

  // Add a new correct answer to the list
  const addAnswer = () => setCorrectAnswers([...correctAnswers, ""]);

  // Remove a specific correct answer by its index
  const removeAnswer = (index: number) => {
    setCorrectAnswers(correctAnswers.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    alert("Question saved!");
    handleUpdateQuestion(index, { title, points, description: "", answers: correctAnswers, choices: [question], type: "FILL-IN" })
  }
  const handleCancel = () => {
    setTitle("");
    setPoints(0);
    setQuestion("");
    setCorrectAnswers([""]);
  };

  return (
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
        <EditorProvider>
          <Form.Group className="mb-3">
            <Form.Label>Question</Form.Label>
            <Editor
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </Form.Group>
        </EditorProvider>

        {/* Correct Answers */}
        <Form.Group className="mb-3">
          <Form.Label>Possible Correct Answers for the Blank</Form.Label>
          {correctAnswers.map((answer, index) => (
            <div key={index} className="d-flex align-items-center mb-2">
              <Form.Control
                type="text"
                className="mx-2"
                value={answer}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                placeholder={`Answer ${index + 1}`}
              />
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeAnswer(index)}
                disabled={correctAnswers.length === 1}
              >
                ✕
              </Button>
            </div>
          ))}
          <Button className="mt-2" onClick={addAnswer}>
            Add Correct Answer
          </Button>
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
  );
}
