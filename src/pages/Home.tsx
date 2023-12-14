import LoginButton from "../components/Auth0/LoginButton";
import Title from "../components/Header/Title";

const Home = () => {
  return (
    <>
      <header>
        <Title />
      </header>
      <body>
        <LoginButton />
      </body>
    </>
  );
};

export default Home;
