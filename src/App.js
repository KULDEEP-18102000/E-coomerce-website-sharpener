import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import BasicExample from './components/Navbar';
import NavbarComponent from './components/Navbar';
import HeadingLayout from './components/HeadingLayout';
import Products from './components/Products';

function App() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <HeadingLayout></HeadingLayout>
      <Products></Products>
    </div>
  );
}

export default App;
