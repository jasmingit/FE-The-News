import './App.css';
import Home from './components/Routes/Home'
import Header from './components/Header'
import TopicCooking from './components/Routes/TopicCooking';
import TopicCoding from './components/Routes/TopicCoding';
import TopicFootball from './components/Routes/TopicFootball';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopicsList from './components/TopicsList'
import NavBar from './components/NavBar';


function App() {
  return (
    <BrowserRouter>
      <div className="parent">
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/topics' element={<TopicsList />}/>
          <Route path='/topics/cooking' element={<TopicCooking />}/>
          <Route path='/topics/coding' element={<TopicCoding />}/>
          <Route path='/topics/football' element={<TopicFootball />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
