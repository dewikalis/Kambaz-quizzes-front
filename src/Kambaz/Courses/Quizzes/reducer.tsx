import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Define the type for a single quiz
interface Quiz {
  _id: string;
  title: string;
  description: string;
  points?: number;
  due?: string;
  from?: string;
  until?: string;
  // other optional fields
}

// Define the state type that will hold an array of quizzes
interface QuizState {
  quizzes: Quiz[];
}

// Initial state for quizzes
const initialState: QuizState = {
  quizzes: [],
};

// Create the quizzes slice
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    // Adding a new quiz
    addQuiz: (state, action: PayloadAction<Omit<Quiz, "_id">>) => {
      const newQuiz: Quiz = {
        _id: uuidv4(), // Generate a new UUID for the quiz
        ...action.payload, // Spread the rest of the quiz data
      };
      state.quizzes.push(newQuiz);
    },

    // Deleting a quiz
    deleteQuiz: (state, action: PayloadAction<string>) => {
      state.quizzes = state.quizzes.filter(
        (quiz) => quiz._id !== action.payload
      );
    },

    // Updating an existing quiz
    updateQuiz: (state, action: PayloadAction<Quiz>) => {
      const updatedQuiz = action.payload;

      // Update only the quiz data, without overwriting _id
      state.quizzes = state.quizzes.map((quiz) =>
        quiz._id === updatedQuiz._id ? { ...quiz, ...updatedQuiz } : quiz
      );
    },
  },
});

// Export actions
export const { addQuiz, deleteQuiz, updateQuiz } = quizzesSlice.actions;

// Export the reducer
export default quizzesSlice.reducer;
