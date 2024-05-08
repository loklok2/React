export default function Ball({n}) {
    const colorN = {
        'b0' : 'bg-red-500',
        'b1' : 'bg-blue-500',
        'b2' : 'bg-lime-400',
        'b3' : 'bg-green-400',
        'b4' : 'bg-gray-400',
        'b5' : 'bg-slate-500',
        'b6' : 'bg-sky-400',
    }

  return (
    <div className={`inline-flex w-16 h-16 m-2
                    justify-center items-center 
                    rounded-full
                    text-2xl
                    ${colorN["b" + Math.floor(n /10)]}
                   text-black`}>
        {n}
    </div>
  )
}
