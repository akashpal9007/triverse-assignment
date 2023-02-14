import './App.css';
import Banner from './Components/Banner/Banner';
import Discover from './Components/Discover/Discover';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import MorePage from './Components/MorePage/MorePage';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <MorePage />
      <Projects />
      <Discover />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
