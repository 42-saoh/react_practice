import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {App} from './App';
import {Todo} from './Todo';
import {Add} from './Add';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/todo" element={<Todo />}/>
        <Route path="/add" element={<Add />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);