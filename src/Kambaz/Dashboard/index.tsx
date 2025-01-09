import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/miffy.jpeg" width={200} />
            <div>
              <h5> ARTG1123 Illustration </h5>
              <p className="wd-dashboard-course-title">Designing </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/fish.jpeg" width={200} />
            <div>
              <h5> BIO1837 Marine Biology </h5>
              <p className="wd-dashboard-course-title">Saving fish </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/bear.jpeg" width={200} />
            <div>
              <h5> PHIL1437 Mindfulness Outside </h5>
              <p className="wd-dashboard-course-title">Relaxing </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/meow.jpeg" width={200} />
            <div>
              <h5> PHIL1565 Beauty and Art </h5>
              <p className="wd-dashboard-course-title">Defining beauty </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/myrollingstar.jpeg" width={200} />
            <div>
              <h5> PHIL3827 Pursuing Happiness </h5>
              <p className="wd-dashboard-course-title">Finding meaning </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/frogg.jpeg" width={200} />
            <div>
              <h5> BIO1110 Animal Studies </h5>
              <p className="wd-dashboard-course-title">
                Learning about animals{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
