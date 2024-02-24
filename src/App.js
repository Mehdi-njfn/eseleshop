import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Nav from './component/nav';
import Bottom from './component/bottom';
import Products from './pages/products';
import Cart from './pages/cart';
import Account from './pages/account';
import Footer from './component/footer';

function App() {
  return (
  <>
    <div className="App">
      <Router>        
        <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/account' element={<Account />} />
          </Routes>
        <Bottom />
        <Footer />
      </Router>
    </div>
  </>
  );
}

export default App;
