import React from 'react';
import styled, {css} from "styled-components";

// const GlobalStyle = createGlobalStyle`
//     ${reset}
    
//     span {
//     color: red;
//     font-size: 12px;
//     }

//     a{
//         text-decoration : none;
//         color : inherit;
//     }

//     button{
//         border : none;
//         cursor : pointer;
//     }

//     * {
//     box-sizing: border-box;
//     }
// `

// const ContentDiv = styled.div`
//   margin: 40px;
// `;

// const ContentH2 = styled.h2`
//   color: ${(props) => (props.name === 'hello'? 'red' : 'black')};
//   width: 200px;
//   margin: 0 auto;
//   text-align: center;
// `;

// const name = '이호준'
// const age = 10

// function 인사(문구, 이름, 나이){
//   console.log(문구, 이름, 나이)
//   return `${문구[0]}${이름}${문구[1]}${나이+나이}${문구[2]}`
// }

// function App() {
//   const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age+age}입니다.`

//   console.log(인사문구)
//   return (
//     <ContentDiv>
//       <ContentH2 name="hello">Q&A</ContentH2>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
//         corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
//         aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
//         Nemo, ullam.
//       </p>
//     </ContentDiv>
// 	);
// }

// const ContentOne = styled.div`
//     margin: 40px;
// `;

// const ContentTwo = styled.div`
//     color:red;
// `;

// const ContentThree = styled(ContentTwo)`
//     border: 1px solid black;
// `

// function App() {
//     return (
//         <div>
//             <ContentOne>hello world</ContentOne>
//             <ContentTwo>hello world</ContentTwo>
//             <ContentThree>hello world</ContentThree>
//         </div>
//     );
// }

const One = css`
  .button1 {
    width: 200px;
    height: 100px;
    padding: 10px 20px;
    background: blue;
    &::after {
      content: 'button1';
      font-size: 40px;
      color: white;
    }
  }
`;

const Two = css`
  .button2 {
    width: 200px;
    height: 100px;
    padding: 10px 20px;
    background: blue;
    border-radius: 20px;
    &::after {
      content: 'button2';
      font-size: 40px;
      color: black;
    }
  }
`;

const Three = css`
  .button3 {
    width: 200px;
    height: 100px;
    padding: 10px 20px;
    background: green;
    border-radius: 20px;
    &::after {
      content: 'button3';
      font-size: 40px;
      color: white;
    }
  }
`;

const Main = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Four = styled.div`
  ${Main}
  ${One}
  ${Two}
  ${Three}
`

const App = () => {
	return (
    <div>
      <Four>
        <button className="button1"></button>
        <button className="button2"></button>
        <button className="button3"></button>
      </Four>
    </div>
	);
};

export default App;