import "./App.css";
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <div>
        <FunctionalComponent name="Sujon Ahmed" />
        <ClassComponent designation="Web Application Developer 😍" />
      </div>
    </div>
  );
}

export default App;
