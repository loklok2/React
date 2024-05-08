import { useState, useEffect } from "react" ;


export default function MyListItem({title, imgUrl, content}) {
  const [cnt , setCnt] = useState(0);
  const handleClick = () => {
    setCnt(cnt + 1); //비동기 방식
    console.log(title, 'cnt = ', cnt)  //그래서 console이 먼저 찍힘
  }
  //useEffect는 콜백함수가 기본
  //컴포넌트 생성 시 최초 한번만 실행
  //useEffect(()=>{}); 
  useEffect(()=>{
    console.log(title, '생성')
  }, []);//Dependency array


  //state 변수가 변경 됬을 때
  useEffect(()=>{
    console.log(title,  '변경 cnt =', cnt)
  }, [cnt])

  //컴포넌트가 변경되면 항상 실행
  useEffect(()=>{
    console.log(title, '')
  })
  return (
    <div className="flex w-full h-full justify-center items-start p-2 bg-red-300">
        <div className="flex w-1/3 m-5">
            <img src={imgUrl} alt={title}/>
        </div>
        <div className=" flex flex-col justify-between h-full w-2/3 m-2 p-2">
            <div>
            <h1 className="text-xl font-bold">{title}</h1>
            </div>
            <div>
            {content}
            </div>
            <div className="flex justify-end items-center">
                <span onClick={handleClick}>❤</span>
                <span className="inline-flex mx-2">좋아요</span>
                <span className="text-xl font-bold">{cnt}</span>
            </div>
        </div>    
    </div>
  )
}