import React, { useState } from 'react';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="maincontainer">
      <div className="monkeylogin">
        <div className="animcon" id="animcon">
          <img
            id="hands"
            src="https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/hands.png"
          />
        </div>
        <div className="formcon">
          <form>
            <input
              type="email"
              id="mail"
              name=""
              onClick={togglePasswordVisibility}
              className="tb"
              placeholder="Email"
              autoComplete="off"
            />
            <br />
            <br />
            <div style={{ position: 'relative' }}>
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="pwdbar"
                name="pwd"
                onClick={togglePasswordVisibility}
                className="tb"
                placeholder="Password"
              />
              <span
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </span>
            </div>
            <br />
            <br />
            <input
              type="submit"
              name=""
              className="sbutton"
              value="L O G I N"
            />
          </form>
        </div>

      </div>
    </div>
  );
}

export default Login;
