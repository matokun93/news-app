import './App.css';
import NavBar from './Components/Navbar/Navbar'
import Tabs from './Components/Tabs/Tabs';
import DropdownMenu from './Components/DropdownMenu/DropdownMenu';
import Layout from './Components/Layout/Layout'

const App = () => {
  return (
    <>
      <NavBar />
      <Tabs />
      <DropdownMenu />
      <Layout />
    </>
  )
}

export default App;
