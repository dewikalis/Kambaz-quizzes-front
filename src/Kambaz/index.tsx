import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import PeopleTable from "./Courses/People/Table";
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourse,
  deleteCourse as deleteCourseReducer,
  updateCourse as updateCourseReducer,
} from "./Courses/reducer";
import Dashboard from "./Dashboard";

export default function Kambaz() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });
  const addNewCourse = () => {
    dispatch(addCourse(course));
  };
  const deleteCourse = (courseId: any) => {
    dispatch(deleteCourseReducer(courseId));
  };
  const updateCourse = () => {
    dispatch(updateCourseReducer(course));
  };
  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Courses/:cid/*"
            element={
              <ProtectedRoute>
                <Courses courses={courses} />{" "}
              </ProtectedRoute>
            }
          />
          <Route path="/People" element={<PeopleTable />} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}
