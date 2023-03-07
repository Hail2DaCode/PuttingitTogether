import './App.css';
import Person from './components/Person'


function App() {
  return (
    <div className="App">
      <Person 
      firstName = "Brian" 
      lastName="Iovino" 
      age={33} 
      hairColor = "dirty-blonde"/>
      <Person 
      firstName = "Tyrion" 
      lastName="Lannister" 
      age={29} 
      hairColor = "pale-blonde"/>
      <Person 
      firstName = "Bran" 
      lastName="Stark" 
      age={9} 
      hairColor = "auburn"/>
      <Person 
      firstName = "Brienne" 
      lastName="Tarth" 
      age={25} 
      hairColor = "straw-blonde"/>
      <Person 
      firstName = "Sansa" 
      lastName="Stark" 
      age={16} 
      hairColor = "strawberry-blonde"/>
      <Person 
      firstName = "Stannis" 
      lastName="Baratheon" 
      age={43} 
      hairColor = "none"/>
      <Person 
      firstName = "Danaerys" 
      lastName="Targaryen" 
      age={17} 
      hairColor = "silver"/>
    </div>
  );
}

export default App;
