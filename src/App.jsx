import Header from "./Components/Header";
import Card from "./Components/Cards";
import Counter from "./Components/Counter";

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
    </>
  );
}

export default App;
