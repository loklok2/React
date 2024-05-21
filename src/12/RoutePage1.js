import { useParams } from "react-router-dom"

export default function RoutePage1() {
  const item = useParams().item
  const fruits = ['🍎', '🍌']
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className=" w-full flex flex-col justify-center items-center font-bold text-4xl p-8">
        RoutePage1
      </h1>
      <div className="w-1/2 grid place-items-center m-10">
        {fruits.includes(item)? `${item}: 과일 입니다.`
                              : `${item}: 과일 아닙니다.`}
      </div>
    </div>
  )
}
