import "./App.css";
import StyledButton, { FancyButton } from "./Components/Button/Button";
function App() {
  return (
    <div className="App">
      <StyledButton>hello world</StyledButton>
      <StyledButton varient="outline">hello world</StyledButton>
      <FancyButton as="a">fancy button</FancyButton>
    </div>
  );
}

export default App;
