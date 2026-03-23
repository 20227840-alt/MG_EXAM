
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home';
import About from './pages/About';
import BookRequest from './pages/BookRequest';
import Contact from './pages/Contact';
import EventFeedback from './pages/EventFeedback';
import Services from './pages/Services';
import Header from './Header';
import HeaderMobile from './HeaderMobile';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    
   <>
      
      <BrowserRouter>
      <Header/>
      <HeaderMobile/>
        <div className='contentBody'>
          <Routes>
            <Route path="/MG_EXAM/" element={<Home/>}/>
            <Route path="/MG_EXAM/pages/About" element={<About/>}/>
            <Route path="/MG_EXAM/pages/Services" element={<Services/>}/>
            <Route path="/MG_EXAM/pages/Contact" element={<Contact/>}/>
            <Route path="/MG_EXAM/pages/BookRequest" element={<BookRequest/>}/>
            <Route path="/MG_EXAM/pages/EventFeedback" element={<EventFeedback/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      
   </>
  );
};

export default App;
