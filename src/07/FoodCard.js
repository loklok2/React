
import { useState } from 'react'
import bank from './img/bank.png'
import busan from './img/busan.png'
import market from './img/market.png'

export default function FoodCard({ data }) {
  const [isShow, setIsShow] = useState(false)
  const handleShow = () => {
    setIsShow(!isShow)
  }
  

  return (
    <div className='flex w-full h-full justify-center items-start '>
      <div className='w-40 h-80'>
        <img src={data["구분"] === "광역지원센터" ? busan :
          data["구분"] === "기초푸드뱅크" ? bank : market} />
      </div>
      <div className='flex flex-col justify-start items-start mx-5'>
        <div className='my-5'>
          <h1 className=' text-xl text-gray-700 font-bold'>{data["사업장명"]}</h1>
          <h2 className=' text-lg text-gray-500 font-bold'>{data["운영주체명"]}</h2>
          <p className=' text-sm text-gray-400 font-bold'>{data["사업장 소재지"]}</p>
        </div>
        <div className='w-full p-2 h-10 bg-red-400' onClick={handleShow}>
          {isShow && <p className='text-black font-bold'>
            Tel. {data["연락처(대표번호)"]}
          </p>}
        </div>
      </div>
    </div>  
  )
}
