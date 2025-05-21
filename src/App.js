import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </main>

        <Footer />
      </Router>
    </>
  );
}

export default App;
