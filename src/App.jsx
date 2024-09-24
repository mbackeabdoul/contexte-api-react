import logo from './logo.svg';
import './App.css';
import TodoProvider from './providers/TodoProviders';
import TodoList from './composant/todo-List';
import TodoForm from './composant/TodoForm';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <main className="App-main">
        <TodoProvider>
          <TodoForm />
          <TodoList />
        </TodoProvider>
      </main>
    </div>
  );
}

export default App;
