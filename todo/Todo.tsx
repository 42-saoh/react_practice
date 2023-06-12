import React, { useState, useEffect } from 'react';
import { Container, Table, PageHeader } from './TodoStyle';
import {Get} from './axios/axios'

interface TodoDTO {
  id: number;
  title: string;
  content: string;
}

export const Todo = () => {
  const [todos, setTodos] = useState<TodoDTO[]>([]);  // 상태 초기화

  const getTodos = async () : Promise<TodoDTO[]> => {
      const fetchedTodos = await Get<TodoDTO[]>(
        `/todo`
      );
      return fetchedTodos;
  }

  useEffect(() => {
    getTodos().then(fetchedTodos => {
      setTodos(fetchedTodos);
    });
  }, []);

  return (
    <>
      <Container>
      <PageHeader>
        <h1>Todo List</h1>
      </PageHeader>  
      <br/><br/><br/>
      <div id="mainHide">
        <Table>
          <thead>
            <tr>
              <th className="col-md-1">#</th>
              <th className="col-md-2">제목</th>
              <th className="col-md-2">내용</th>
            </tr>
          </thead>
          <tbody>
            {
              todos.map(todo => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>{todo.content}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </Container>
    </>
  );
};