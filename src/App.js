import "./App.css";
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import ArrowFunction from "./components/ArrowFunction";

function App() {
  return (
    <div className="App">
      <div>
        <FunctionalComponent name="Sujon Ahmed" />
        <ClassComponent designation="Web Application Developer 😍" />
        <ArrowFunction/>
      </div>
    </div>
  );
}

export default App;
