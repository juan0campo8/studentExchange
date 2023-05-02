import React, { useState } from 'react';
import Axios from 'axios';

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const fileSelectedHandler = event => {
    setSelectedFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const fileUploadHandler = () => {
    const formData = new FormData();
    formData.append('image', selectedFile, selectedFile.name);

    const url = "http://localhost:8080/fileUpload";

    Axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  };

  return (
    <div>
      <input type="file" onChange={fileSelectedHandler} />
        <p>{fileName}</p>
      <button onClick={fileUploadHandler}>Upload</button>
    </div>
  );
};

export default UploadImage;
