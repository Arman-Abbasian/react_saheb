import "./button.css";

interface IProps{
    text:string;
    onClick?:()=>void
}

function Button({text,onClick}:IProps) {
  return (
    <div onClick={onClick} className="ButtonContainer">{text}</div>
  )
}
export default Button