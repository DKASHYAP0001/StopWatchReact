import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import Stopwatch from './Components/pages/Tabs/Stopwatch';

function App() {

  const paths = useParams()

  function Topic() {
    let { topicId } = paths;
    console.log(paths)
    return <h3>Requested topic ID: {topicId}</h3>;
  }

  return (
    <div>
      <h1>My App</h1>
      <Stopwatch />
    </div>
  );
}

export default App;

