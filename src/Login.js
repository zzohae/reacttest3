import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./api/dbconnect"; // supabase import 유지
import { Btn } from "./ui/commonui";

export default function Login({ isLoggedIn, setIsLoggedIn }) {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("general");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleUserTypeChange = (e) => setUserType(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("user")
        .select("password")
        .eq("username", username);

      if (error || !data || data.length === 0) {
        setErrorMessage("일치하는 회원 정보가 없습니다.");
        setPasswordError(true);
        return;
      }

      const user = data[0];

      if (user.password !== password) {
        setErrorMessage("아이디/비밀번호를 확인해 주세요.");
        setPasswordError(true);
        return;
      }

      setErrorMessage("");
      setPasswordError(false);
      alert("로그인 성공");

      localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);

      navigate("/");
    } catch (error) {
      setErrorMessage("서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="container mycontainer row justify-content-center">
        <div className="col-4 p-0">
          <h2>로그인</h2>
          <div>
            <label>
              <input
                type="radio"
                value="general"
                checked={userType === "general"}
                onChange={handleUserTypeChange}
              />
              일반 회원
            </label>
            <label>
              <input
                type="radio"
                value="member"
                checked={userType === "member"}
                onChange={handleUserTypeChange}
              />
              판매자 회원
            </label>
          </div>
          <div>
            <label htmlFor="username">아이디</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="아이디를 입력하세요"
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="비밀번호를 입력하세요"
              className={passwordError ? "warning" : ""}
              onKeyDown={handleKeyDown}
            />
            {passwordError && <p className="warning-text">{errorMessage}</p>}
          </div>
          {errorMessage && !passwordError && (
            <p className="error-text">{errorMessage}</p>
          )}
          <Btn version="v1" onClick={() => navigate("/signup")}>
            회원가입
          </Btn>
          <Btn version="v2" onClick={handleLogin}>
            로그인
          </Btn>
          <div>
            <a href="/find-username">아이디 찾기</a> |{" "}
            <a href="/find-password">비밀번호 찾기</a>
          </div>
        </div>
      </div>
    </div>
  );
}
