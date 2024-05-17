import box from "./BoxOffice.json"
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeInfo from "./BoxOfficeInfo";
import { useState, useEffect } from "react";      // state변수는 무조건 다시 그린다 부모는 probs를 통해서 
// 자식node들에게 값 전달이 되고, 속성값도 됨
// Effect는 함수고, call-back함수를 통해서 react가 제어한다  

export default function BoxOffice() {
  const [dailyList, setDailyList] = useState([]);
  const [selMv, setSelMv] = useState();

  useEffect(() => {
    setDailyList(box.boxOfficeResult.dailyBoxOfficeList);
  }, []);


  useEffect(() => {
    setSelMv(dailyList[0]);
  }, [dailyList])

  // const tags = dailyList.map(item => <li key={item.movieCd}>{item.rank} : {item.movieNm}</li>);
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col justify-start items-center mt-10">
        <table
          className="bg-slate-100 w-11/12 text-left text-sm font-light text-surface">
          <BoxOfficeThead />
          <BoxOfficeTbody dailyList={dailyList} setSelMv={setSelMv} />        
        </table>
        {selMv && <BoxOfficeInfo selMv={selMv}/>}
      </div>
    </div>
  )
}
