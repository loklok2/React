import ButtonC from "../Ui/ButtonC"
import { useState, useEffect, useRef } from "react"

export default function MyRef() {
  let cVal = 0
  const[sVal, setSVal] = useState(0)
  const rVal = useRef(0)                //Ref는 current가 필수다. 주로 폼태그를 가져올때 사용한다

  const x1 = useRef()
  const x2 = useRef()
  const x3 = useRef()


  const handleClickComp= ()=>{
    cVal++
    console.log("cVal=", cVal)
  }
  const handleClickState= ()=>{
     setSVal(sVal+1) 
  }
  const handleClickRef= ()=>{
    rVal.current = rVal.current + 1
    console.log("rVal=", rVal)
  }
  const handleClick= ()=>{
    if(x1.current.value){
      alert("값을 입력하세요")
      x1.current.focus()
      return
    }
    if(x2.current.value){
      alert("값을 입력하세요")
      x2.current.focus()
      return
    }
    x3.current.value = parseInt(x1.current.value)+parseInt(x2.current.value)

  }
  //변수 변경시
  useEffect(()=>{
    console.log("sVal=", sVal)
  },[sVal])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-20 p-5 m-5 font-bold text-xl">
        <span className="text-red-300">컴포넌트변수:{cVal}</span>
        <span className="text-blue-300">state변수:{sVal}</span>
        <span className="text-gray-300">ref변수:{rVal.current}</span>
      </div>
      <div>
        <span><ButtonC  caption="컴포넌트변수"
                        bcolor="red"
                        handleClick={handleClickComp}/>
        </span>
        <span><ButtonC  caption= "state변수"
                        bcolor="red"
                        handleClick={handleClickState}/>
        </span>
        <span><ButtonC  caption= "ref변수"
                        bcolor="red"
                        handleClick={handleClickRef}/>
        </span>
      </div>
      <div className="grid bg-slate-200 grid-col-5 gap-2 m-10 p-10">
        <input type="number" id="text1"
        ref={x1}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
        <span className=" inline-flex justify-center items-center">+</span>
        <input type="number" id="text2"
        ref={x2} 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
        <ButtonC  caption="="
                  bcolor="orange"
                  handleClick={handleClick}/>
        <input type="number" id="text3" 
        ref={x3}
        readOnly/>
      </div>
    </div>
  )
}
