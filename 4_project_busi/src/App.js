
import Navbar from './pages/Navbar';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import Team from './pages/Screen4'
import Testimonials from './pages/Screen5';
import Contact from './pages/Screen6';
import Features from './pages/Screen7';
import Loading from './pages/Screen8';
import Footer from './pages/Screen9';
import Helper from './components/Helper';
function App() {
  return (
    <>
      <Navbar />
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Team />
      <Testimonials />
      <Contact />
      <Features />
      <Loading />
      <Footer />
      <Helper />
    </>
  );
}

export default App;
