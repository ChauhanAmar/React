import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
  <>
  <Navbar title="TextUtils" aboutText="About TextUtils"/>
  <div className="container my-2">
  <TextForm heading="Enter the texts for below event....."/>
  </div>
  <About/>
  </>
  );
}

export default App;
