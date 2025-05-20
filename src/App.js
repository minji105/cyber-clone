import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />

        <main>
          <Routes>
          </Routes>
        </main>

      </Router>
    </>
  );
}

export default App;
