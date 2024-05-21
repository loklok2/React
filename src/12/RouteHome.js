import { Link } from "react-router-dom"

export default function RouteHome() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className=" w-full flex flex-col justify-center items-center font-bold text-4xl p-8">
        RouteHome
      </h1>
      <div className=" w-1/2 grid grid-cols-2 my-3">
        <div className=" w-full p-2 m-2 flex flex-col justify-center items-center">
          <h2 className="w-full flex flex-col justify-center items-center text-xl m-2 p-2 bg-red-300">
            Page1
          </h2>
          <ul>
            <li><Link to='/p1/🍎'>사과🍎</Link></li>
            <li><Link to='/p1/🍌'>바나나🍌</Link></li>
            <li><Link to='/p1/🥕'>당근🥕</Link></li>
          </ul>
        </div>

        <div className=" w-full p-2 m-2 flex flex-col justify-center items-center">
          <h2 className="w-full flex flex-col justify-center items-center text-xl m-2 p-2 bg-red-300">
            Page2
          </h2>
          <ul>
            {/* <li><Link to='/p2?item=🍎/'>사과🍎</Link></li>
            <li><Link to='/p2?itme=🍌/'>바나나🍌</Link></li>
            <li><Link to='/p2?item=🥕/'>당근🥕</Link></li> */}
            <li><Link to='/p2?item1=🍎&itme2=🍌&item=🥕/'>사과🍎,바나나🍌,당근🥕</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
