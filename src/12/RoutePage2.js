import { useSearchParams, useLocation } from "react-router-dom"

export default function RoutePage2() {
  const fruits = ['🍎', '🍌', '🍓']
  const loc = useLocation()
  console.log(loc.pathname, loc.search)

  const [sParams] = useSearchParams()
  console.log(sParams)
  // const item = sParams.get(item)

  let tm = []
  sParams.forEach(item=>fruits.includes(item)
                        ? tm.push(<li key={item}>{`${item} 과일`}</li>)
                        : tm.push(<li key={item}>{`${item} 과일아님`}</li>)
                                            )

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className=" w-full flex flex-col justify-center items-center font-bold text-4xl p-8">
        RoutePage2
      </h1>
      <div className="w-1/2 grid m-10 text-xl place-items-center">
        <ul>
        {tm}
        </ul>
      </div>
    </div>
  )
}
