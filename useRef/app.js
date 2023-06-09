import React, { useRef, useState, useEffect } from "react";

const App = () => {
  const emailInput = useRef(null); // email input에 대한 useRef
  const pwInput = useRef(null); // pw input에 대한 useRef

  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값

  useEffect(() => {
    if (emailValue === "saoh" && pwValue === "1234") {
      alert("로그인 성공");
  }}, [emailValue, pwValue]);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        이메일 : <input type="email" ref={emailInput} onChange={(e) => handleInputChange(e, setEmailValue)} />
      </label>
      <label>
        비밀번호 : <input type="password" ref={pwInput} onChange={(e) => handleInputChange(e, setPwValue)} />
      </label>
    </form>
  );
};

export default App;