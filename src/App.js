import './App.css';
import NavBar from './Components/Navbar/Navbar'
import Tabs from './Components/Tabs/Tabs';
import Layouts from './Components/Layouts/Layouts'

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Tabs />
      <Layouts />
    </div>
  )
}

export default App;
