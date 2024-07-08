import { Link } from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>This is homepage.</h1>
            Please login <Link to='/login' vocab="">here</Link>
        </div>
    )
}