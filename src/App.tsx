import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Input } from './components/Input';
// import { Greet } from './components/Greet';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';

function App() {
  // const personName = {
  //   first: 'Zander',
  //   last: 'Wayne'
  // }

  // const nameList = [
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne'
  //   },
  //   {
  //     first: 'Clark',
  //     last: 'Kent'
  //   },
  //   {
  //     first: 'Princess',
  //     last: 'Diana'
  //   }
  // ]

  return (
    <div className="App">
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id)
        }}
       />
       <Input value='' handleChange={(event) => console.log(event)} />
       <Container styles={{ border: '1px solid black', padding: '1rem' }} />
    </div>
  );
}

export default App;
