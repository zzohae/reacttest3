import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./api/dbconnect";
import { Btn } from "./ui/commonui";
import Movetool from './ui/Mtitle'

export default function Login() {
  const [username, setUsername] = useState("");  // 사용자가 입력한 username (아이디)
  const [password, setPassword] = useState("");  // 사용자가 입력한 password
  const [userType, setUserType] = useState("general");
  const [errorMessage, setErrorMessage] = useState("");  // 오류 메시지
  const [passwordError, setPasswordError] = useState(false);  // 비밀번호 오류 여부
  const navigate = useNavigate();

  const handleUserTypeChange = (e) => setUserType(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    // user 테이블에서 username으로 해당 사용자의 이메일을 조회
    const { data, error } = await supabase
      .from("user")
      .select("email")
      .eq("username", username)  // 'username'을 기준으로 사용자 검색
      .single();  // 단일 데이터만 가져옴

    // 사용자 찾지 못한 경우 처리
    if (error || !data) {
      setErrorMessage("일치하는 회원 정보가 없습니다.");
      setPasswordError(true);
      return;
    }

    const email = data.email;  // 찾은 사용자의 이메일

    // 이메일과 비밀번호로 Supabase 인증 시도
    const { user, session, error: authError } = await supabase.auth.signInWithPassword({
      email: email,  // 찾은 이메일
      password: password,  // 사용자가 입력한 비밀번호
    });

    if (authError) {
      setErrorMessage("로그인에 실패했습니다. 아이디/비밀번호를 확인해 주세요.");
      setPasswordError(true);
      return;
    }

    // 로그인 성공 시 상태 초기화 및 페이지 이동
    setErrorMessage("");
    alert("로그인 성공");
    navigate("/"); // 홈 페이지로 리디렉션
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="container mycontainer row justify-content-center">
        <div className="w-100 d-flex flex-column gap-3" style={{maxWidth: '427px'}}>
        <Movetool nomargin='true' textColor='#214aee' h2size='34px'>로그인/회원가입</Movetool>

        {/* (여기부터)라디오 스타일 컴포넌트 만들어서 입력하기 */}
          <div>
            <label>
              <input
                type="radio"
                value="general"
                checked={userType === "general"}
                onChange={handleUserTypeChange}/>
              일반 회원
            </label>
            <label>
              <input
                type="radio"
                value="member"
                checked={userType === "member"}
                onChange={handleUserTypeChange}/>
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
            />
            {passwordError && <p className="warning-text">{errorMessage}</p>}
          </div>
          {errorMessage && !passwordError && (
            <p className="error-text">{errorMessage}</p>
          )}
          <div className="d-flex gap-2">
            <Btn version="v1" onClick={() => navigate("/signup")} style={{borderRadius:'8px'}}>
              회원가입
            </Btn>
            <Btn version="v2" onClick={handleLogin} style={{borderRadius:'8px'}}>
              로그인
            </Btn>
          </div>

          <div>
            <a href="/find-username">아이디 찾기</a> |{" "}
            <a href="/find-password">비밀번호 찾기</a>
          </div>
        </div>
      </div>
    </div>
  );
}
