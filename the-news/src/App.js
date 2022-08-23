import './App.css';
import ArticleList from './components/ArticlesList';
import Header from "./components/Header"

function App() {
  return (
    <div className="parent">
      <Header />
      <ArticleList />
    </div>
  );
}

export default App;
