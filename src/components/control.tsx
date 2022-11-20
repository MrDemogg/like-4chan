import React, {useState} from 'react';
import {fourChanAPI} from "../service/FourChanService";
import {Button, Form, Card} from "react-bootstrap";
import {FileUploader} from "react-drag-drop-files";

const fileTypes = ['JPG', 'PNG', 'JPEG', 'JFIF']

const Control = () => {
  const [post] = fourChanAPI.usePostRequestMutation()
  const [author, setAuthor] = useState('')
  const [message, setMessage] = useState('')
  const [file, setFile] = useState<File>()
  const handleChange = (newFile: File) => {
    setFile(newFile)
  }
  const postHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const formData = new FormData();
    if (author.length !== 0) {
      formData.append('author', author)
    }
    if (message.length !== 0) {
      formData.append('message', message)
    }
    if (file) {
      formData.append('image', file)
    }
    console.log(formData)
    post(formData)
  }
  return (
    <Card.Header style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
      <div style={{width: '40%'}}>
        <Form.Control
          value={author}
          placeholder={'Автор'}
          onChange={(e) => setAuthor(e.currentTarget.value)}
        />
        <Form.Control
          value={message}
          placeholder={'Сообщение'}
          style={{marginTop: 10}}
          onChange={(e) => setMessage(e.currentTarget.value)}
        />
      </div>
      <div style={{width: '40%'}}>
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        <Button
          style={{marginTop: 10, width: '100%'}}
          onClick={postHandler}
        >Post</Button>
      </div>
    </Card.Header>
  );
};

export default Control;