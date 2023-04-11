import axios from "axios";
import { useState } from "react";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);

    try {
      const response = await axios.post("/api/listings", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setTitle("");
    setDescription("");
    setPrice("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <label>
        Image:
        <input
          type="file"
          accept="image/*"
          onChange={(event) => setImage(event.target.files[0])}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}