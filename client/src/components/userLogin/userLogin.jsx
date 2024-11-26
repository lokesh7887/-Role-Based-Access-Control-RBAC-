import React, { useState } from "react";
import "./userLogin.css";

const FlipCard = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => setIsRegister(!isRegister);

  return (
    <div className="card">
      {isRegister ? (
        <div className="form-container">
          <h2>Register</h2>
          <form>
            <input type="text" placeholder="Employee ID" />
            <select>
              <option value="" disabled selected>Role</option>
              <option value="Gaurd">Gaurd</option>
              <option value="Manager">Manager</option>
              <option value="Authority">Authority</option>
            </select>

            <input type="email" placeholder="Phone" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
            <p>
              Have an account? <span onClick={toggleForm}>Login</span>
            </p>
          </form>
        </div>
      ) : (
        <div className="form-container">
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="Employee ID" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <p>
              No account? <span onClick={toggleForm}>Register</span>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default FlipCard;