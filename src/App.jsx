import Header from "./Components/Header";
import Card from "./Components/Cards";
import Counter from "./Components/Counter";
import ColorPicker from "./Components/ColorPicker";

function App() {
  return (
    <>
      <Header ProjectName="Project 1 : Cards" />
      <Card />
      <Card />
      <Card />
      <Card />

      <Header ProjectName="Project 2 : Counter" />
      <Counter />

      <Header ProjectName="Project 3 : Color Picker" />
      <ColorPicker />

      <Header ProjectName="Project 4 : Stopwatch" />
    </>
  );
}

export default App;
