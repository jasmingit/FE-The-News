import './App.css';
import Home from './components/Routes/Home'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopicsList from './components/Routes/TopicsList'
import NavBar from './components/NavBar';
import ArticleByTopic from './components/Routes/ArticleByTopic';
import ArticleById from './components/Routes/ArticleById';


function App() {
  return (
    <BrowserRouter>
      <div className="parent">
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/topics' element={<TopicsList />}/>
          <Route path='/topics/:topic' element={<ArticleByTopic />}/>
          <Route path='/articles/:article_id' element={<ArticleById />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
