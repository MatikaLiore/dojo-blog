import About from './components/About';
import Create from './components/Create';
import Home from './components/Home';
import Login from './components/Login';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { store } from './Redux/Store/Store';
import store from './Pure-Redux/Store/store'

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/blog/:id' element={<Blog/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
