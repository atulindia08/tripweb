import logo from './logo.svg';
import './App.css';
import Container from './components/container';
import Loader from './components/Loader';
import Login from './components/login/login';
import {useSelector} from 'react-redux'
import Test1 from './components/tests/setInterval';


function App() {
  const appData = useSelector(state=>state)
  const showLogin = useSelector((state)=>state.userData.showLogin);
  console.log("app data", appData)
  return (
    <div className="App">
       {/* <Test1 /> */}
      <Container />
      {/* <Loader /> */}
    {showLogin ? 
      <Login /> : ''}
    </div>
  );
}

export default App;
