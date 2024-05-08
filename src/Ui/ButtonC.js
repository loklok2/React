export default function ButtonC({caption, bcolor, handleClick}) {
    const colorB = {
        'red' : 'bg-red-300',
        'orange' : 'bg-orange-600'
    }
    const colorBHover= {
        'red' : 'hover:bg-red-100',
        'orange' : 'hover:bg-orange-500'
    }
  return (
    <button className={`inline-flex px-10 py-3
                        rounded-md
                        justify-center items-center
                        text-black font-bold
                        ${colorB[bcolor]}
                        ${colorBHover[bcolor]}
                        `}
                        onClick={handleClick}>
            
      {caption}
    </button>
  )
}
