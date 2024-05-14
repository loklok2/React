import { useState, useEffect } from "react"
//훅은 클래스형 컴포넌트를 대채하여 함수형 컴포넌트로 만든다 아주 매우 간편하다
//useState 는 구조분해 할당으로 값을 2개로 분리해서 받을 수 있다
//그리고 그에 따른 데이터를 변경할때는 set,get으로 변경해야한다
//useEffect는 함수를 따로 호출하지 않아도 실행이 가능하다
//그리고 ()안의 인수에 따라 달라진다 // 기본적으로 화면이 변경이되면 ()=>{} call-back 함수가 무조건 들어간다 = 즉, state 변수가 변경이 되면
//그리고 ()=>{},[] 맨처음 한번만 실행됨 디펜던시 어레이 // ()=>{},[변수]는 특정변수가 바뀔때 즉 들어가는 변수는 state 변수
import ButtonC from "../Ui/ButtonC"


export default function TrafficMain() {
  const [tdata, setTdata] = useState([])    //전체 fetch데이터
  const [c1, setC1] = useState([])          //대분류         
  const [c1Tag, setC1Tag] = useState([])    //대분류 선택
  const [c1Sel, setC1Sel] = useState([])    // 선택된 대분류 

  const [c2, setC2] = useState([])          // 중분류
  const [c2Tag, setC2Tag] = useState([])    // 중분류 선택
  const [c2Sel, setC2Sel] = useState([])    // 선택된 중분류 

  const [info, setInfo] = useState([])      //상세

  // fetch에서 데이터 가져오기
  const getFetchData = (url) => {
    fetch(url)
      .then(resp => resp.json())         //.than으로 가공되지 않은 data를 json 형태로 바꾸기 //.than은 순서대로 동작함 than 체이닝 // 비동기 방식
      .then(data => setTdata(data.data))  // 그다음.than
      .catch(err => console.log(err))
  }
  //
  const handleClSelect = (item) => {
    setC1Sel(item)
  }
  const handleC2Select = (item) => {
    setC2Sel(item)
  }

  // 컴포넌트 생성 시 최초 1번 실행
  useEffect(() => {
    let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?'
    url = `${url}page=1&perPage=17&returnType=json`
    url = `${url}&serviceKey=${process.env.REACT_APP_API_KEY}`
    console.log(url)
    getFetchData(url)
  }, [])

  //tdata가 변경이 되면 실행
  useEffect(() => {
    if (tdata.length === 0) return;
    console.log("tdata=", tdata);
    let tm = tdata.map(item => item['사고유형_대분류'])
    tm = [...new Set(tm)];  //배열로 만들기 []
    setC1(tm)
  }, [tdata])

  //c1이 대분류 생성후
  useEffect(() => {
    if (!c1) return
    console.log(c1)
    let tm = c1.map((item) => <ButtonC caption={item}
      key={item}
      bcolor='red'
      handleClick={() => handleClSelect(item)} />)
    setC1Tag(tm)
  }, [c1])

  //대분류선택 후 중분류 생성
  useEffect(() => {
    console.log(c1Sel)
    let tm = tdata.filter(item => item['사고유형_대분류'] === c1Sel)
      .map(item => item['사고유형_중분류'])
    setC2(tm)
  }, [c1Sel])

  //중분류 생성 후
  useEffect(() => {
    if (!c2) return
    console.log(c2)
    let tm = c2.map((item) => <ButtonC caption={item}
      key={item}
      bcolor='red'
      handleClick={() => handleC2Select(item)} />)
    setC2Tag(tm)
  }, [c2])

  //중분류 선택 후 상세
  useEffect(() => {
    console.log("대분류선택 :", c1Sel)
    console.log("중분류선택 :", c2Sel)

    let tm = tdata.filter(item => item['사고유형_대분류'] === c1Sel &&
                                  item['사고유형_중분류'] === c2Sel)
    tm = tm[0]
    console.log('상세:',tm)
    setInfo(tm['사고건수'])
  }, [c2Sel])

  return (
    <div className="w-10/12 h-full flex flex-col  justify-start items-start">
      <div className="w-full flex justify-between items-center my-10 ">
        <div className="w-1/4 justify-start items-center">교통사고 대분류</div>
        <div className="w-3/4 flex">
          {c1Tag}
        </div>
      </div>
      <div className="w-full flex justify-between items-center my-10 ">
        <div className="w-1/4 justify-start items-center">교통사고 중분류</div>
        <div className="w-3/4 flex">
          {c2Tag}
        </div>
      </div>
      <div className="w-full flex justify-between items-center my-10 ">
        사고건수 : {parseInt(info).toLocaleString()}
      </div>
    </div>
  )
}