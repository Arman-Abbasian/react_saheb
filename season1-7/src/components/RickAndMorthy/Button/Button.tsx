import "./button.css";

interface IProps{
    text:string
}

function Button({text}:IProps) {
  return (
    <div className="ButtonContainer">{text}</div>
  )
}
export default Button