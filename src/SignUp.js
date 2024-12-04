import React, { useState } from 'react';
import { supabase } from './api/dbconnect';
import Movetool from './ui/Mtitle'

export default function Signup () {
  // useState를 사용하는 이유: 유효성 검사, 초기화
  const [userType, setUserType] = useState('general');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('male');
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [phonePrefix, setPhonePrefix] = useState('');
  const [phoneMiddle, setPhoneMiddle] = useState('');
  const [phoneLast, setPhoneLast] = useState('');
  const [email, setEmail] = useState('');
  const [emailDomain, setEmailDomain] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');

  // 생년월일 'YYYY-MM-DD'
  const getBirthdate = () => {
    if (birthYear && birthMonth && birthDay) {
      return `${birthYear}-${birthMonth.padStart(2, '0')}-${birthDay.padStart(2, '0')}`;
    }
    return '';
  };

  // 전화번호 '01X-XXXX-XXXX'
  const getPhoneNumber = () => {
    if (phonePrefix && phoneMiddle && phoneLast) {
      return `${phonePrefix}-${phoneMiddle}-${phoneLast}`;
    }
    return '';
  };

  // 이메일
  const getEmail = () => {
    if (email && emailDomain) {
      return `${email}@${emailDomain}`;
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 비밀번호 최소 길이 체크
    if (password.length < 6) {
      alert("비밀번호는 최소 6자로 이루어져야 합니다.");
      return;
    }

    const birthdate = getBirthdate();
    const phoneNumber = getPhoneNumber();
    const finalEmail = getEmail();

    const { user, error: signUpError } = await supabase.auth.signUp({
      email: finalEmail,
      password: password
    });

    if (signUpError) {
      alert('회원가입에 실패했습니다. 고객센터에 문의 바랍니다.');
      return;
    }

    const { data, error } = await supabase
      .from('user')
      .insert([{
        user_type: userType,
        username: username,
        password: password,
        name: name,
        gender: gender,
        birthdate: birthdate,
        phone_number: phoneNumber,
        email: finalEmail,
        zipcode: zipcode,
        address: address,
        address_detail: addressDetail,
      }]);

    if (error) {
      alert('회원가입에 실패했습니다. 고객센터에 문의 바랍니다.');
    } else {
      alert('회원가입이 완료되었습니다.');
      // 초기화
      setUsername('');
      setPassword('');
      setName('');
      setGender('male');
      setBirthYear('');
      setBirthMonth('');
      setBirthDay('');
      setPhonePrefix('');
      setPhoneMiddle('');
      setPhoneLast('');
      setEmail('');
      setEmailDomain('');
      setZipcode('');
      setAddress('');
      setAddressDetail('');
    }
  };

  return (
    <div className="container mycontainer d-flex flex-column align-items-start justify-content-center signupform">
      <div className='row' style={{margin:'0 auto'}}>
      <Movetool textColor='#214aee' h2size='34px'>회원가입</Movetool>
      <form onSubmit={handleSubmit} className='d-flex flex-column'>
        {/* 사용자 유형 (라디오 버튼) */}
        <div className='formRow'>
          <label>구분*</label>
          <div className='InputArea'>
            <label>
              <input
                name='userType'
                type="radio"
                value="general"
                checked={userType === 'general'}
                onChange={(e) => setUserType(e.target.value)}
              />
              일반회원
            </label>
            <label>
              <input
                name='userType'
                type="radio"
                value="member"
                checked={userType === 'member'}
                onChange={(e) => setUserType(e.target.value)}
              />
              판매자 회원
            </label>
          </div>
        </div>

        {/* 아이디 */}
        <div className='formRow'>
          <label>아이디*</label>
          <input
            className='InputArea'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* 비밀번호 */}
        <div className='formRow'>
          <label>비밀번호*</label>
          <input
            className='InputArea'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* 이름 */}
        <div className='formRow'>
          <label>이름*</label>
          <input
            className='InputArea'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* 성별 */}
        <div className='formRow'>
          <label>성별</label>
          <div className='InputArea'>
            <label>
              <input
                type="radio"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              남성
            </label>
            <label>
              <input
                type="radio"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
              여성
            </label>
            <label>
              <input
                type="radio"
                value="other"
                checked={gender === 'other'}
                onChange={(e) => setGender(e.target.value)}
              />
              기타
            </label>
          </div>
        </div>

        {/* 생년월일 */}
        <div className='formRow'>
          <label>생년월일</label>
          <div className='InputArea'>
          <select
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
            required
          >
            <option value="">년</option>
            {[...Array(2025 - 1900)].reverse().map((_, idx) => (
              <option key={idx} value={2024 - idx}>
                {2024 - idx}
              </option>
            ))}
          </select>
          <select
            value={birthMonth}
            onChange={(e) => setBirthMonth(e.target.value)}
            required
          >
            <option value="">월</option>
            {[...Array(12)].map((_, idx) => (
              <option key={idx} value={idx + 1}>
                {idx + 1}
              </option>
            ))}
          </select>
          <select
            value={birthDay}
            onChange={(e) => setBirthDay(e.target.value)}
            required
          >
            <option value="">일</option>
            {[...Array(31)].map((_, idx) => (
              <option key={idx} value={idx + 1}>
                {idx + 1}
              </option>
            ))}
          </select>
          </div>
        </div>

        {/* 전화번호 */}
        <div className='formRow'>
          <label>전화번호*</label>
          <div className='InputArea'>
            <select
              value={phonePrefix}
              onChange={(e) => setPhonePrefix(e.target.value)}
              required
            >
              <option value="">선택</option>
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
              {/* 필요한 전화번호 추가 */}
            </select>
            <input
              type="text"
              pattern="[0-9]*"
              value={phoneMiddle}
              onChange={(e) => setPhoneMiddle(e.target.value)}
              maxLength="4"
              required
            />
            <input
              type="text"
              pattern="[0-9]*"
              value={phoneLast}
              onChange={(e) => setPhoneLast(e.target.value)}
              maxLength="4"
              required
            />
          </div>
        </div>

        {/* 이메일 */}
        <div className='formRow'>
          <label>이메일*</label>
          <div className='InputArea'>
            <input
              type="text"
              placeholder="아이디"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            @
            <select
              value={emailDomain}
              onChange={(e) => setEmailDomain(e.target.value)}
              required
            >
              <option value="">도메인 선택</option>
              <option value="gmail.com">gmail.com</option>
              <option value="naver.com">naver.com</option>
              <option value="daum.net">daum.net</option>
              {/* 추가적인 도메인 옵션 */}
            </select>
          </div>
        </div>

        {/* 주소 */}
        <div className='formRow'>
          <label>우편번호*</label>
          <div className='InputArea'>
            <input
              type="text"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='formRow'>
          <label>주소*</label>
          <input
          className='InputArea'
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className='formRow'>
          <label>상세주소</label>
          <input
          className='InputArea'
            type="text"
            value={addressDetail}
            onChange={(e) => setAddressDetail(e.target.value)}
          />
        </div>

        {/* 가입하기 버튼 */}
        <button type="submit">가입하기</button>
      </form>
      </div>
    </div>
  );
};
