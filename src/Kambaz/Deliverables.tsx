import { Link } from "react-router";

export default function Deliverables() {
    return (
        <div> 
        <h2> Undergrad Teammates:</h2>
        <h3> Amanda Lee</h3>
        <h3> Danielle Kalis</h3>
        <h3> Nelson Dong</h3>

        <h2>Github front:</h2>
        <Link to={"https://github.com/dewikalis/Kambaz-quizzes-front "}>https://github.com/dewikalis/Kambaz-quizzes-front </Link>
        <h2>Github back:</h2>
        <Link to={"https://github.com/dewikalis/Kambaz-quizzes-back"}>https://github.com/dewikalis/Kambaz-quizzes-back</Link>
        </div>
    )
}