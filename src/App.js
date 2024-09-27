import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <h1>Имитация асинхронной загрузки и отображения списка задач из локального хранилища.</h1>
      <h1>Список задач</h1>
      <TaskList />
    </div>
  );
}

export default App;
