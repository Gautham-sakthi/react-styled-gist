import "./App.css";
import StyledButton from "./Components/Button/Button";
function App() {
  return (
    <div className="App">
      <StyledButton>hello world</StyledButton>
      <StyledButton varient="outline">hello world</StyledButton>
    </div>
  );
}

export default App;
