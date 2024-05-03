import logo from './logo.svg'
import './App.css';
// import MyClock from './02/MyClock';
import MyDiv from './03/MyDiv';
import { FaHome } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overscroll-y-auto">
      <header className="flex justify-between items-center text-xl font-bold h-20 p-10 bg-red-500">
        <p>header</p>
        <p>K-digital</p>
        <p><FaHome className="text-3xl text-zinc-200"/></p>
      </header>
      <main className='grow'>
        <div className='flex justify-center items-center'></div>
      </main>
      <footer className='flex justify-center items-center text-white bg-slate-800 h-20'>
        ⓒ 2024 loklok2. All rights reserved.
      </footer>
    </div>
  );
}

export default App;  //임포트 하면 무조건 익스포트 해야한다
