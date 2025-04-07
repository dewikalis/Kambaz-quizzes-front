// src/Kambaz/Courses/People.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PeopleTable from "./Table";
import { findUsersForCourse } from "../client";

export default function CoursePeople() {
  const { cid } = useParams();
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    if (!cid) return;
    const usersInCourse = await findUsersForCourse(cid);
    setUsers(usersInCourse);
  };

  useEffect(() => {
    loadUsers();
  }, [cid]);

  return (
    <div className="p-3">
      <h4>People in This Course</h4>
      <PeopleTable users={users} />
    </div>
  );
}
