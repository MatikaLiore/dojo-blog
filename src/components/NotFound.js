import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="content">
            <h2>Sorry My Friend</h2>
            <p>The page you're looking for does not exist</p>
            <Link to="/">Go to Home Page</Link>
        </div>
     );
}
 
export default NotFound;