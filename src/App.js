// import logo from './logo.svg'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css';
import MyClock from './02/MyClock';
import { FaHome } from "react-icons/fa";
import MyDiv from './03/MyDiv';
import MyList from './04/MyList';
import Lotto from './05/Lotto';
import BoxOffice from './06/BoxOffice';
import Foodmain from './07/FoodMain';
import TrafficMain from './08/TrafficMain';
import TrafficNav from './08_1/TrafficNav';
import Traffic from './08_1/Traffic';
import MyRef from './09/MyRef';
import Gallary from './10/Gallary';
import Festival from './11/Festival';

// import RouteMain from './12/RouteMain';


function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overscroll-y-auto">
      <BrowserRouter>
      <header className="flex justify-between items-center text-xl font-bold h-20 p-10 bg-red-500">
        <p>리액트 실습</p>
        <ul className="w-80% grid grid-cols-10 text-xs">
          <li><Link to='/'>MyClock</Link></li>
          <li><Link to='/p1'>MyDiv</Link></li>
          <li><Link to='/p2'>MyList</Link></li>
          <li><Link to='/p3'>Lotto</Link></li>
          <li><Link to='/p4'>BoxOffice</Link></li>
          <li><Link to='/p5'>FoodMain</Link></li>
          <li><Link to='/p6'>Traffic</Link></li>
          <li><Link to='/p7'>MyRef</Link></li>
          <li><Link to='/p8'>Gallary</Link></li>
          <li><Link to='/p9'>Festival</Link></li>
        </ul>
        <p><FaHome className="text-3xl text-zinc-200"/></p>
      </header>
      <main className='grow flex justify-center items-center'>
      
      <Routes>
        {/* <MyClock/> */}
        <Route path="/" element={<MyClock/>}/>
        {/* <MyDiv/> */}
        <Route path="/p1" element={<MyDiv/>}/>
        {/* <MyList/> */}
        <Route path="/p2" element={<MyList/>}/>
        {/* <Lotto /> */}
        <Route path="/p3" element={<Lotto/>}/>
        {/* <BoxOffice/> */}
        <Route path="/p4" element={<BoxOffice/>}/>
        {/* <Foodmain /> */}
        <Route path="/p5" element={<Foodmain/>}/>
        {/* <Traffic/> */}
        <Route path="/p6" element={<Traffic/>}/>
        {/* <MyRef /> */}
        <Route path="/p7" element={<MyRef/>}/>
        {/* <Gallary/> */}
        <Route path="/p8" element={<Gallary/>}/>
        {/* <Festival/> */}
        <Route path="/p9" element={<Festival/>}/>
        {/* <RouteMain/> */}
      </Routes>
      </main>
      <footer className='flex justify-center items-center text-white bg-slate-800 h-20'>
        ⓒ 2024 loklok2. All rights reserved.
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;  //임포트 하면 무조건 익스포트 해야한다