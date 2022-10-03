import React from "react";
import Add from "../img/addAvatar.png";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email, password);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">ChatApp</span>
          <span className="title">Đăng nhập</span>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="email" placeholder="Email" />
              <span></span>
            </div>

            <div>
              <input type="password" placeholder="Mật khẩu" />
              <span></span>
            </div>
            <button>Sign in</button>
            {err && (
              <span style={{ color: "red" }}>
                Tài khoản hoặc mật khẩu không đúng
              </span>
            )}
          </form>
          <p>
            Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
