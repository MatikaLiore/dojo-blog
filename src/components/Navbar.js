import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    // const Username = useSelector((state) => state.user.value.username);
    // console.log(Username);
    const {user} = useSelector(state => state.auth)

    return (  
        <nav className="navbar">
            <h1>The dojo blog</h1>
            <div className="links">
                <Link to="/" style={{color: "white", backgroundColor: '#f1356d', borderRadius: "8px"}}>Home</Link>
                <Link to="login">Login</Link>
                <Link to="/about">About</Link>
                <Link to="/create">Create</Link>
                {user && <span> Welcome {user.username}</span>}
            </div>
        </nav>
    );
}
 
export default Navbar;