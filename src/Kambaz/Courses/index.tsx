import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import { Navigate, Route, Routes, useLocation } from "react-router";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useParams } from "react-router";
import QuizEditor from "./Quizzes/QuizEditor";
import Quizzes from "./Quizzes";
import QuizPreview from "./Quizzes/QuizPreview";
import * as courseClient from "./client"
import { useEffect, useState } from "react";
import QuizDetails from "./Quizzes/QuizDetails";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const [users, setUsers] = useState([]);

  const fetchUsersForCourse = async (cid: string) => {
    const users = await courseClient.findUsersForCourse(cid)
    setUsers(users);
  }

  useEffect(() => {
    if (cid) {
      fetchUsersForCourse(cid)
    }
  }, [cid])


  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>{" "}
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation course={course} />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Quizzes/:qid" element={<QuizEditor />} />
            <Route path="Quizzes/:qid/QuizDetails" element={<QuizDetails />} />
            <Route path="Quizzes/:qid/QuizPreview" element={<QuizPreview />} />

            <Route path="People" element={<PeopleTable users={users} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
