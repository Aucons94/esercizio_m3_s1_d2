import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import NewWelcome from "./components/NewWelcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <Container>
        <MyNav />
        <NewWelcome />
      </Container>
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
