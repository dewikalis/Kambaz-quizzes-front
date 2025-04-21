import { Editor, EditorProvider } from "react-simple-wysiwyg";
import { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { QuestionEditorProps } from "./QuizEditor";

export default function MultipleChoiceEditor({ index, handleUpdateQuestion }: QuestionEditorProps) {
  const [title, setTitle] = useState("");
  const [points, setPoints] = useState(0);
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState([""]);
  const [correctChoice, setCorrectChoice] = useState("");

  const handleChoiceChange = (index: number, value: string) => {
    const newChoices = [...choices];
    newChoices[index] = value;
    setChoices(newChoices);
  };

  const addChoice = () => setChoices([...choices, ""]);
  const removeChoice = (index: number) =>
    setChoices(choices.filter((_, i) => i !== index));

  const handleSave = () => {
    handleUpdateQuestion(index, { title, points, description: "", answers: [correctChoice], choices, type: "MULTIPLE-CHOICE" })
  };
  const handleCancel = () => {
    setTitle("");
    setPoints(0);
    setQuestion("");
    setChoices([""]);
    setCorrectChoice("");
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
        <Form.Group className="mb-3">
          <Form.Label>Question</Form.Label>
          <EditorProvider>
            <Editor
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </EditorProvider>
        </Form.Group>

        {/* Choices */}
        <Form.Group className="mb-3">
          <Form.Label>Choices</Form.Label>
          {choices.map((choice, index) => (
            <div key={index} className="d-flex align-items-center mb-2">
              <Form.Check
                type="radio"
                name="correctChoice"
                checked={correctChoice === choices[index]}
                onChange={() => setCorrectChoice(choices[index])}
              />
              <Form.Control
                type="text"
                className="mx-2"
                value={choice}
                onChange={(e) => handleChoiceChange(index, e.target.value)}
                placeholder={`Choice ${index + 1}`}
              />
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeChoice(index)}
                disabled={choices.length === 1}
              >
                ✕
              </Button>
            </div>
          ))}
          <Button className="mt-2" onClick={addChoice}>
            Add Choice
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
