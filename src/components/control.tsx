import React, {useState} from 'react';
import {fourChanAPI} from "../service/FourChanService";
import {Button, Form} from "react-bootstrap";
import {FileUploader} from "react-drag-drop-files";

const fileTypes = ['JPG', 'PNG', 'JPEG']

const Control = () => {
  const [post] = fourChanAPI.usePostMessageMutation()
  const [author, setAuthor] = useState('')
  const [message, setMessage] = useState('')
  const [file, setFile] = useState<File>()
  const handleChange = (newFile: File) => {
    setFile(newFile)
  }
  const postHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('auhtor', author)
    formData.append('message', message)
    if (file) {
      formData.append('image', file)
    }
    console.log(formData)
    post(formData)
  }
  return (
    <div>
      <Form.Control
        value={author}
        onChange={(e) => setAuthor(e.currentTarget.value)}
      />
      <Form.Control
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      />
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
      <Button onClick={postHandler}>Post</Button>
    </div>
  );
};

export default Control;