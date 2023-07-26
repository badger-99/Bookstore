import { Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './Books';
import Categories from './components/Categories';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Routes>
        <Navigation />
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
