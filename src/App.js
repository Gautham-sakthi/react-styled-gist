import { ThemeProvider } from "styled-components";
import StyledButton, {
  FancyButton,
  SubmitButton,
  Darkbutton,
} from "./Components/Button/Button";
import "./App.css";
const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <StyledButton>hello world</StyledButton>
        <StyledButton varient="outline">hello world</StyledButton>
        <FancyButton as="a">fancy button</FancyButton>
        <SubmitButton>Submit Button</SubmitButton>
        <Darkbutton>Dark Theme button</Darkbutton>
      </div>
    </ThemeProvider>
  );
}

export default App;
