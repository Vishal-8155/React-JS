import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
        <Header/>
        <Sidebar />
        <Content />
        <Footer />
    </div>
  );
}

export default App;