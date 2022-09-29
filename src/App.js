import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import BookShelf from './Components/BookShelf/BookShelf';

function App() {
  return (
    <div className="App bg-slate-100">
      <Header></Header>
      <BookShelf></BookShelf>
    </div>
  );
}

export default App;
