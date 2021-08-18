import './App.css';
import Header from './components/day01-challenge/Header'
import AboutMe from './components/day01-challenge/AboutMe'
import StudentInformation from './components/day01-challenge/StudentInformation';
import Footer from './components/day01-challenge/Footer';
import ParentComponent from './components/day02-challenge/Votes/ParentComponent';
import PresidentChild from './components/day02-challenge/Presidents/PresidentChild';
import PresidentParent from './components/day02-challenge/Presidents/PresidentParent';
import ClickCounter from './components/day02-challenge/ClickCounter/ClickCounter';

function App() {

  const welcomeName = "Rodney"

  const phrase = "I wasn't alive then"

  return (
    <div className="App">
      <h1>Welcome to React, {welcomeName}</h1>
      {/* <ParentComponent phrase={phrase}/>
      <PresidentParent/> */}
      <ClickCounter/>
    </div>
  );
}

export default App;
