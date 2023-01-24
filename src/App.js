import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LogIn from './Pages/LogIn/login'
import SıngUp from './Pages/LogIn/signup'
import './index.css'
import Shop from './Pages/Shop/shop';
import Cart from './Pages/Cart/cart'
import CheckOut from './Components/CheckOut';

function App() {
  return (
 <div className="App">
    <Router>
      <Header />
      <Routes>

        <Route path='/' element={<Shop />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SıngUp />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<CheckOut />} />
       
       
      </Routes>
      <Footer />
    </Router>

    </div>
  );
}

export default App;
