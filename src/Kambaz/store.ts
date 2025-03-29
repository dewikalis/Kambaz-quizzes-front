import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import enrollmentReducer from "./Dashboard/reducer";
import assignmentReducer from "./Courses/Assignments/reducer";
import coursesReducer from "./Courses/reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    enrollmentReducer,
    assignmentReducer,
    coursesReducer
  },
});
export default store;