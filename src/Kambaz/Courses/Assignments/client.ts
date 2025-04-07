import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_URL = `${REMOTE_SERVER}/api/assignments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const findAssignmentsForCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${ASSIGNMENTS_URL}/${courseId}`
  );
  return data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${ASSIGNMENTS_URL}/${assignmentId}`
  );
  return data;
};

export const updateAssignment = async (assignment: any) => {
  const { data } = await axiosWithCredentials.put(
    `${ASSIGNMENTS_URL}/${assignment._id}`,
    assignment
  );
  return data;
};

export const addAssignment = async (assignment: any) => {
  const { data } = await axiosWithCredentials.post(
    `${ASSIGNMENTS_URL}`,
    assignment
  );
  return data;
};
