import { FormEvent } from "react";
import "./App.css";

const App = () => {
  const handleSubmit = async (event: FormEvent) => {
    try {
      event.preventDefault();

      const target = event.target as HTMLFormElement;
      const data = new FormData(target);

      const active = target.shared.value === "on" ? "true" : "";
      data.set("shared", active);

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
        <input type="text" name="userText" placeholder="userText" />
        <input type="text" name="userGroup" placeholder="userGroup" />
        <input type="text" name="objectLink" placeholder="objectLink" />
        <input type="checkbox" name="shared" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default App;
