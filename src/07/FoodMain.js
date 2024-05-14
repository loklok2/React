import fooddata from './fooddata.json'
import ButtonC from '../Ui/ButtonC';
import FoodCard from './FoodCard';
import { useState } from 'react';

export default function FootData() {
  const [c1List, setC1List] = useState([]);

  console.log(fooddata)
  let c1 = fooddata.map(item => item['운영주체 분류']);
  c1 = new Set(c1); //set 데이터 타입은 중복제거
  c1 = [...c1]      // set을 그대로 두고 map을 쓸수는 없으니 배열형태로 표현함
  console.log(c1)
  //c는 운영주체 분류값 이며 버튼이 클릭되면 실행됨
  const handleClick = (c) => {
    console.log('c')
    let tm = fooddata.filter(item => item['운영주체 분류'] === c)     //필터를 걸어서 c 와 동일한 값인지 확인 
      .map(item => <FoodCard data={item} key={item['사업장명']} />)//버튼이 누를때마다 c1List가 바뀌고 새로 그려진다
    setC1List(tm)
  }
  const c1bt = c1.map(item => <ButtonC caption={item}
    bcolor={'red'}
    handleClick={() => handleClick(item)} />
  )

  // let c1List = fooddata.map(item => <FoodCard data={item} />);

  return (
    <div className='flex flex-col w-full h-full justify-start items-center'>
      <div className="w-full grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
        {c1bt}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {c1List}
      </div>
    </div>
  )
}
