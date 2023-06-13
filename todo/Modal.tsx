import React, { useState } from "react";
import { ModalBackground, ModalContainer} from "./style/ModalStyle";
import { Row, Col, Button, Card, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TodoDTO } from "./Todo";
import { Put } from "./axios/axios";

interface ContentDTO {
    todoDTO: TodoDTO | null;
    closeModal: () => void;
  }

export const Modal = (props : ContentDTO) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState(props.todoDTO?.title);
    const [content, setContent] = useState(props.todoDTO?.content);
    const [editing, setEditing] = useState(false);


    const handleCancel = () => {
        setContent(props.todoDTO?.content)
        setTitle(props.todoDTO?.title)
        setEditing(false)
    };

    const handleUpdate = async () => {
        const updateTodo = async () : Promise<any> => {
            const statusCode = await Put<any>(
              '/todo/' + props.todoDTO?.id ,
              {
                title : title,
                content: content
              }
            );
            return statusCode;
          }
          updateTodo().then(statusCode => {
            if(statusCode === 200) {
              setEditing(false);
          } else {
              navigate("/");
          }
          }).catch(err => {
            navigate("/");
          });
    };

    return (
    <ModalBackground onClick={props.closeModal}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
            <Card className="mb-3">
                <Card.Body>
                {editing ? (
                    <>
                        <FormControl 
                            as="textarea" 
                            value={props.todoDTO?.id} 
                        />
                        <FormControl 
                            as="textarea" 
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <FormControl 
                            as="textarea" 
                            value={content}
                            onChange={e => setContent(e.target.value)}
                        />
                        <FormControl 
                            as="textarea" 
                            value={props.todoDTO?.createdAt} 
                        />
                        <FormControl 
                            as="textarea" 
                            value={props.todoDTO?.createdAt} 
                        />
                    </>
                ) : (
                    <>
                        <Card.Text><strong>id: </strong> {props.todoDTO?.id}</Card.Text>
                        <Card.Text><strong>제목: </strong> {title}</Card.Text>
                        <Card.Text><strong>내용: </strong> {content}</Card.Text>
                        <Card.Text><strong>작성 날짜: </strong> {props.todoDTO?.createdAt}</Card.Text>
                        <Card.Text><strong>수정 날짜: </strong> {props.todoDTO?.updatedAt}</Card.Text>
                    </>
                )}
                </Card.Body>
            </Card>
            <Row>
                {editing ? (
                    <>
                        <Col> <Button variant="success" className="w-100 mb-2" onClick={handleUpdate}>확인</Button> </Col> 
                        <Col> <Button variant="danger" className="w-100 mb-2" onClick={handleCancel}>취소</Button> </Col>
                    </>
                ) : (
                    <>
                        <Col> <Button variant="success" className="w-100 mb-2" onClick={e => {navigate("/")}}>추가</Button> </Col> 
                        <Col> <Button variant="warning" className="w-100 mb-2" onClick={e => setEditing(true)}>수정</Button> </Col> 
                        <Col> <Button variant="danger" className="w-100 mb-2" onClick={props.closeModal}>취소</Button> </Col>
                    </>
                )}
            </Row>
        </ModalContainer>
    </ModalBackground>
  );
};