import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  enrollments: [] as any[],
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    toggleEnrollment: (state, action: PayloadAction<{ userId: string, courseId: string }>) => {
      const enrolled = state.enrollments.find((enrollment) => enrollment.user === action.payload.userId && enrollment.course === action.payload.courseId)
      if (enrolled) {
        state.enrollments = state.enrollments.filter((enrollment) => enrollment !== enrolled)
      }
      else {
        state.enrollments = [...state.enrollments, { _id: uuid(), user: action.payload.userId, course: action.payload.courseId }]
      }
    },
    setEnrollments: (state, action: PayloadAction<any>) => {
      state.enrollments = action.payload
    }
  },
});

export const { toggleEnrollment, setEnrollments } = enrollmentSlice.actions;

export default enrollmentSlice.reducer;