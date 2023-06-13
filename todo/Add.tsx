import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Post } from './axios/axios';
import { StyledForm, StyledLabel, StyledInput, StyledButton, PageContainer } from './style/AddStyle';

export const Add = () => {
  const titleInput = useRef<HTMLInputElement>(null);
  const contentInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleOnClick = () => {
    if(titleInput.current && contentInput.current) {
      const title = titleInput.current.value;
      const content = contentInput.current.value;
      const getTodos = async () : Promise<any> => {
        const statusCode = await Post<any>(
          `/todo/add`,
          {
            title : title,
            content: content
          }
        );
        return statusCode;
      }
      getTodos().then(statusCode => {
        if(statusCode === 200) {
          navigate("/todo");
      } else {
          navigate("/");
      }
      }).catch(err => {
        navigate("/");
      });
    }
  };

  return (
    <PageContainer>
      <StyledForm>
        <StyledLabel>
          제목 : <StyledInput type="text" ref={titleInput} />
        </StyledLabel>
        <StyledLabel>
          내용 : <StyledInput type="text" ref={contentInput} />
        </StyledLabel>
        <StyledButton onClick={handleOnClick}>Submit</StyledButton>
      </StyledForm>
    </PageContainer>
  );
}