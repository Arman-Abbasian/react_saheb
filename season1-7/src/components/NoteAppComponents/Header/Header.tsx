import "./header.css";

interface IOptions{
  label:string;
  value:string
}

const options:readonly (IOptions)[]= [
  { value: 'latest', label: 'sort by latest' },
  { value: 'earliest',label: 'sort by earliest' },
  { value: 'completed', label: 'sort by completed' },
];
interface IProps{
  selectedOption:string;
  changeOption:(e:React.ChangeEvent<HTMLSelectElement>)=>void
}

function Header({changeOption,selectedOption}:IProps) {

  return (
    <div className="HeaderContainer">
      <p>Notes App</p>
      <select value={selectedOption} onChange={changeOption}>
        {options.map(item=><option value={item.value} key={item.value}>{item.label}</option>)}
        </select>
    </div>
  )
}

export default Header