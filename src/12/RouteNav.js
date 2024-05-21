import { useNavigate } from "react-router-dom"
import ButtonC from "../Ui/ButtonC"

export default function RouteNav() {
    const navigate = useNavigate()
  return (
    <div className="w-full grid grid-cols-3 m-5">
        <ButtonC caption="home"
                 bcolor="red"
                 handleClick={()=>{navigate('/')}}/>
        <ButtonC caption="Page1"
                 bcolor="red"
                 handleClick={()=>{navigate('/p1/1')}}/>
        <ButtonC caption="Page2"
                 bcolor="red"
                 handleClick={()=>{navigate('/p2')}}/>
    </div>
  )
}
