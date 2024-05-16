// import { useState } from "react"
import ButtonC from "../Ui/ButtonC"

export default function TrafficNav({title, c, sel, setSel}) {
    // const title = '중분류' ;
    // const c = ['횡단중', '차도통행중','길가장자리구역통행중', '보도통행중', '기타'] 
    // const [sel, setSel] = useState() ;
    
    const handleClick = (item) => {
      // console.log(item)
      setSel(item) ;
    }
    const cTag = c.map((item) => <ButtonC 
                                    caption = {item}
                                    bcolor = {sel === item ? 'orange' : 'red'}
                                    key = {item}
                                    handleClick = {() => handleClick(item)}
                                  />)                            
    // 버튼이 눌러진 경우
    return (
      <div className="w-full flex justify-start items-start my-5">
        <div className="w-1/5 flex justify-start items-center">
          교통사고 {title}
        </div>
        <div className="w-4/5 grid grid-cols-1 
                        md:grid-cols-2 lg:grid-cols-4 gap-2">
          {cTag}
        </div>
      </div>
    )
  }