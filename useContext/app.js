import React, { useContext }  from "react";
import UserInfo from "./context";
import HelloLicatTwo from "./hellotwo";

const App = () => {
  return (
      <HelloLicat />
  );
};

const HelloLicat = () => {
  const { name, id } = useContext(UserInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{id}</strong>
        <UserInfo.Provider value={{ name: "Licat", id: "ImLion" }}>
          <HelloLicatTwo/>
        </UserInfo.Provider>
    </div>
  );
};

export default App;