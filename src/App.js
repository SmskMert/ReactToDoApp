import ToDoContainer from "./components/ToDoContainer/ToDoContainer";

const INITIAL_STATE = [
  { id: 1, title: 'Go for shopping', completed: false },
  { id: 2, title: 'Finish your book', completed: false },
  { id: 3, title: 'Watch new episode of GOT', completed: true }
]

function App() {
  return (
      <div className="App">
        <ToDoContainer tasks={INITIAL_STATE}/>
      </div>
  );
}
export default App;
