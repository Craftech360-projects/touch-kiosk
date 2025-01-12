import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './components/StartPage.jsx';
import ButtonsPage from './components/ButtonsPage.jsx';
import ScreensPage from './components/ScreensPage.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/buttons" element={<ButtonsPage />} />
        <Route path="/screens/:id" element={<ScreensPage />} />
      </Routes>
    </Router>
  );
};

export default App;
