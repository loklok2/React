// import logo from './logo.svg'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css';
import Hello from "./01/Hello";
import MyClock from './02/MyClock';
import { FaHome } from "react-icons/fa";
import MyDiv from './03/MyDiv';
import MyList from './04/MyList';
import Lotto from './05/Lotto';
import BoxOffice from './06/BoxOffice';
import Foodmain from './07/FoodMain';
import Traffic from './08_1/Traffic';
import MyRef from './09/MyRef';
import Gallary from './10/Gallary';
import Festival from './11/Festival';
import Frcst from "./13/Frcst";
import FrcstList from "./13/FrcstList";

// import RouteMain from './12/RouteMain';


function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overscroll-y-auto">
      <BrowserRouter>
      <header className="flex justify-between items-center text-xl font-bold h-20 p-10 bg-red-500">
        <div>리액트 실습</div>
        <ul className="w-80% grid grid-cols-10 text-sm">
          <li className="mx-2 p-2 hover:bg-red-100"><Link to='/'>Hello</Link></li>
          <li className="mx-2 p-2"><Link to='/p1'>MyClock</Link></li>
          <li className="mx-2 p-2"><Link to='/p2'>MyDiv</Link></li>
          <li className="mx-2 p-2"><Link to='/p3'>MyList</Link></li>
          <li className="mx-2 p-2"><Link to='/p4'>Lotto</Link></li>
          <li className="mx-2 p-2"><Link to='/p5'>BoxOffice</Link></li>
          <li className="mx-2 p-2"><Link to='/p6'>FoodMain</Link></li>
          <li className="mx-2 p-2"><Link to='/p7'>Traffic</Link></li>
          <li className="mx-2 p-2"><Link to='/p8'>MyRef</Link></li>
          <li className="mx-2 p-2"><Link to='/p9'>Gallary</Link></li>
          <li className="mx-2 p-2"><Link to='/p10'>Festival</Link></li>
          <li className="mx-2 p-2"><Link to='/p11'>Frcst</Link></li>
        </ul>
        <p><FaHome className="text-3xl text-zinc-200"/></p>
      </header>
      <main className='grow flex justify-center items-center'>
      
      <Routes>
        {/* <Hello/> */}
        <Route path="/" element={<Hello/>}/>
        {/* <MyClock/> */}
        <Route path="/p1" element={<MyClock/>}/>
        {/* <MyDiv/> */}
        <Route path="/p2" element={<MyDiv/>}/>
        {/* <MyList/> */}
        <Route path="/p3" element={<MyList/>}/>
        {/* <Lotto /> */}
        <Route path="/p4" element={<Lotto/>}/>
        {/* <BoxOffice/> */}
        <Route path="/p5" element={<BoxOffice/>}/>
        {/* <Foodmain /> */}
        <Route path="/p6" element={<Foodmain/>}/>
        {/* <Traffic/> */}
        <Route path="/p7" element={<Traffic/>}/>
        {/* <MyRef /> */}
        <Route path="/p8" element={<MyRef/>}/>
        {/* <Gallary/> */}
        <Route path="/p9" element={<Gallary/>}/>
        {/* <Festival/> */}
        <Route path="/p10" element={<Festival/>}/>
        {/* <RouteMain/> */}
        <Route path="/p11" element={<Frcst/>}/>
        {/* <Frcst/> */}
        <Route path="/p12" element={<FrcstList/>}/>
        {/* <Frcst/> */}
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