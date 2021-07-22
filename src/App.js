
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Sections from './components/Sections';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import PopularItems from './components/PopularItems';

function App() {
  return (
    <>
      <Header />
      <Sections />
      <Carousel />
      <PopularItems />
      <Footer />
    </>
  );
}

export default App;