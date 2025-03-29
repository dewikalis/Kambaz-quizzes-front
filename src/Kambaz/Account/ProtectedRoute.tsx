import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
export default function ProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const { cid } = useParams();
  if (!currentUser) {
    return <Navigate to="/Kambaz/Account/Signin" />;
  }
  if (cid && !enrollments.find((enrollment: any) => enrollment.course === cid)) {
    return <Navigate to="/Kambaz/Dashboard" />;
  }
  else {
    return children;
  }
}