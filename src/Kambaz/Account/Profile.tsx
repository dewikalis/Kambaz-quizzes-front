import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form.Control id="wd-username" placeholder="alice" className="mb-2" />
      <Form.Control id="wd-password" placeholder="123" className="mb-2" />
      <Form.Control id="wd-firstname" placeholder="Alice" className="mb-2" />
      <Form.Control
        id="wd-lastname"
        placeholder="Wonderland"
        className="mb-2"
      />
      <Form.Control
        type="date"
        id="wd-date"
        placeholder="mm-dd-yyyy"
        className="mb-2"
      />
      <Form.Control
        id="wd-email"
        placeholder="alice@wonderland"
        className="mb-2"
      />
      <select defaultValue="FACULTY" id="wd-role" className="form-select mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link
        id="wd-signup-btn"
        to="/Kambaz/Account/Signin"
        className="btn btn-danger w-100 mb-2"
      >
        {" "}
        Sign out{" "}
      </Link>
    </div>
  );
}
