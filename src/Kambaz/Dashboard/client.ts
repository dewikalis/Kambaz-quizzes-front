import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true })
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const toggleEnrollment = async (courseId: string) => {
  const { data } = await axiosWithCredentials.post(`${ENROLLMENTS_API}/current`, { courseId });
  return data;
};
