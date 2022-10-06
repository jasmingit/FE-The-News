import './App.css';
import Home from './components/Routes/Home'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopicsList from './components/Routes/TopicsList'
import NavBar from './components/NavBar';
import ArticleByTopic from './components/Routes/ArticleByTopic';
import ArticleById from './components/Routes/ArticleById';
import Login from './components/Routes/Login';
import { UserContext } from './contexts/UserContext';
import {  useMemo, useState } from 'react';

function App() {

  const [user, setUser] = useState(null)
  const userProvider = useMemo(() => ({user, setUser}), [user, setUser])


  return (
    <BrowserRouter>
      <div className="parent">

      <UserContext.Provider value={userProvider}> 
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/topics' element={<TopicsList />}/>
          <Route path='/topics/:topic' element={<ArticleByTopic />}/>
          <Route path='/articles/:article_id' element={<ArticleById />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </UserContext.Provider>

      </div>
    </BrowserRouter>
  );
}

export default App;
