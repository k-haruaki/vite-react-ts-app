import { Routes, Route } from 'react-router-dom';
import { About, Contact, Home } from './routes/index';

const App = () => {
  return (
    <div className="App">
      <h1>Hello React Router v6</h1>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
