import './App.css';

const tasksList = ['estudar', 'desenhar', 'ver série', 'jogar'];

const Task = (array) => {
  return (
    array.map((task) => <li>{task}</li>)
  );
}

function App() {
  return (
    <ul>
      {Task(tasksList)}
    </ul>
  );
}

export default App;
