import { Link, useLocation } from "react-router-dom";
export default function CourseNavigation({ course }: any) {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  const location = useLocation();
  const currentLocation = location.pathname.split("/").pop();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={`wd-course-${link.toLowerCase()}-link`}
          to={`/Kambaz/Courses/${course?._id}/${link}`}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`list-group-item text-danger border border-0 ${
            link === currentLocation ? "active" : ""
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
