import Home from './PAGES/HOME/Home';
import Navbar from './COMPONENTS/HEADER/Navbar';
import Search from './COMPONENTS/SEARCH/Search';
import Calender from './COMPONENTS/CALENDER/Calender';
import './App.css'

function App() {


  return (
    <>
   
  <Navbar/>
<Home/>
<div className='calender-search-components'>
<Calender/>
<Search/>
</div>

    </>
  )
}

export default App
