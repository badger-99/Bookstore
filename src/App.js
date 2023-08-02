import { Route, Routes } from 'react-router-dom';
import './App.css';
import './fonts/fonts.css';
import Books from './components/Books';
import Categories from './components/Categories';
import Navigation from './components/Navigation';

function App() {
  return (
    <main id="main">
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </main>
  );
}

export default App;
