import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;

export const getQuizzes = async (courseId: string) => {
  const { data } = await axiosWithCredentials.get(`${QUIZZES_API}/courses/${courseId}`);
  return data;
};

export const saveQuiz = async (quizInfo: any) => {
  const { data } = await axiosWithCredentials.post(`${QUIZZES_API}`, quizInfo);
  return data
}

export const updateQuiz = async (quiz: any) => {
  const { data } = await axiosWithCredentials.put(
    `${QUIZZES_API}/${quiz._id}`,
    quiz
  );
  return data;
};

export const takeQuiz = async (quiz: any) => {
  const { data } = await axiosWithCredentials.post(
    `${QUIZZES_API}/${quiz._id}`,
    quiz
  )
  return data
}