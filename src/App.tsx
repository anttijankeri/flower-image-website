import { FormEvent } from "react";
import "./App.css";

const App = () => {
  const handleSubmit = async (event: FormEvent) => {
    try {
      event.preventDefault();
      const data = new FormData(event.target as HTMLFormElement);
      const result = await fetch("http://localhost:3456/api/v1/images", {
        method: "POST",
        body: data,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>WORK IN PROGRESS</div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="file"
          name="image"
          accept="image/png, image/jpg, image/bmp, image/webp"
        />
        <input type="text" name="test" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default App;
