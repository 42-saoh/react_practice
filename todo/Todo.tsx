import React, { useState, useEffect } from 'react';
import { Container, Table, PageHeader, StyledLink, StyledButton, ButtonContainer } from './style/TodoStyle';
import {Get} from './axios/axios'
import { Modal } from './Modal';

export interface TodoDTO {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export const Todo = () => {
  const [todos, setTodos] = useState<TodoDTO[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<TodoDTO | null>(null);

  const getTodos = async () : Promise<TodoDTO[]> => {
      const fetchedTodos = await Get<TodoDTO[]>(
        `/todo`
      );
      return fetchedTodos;
  }

  const handleClick = (todo : TodoDTO) => {
    setSelectedTodo(todo);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTodo(null);
  };

  useEffect(() => {
    if (showModal) return;
    getTodos().then(fetchedTodos => {
      setTodos(fetchedTodos);
    });
  }, [showModal]);

  return (
      <Container>
      <PageHeader>
        <h1>Todo List</h1>
      </PageHeader>
      <ButtonContainer>
        <StyledLink to="/add">
          <StyledButton>추가</StyledButton>
        </StyledLink>
      </ButtonContainer>
      <br/>
      <div id="mainHide">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>제목</th>
            </tr>
          </thead>
          <tbody>
            {
              todos.map(todo => (
                  <tr key={todo.id} onClick={() => handleClick(todo)}>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                  </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
      {showModal && (
      <Modal
        todoDTO={selectedTodo}
        closeModal={closeModal}
      />
    )}
    </Container>
  );
};