import './App.css';
import Header from './components/day01-challenge/Header'
import AboutMe from './components/day01-challenge/AboutMe'
import StudentInformation from './components/day01-challenge/StudentInformation';
import Footer from './components/day01-challenge/Footer';

function App() {

  const welcomeName = "Rodney"

  return (
    <div className="App">
      <h1>Welcome to React, {welcomeName}</h1>
      <h2>We just modified our root App component</h2>
      {/* <p>This is a test!</p> */}
      <Header/>
      <h3>Create the following...</h3>
      <ul>
        <li>Create a new component in the day01-challenges folder called About Me</li>
        <li>h1 tag with your name</li>
        <li>p tag with the following: I grew up in city/state</li>
        <li>have an unordered list with 3 places you have visited</li>
      </ul>
      <p>Export the component, and import the new component into the app.jsx file.</p>
      <hr />
      <h1>Bonus</h1>
      <p>Make the h1 tag (your name) be read in color using inline styling</p>
      <p>Make the li's no bullets - inline styling</p>
      <AboutMe/>
      <StudentInformation studentName="Pam" grade= "A" subject="Math"/>
      <StudentInformation studentName = "Tom" grade="B" subject ="History"/>
      <StudentInformation studentName ="Frank" grade ="F" subject="Gym"/>
      <Footer/>
    </div>
  );
}

export default App;
