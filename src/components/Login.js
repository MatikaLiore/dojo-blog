import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { login, logout } from "../Redux/Store/Store";
import { Logout, LoginRequest, LoginSuccess, LoginFailure } from "../Pure-Redux/Actions/userActions";

const Login = () => {

    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const dispatch = useDispatch();
    const {error, loading, user} = useSelector((state) => state.auth);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(LoginRequest(credentials));
        if (credentials.username && credentials.password) {
            dispatch(LoginSuccess(credentials));
        }else{
            dispatch(LoginFailure("Password or Email Required!"))
        }
    }

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(Logout());
    }

    return ( 
        <div className="create">
            <h2>
                Login Page
            </h2>

            <form>
                <label>Username</label>
                <input type="text" required value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})} placeholder="Username"></input>
                <label>Password</label>
                <input type="password"required value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})} placeholder="Password"></input>

                <button onClick={handleSubmit}>Submit</button>
                { loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {user && <p>Welcome, {user.username}</p>}
            </form>
            <button onClick={handleLogout}>Logoout</button>

        </div>
     );
}
 
export default Login;