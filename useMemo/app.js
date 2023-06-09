import React, { useRef, useState, useEffect, useMemo } from "react";

const App = () => {
  const emailInput = useRef(null); // email input에 대한 useRef
  const pwInput = useRef(null); // pw input에 대한 useRef
  const [userInfo, setUserInfo] = useState([]);
  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값
  const getNum = (li) => {
    return li.length;
  };
  const n = useMemo(() => getNum(userInfo), [userInfo]);


  useEffect(() => {
    if (emailValue === "saoh" && pwValue === "1234") {
      alert("로그인 성공");
      const newInfo = [...userInfo, { email: emailValue, pw: pwValue }];
      emailInput.current.value = "";
      pwInput.current.value = "";
      setEmailValue(0);
      setPwValue(0);
      emailInput.current.focus();
      setUserInfo(newInfo);
  }}, [emailValue, pwValue]);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <>
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        이메일 : <input type="email" ref={emailInput} onChange={(e) => handleInputChange(e, setEmailValue)} />
      </label>
      <label>
        비밀번호 : <input type="password" ref={pwInput} onChange={(e) => handleInputChange(e, setPwValue)} />
      </label>
    </form>
    <ul>
        {userInfo.map((value, index) => (
          <li key={index}>
            <h3>{value.email}</h3>
            <strong>@{value.pw}</strong>
          </li>
        ))}
      </ul>
      <span>{n}</span>
    </>
  );
};

export default App;