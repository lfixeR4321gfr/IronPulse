

import { Link } from "react-router-dom";
import "./Register.css";
function Register (){
    return(
<div className="Register-container"> 
    
        <form className="Register-Form">
            <h2>REGISTERATION</h2>
            
            <div className="input-group">
                <label>First name</label>
                <input type="text" id ="name" placeholder="Enter first name"></input>

                <label>Last name</label>
                <input type="text" id ="name" placeholder="Enter last name"></input>

                <label>Email</label>
                <input type="email" id ="email" placeholder="Example@gmail.com"></input>

                <label>Address</label>
                <input type="text" id ="address" placeholder="Enter your Address"></input>

                <label>Password</label>
                <input type="password" id ="password1" placeholder="Enter your password"></input>

                <label>Comfirm Password</label>
                <input type="password" id ="password2" placeholder="Comfirm your password "></input>
                
                
                <button onClick="Submit()">REGISTER</button>

            
                <p>
                         Already have an account?
                          <Link to="/login"> Login</Link>
                </p>

            

                <div id="result"></div>



            </div>
            
            </form>
            
        </div>
        


    );
}

export default Register;