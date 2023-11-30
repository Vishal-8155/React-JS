import "./App.css";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer";
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <Header /> 
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
