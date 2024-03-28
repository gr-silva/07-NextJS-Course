import ThemeProvider from "../src/theme/ThemeProvider";
import Button from "../src/components/Buttons/Button";

const HomeScreen = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Home Page!</h1>
        <Button>Botão simplão</Button>
      </div>
    </ThemeProvider>
  );
};

export default HomeScreen;
