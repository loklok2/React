import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeInfo from "./BoxOfficeInfo";
import { useState, useEffect, useRef } from "react";      
// state변수는 무조건 다시 그린다 부모는 probs를 통해서 
// 자식node들에게 값 전달이 되고, 속성값도 됨
// Effect는 함수고, call-back함수를 통해서 react가 제어한다  

export default function BoxOffice() {
  const [dailyList, setDailyList] = useState([]);
  const [selMv, setSelMv] = useState();
  const selDate = useRef();  //Ref변수
  
  const getFetchData = (url)=>{
    fetch(url)
          .then(resp => resp.json())
          .then(data => setDailyList(data.boxOfficeResult.dailyBoxOfficeList))
          .catch(err => console.log(err))
  }
  

  const handleSelect = (e)=>{  
    e.preventDefault()
    console.log(selDate.current.value)
    console.log(e.target.value) //Ref변수를 사용안할때

    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
    url = url + `key=${process.env.REACT_APP_MV_KEY}`
    url = url + `&targetDt=${selDate.current.value.replaceAll('-','')}`
    console.log(url)
    getFetchData(url)

  }

  // useEffect(() => {
  //   setDailyList(box.boxOfficeResult.dailyBoxOfficeList);
  // }, []);


  useEffect(() => {
    setSelMv(dailyList[0]);
  }, [dailyList])

  // const tags = dailyList.map(item => <li key={item.movieCd}>{item.rank} : {item.movieNm}</li>);
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col justify-start items-center mt-10">
        <form className="w-11/12">
        <div className="w-full flex mb-5 justify-end items-center">
          <label htmlFor="dateId" className="mx-5">날짜선택</label>
          <input type="date" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                         focus:ring-blue-500 focus:border-blue-500 ps-10 p-2.5"
                                         onChange={handleSelect}
                                         ref={selDate}/>
        </div>
        </form>
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
