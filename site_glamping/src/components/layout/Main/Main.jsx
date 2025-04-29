import "./Main.css";
import services from "./services";
console.log(services);
export function SayHello() {
  return <div>Hello!!</div>;
}
export function Person({ info, green}) {
  return (
    <div classNmae="person">
      <div className="person__container">
        <div className="person__name">{info.name}.Человек  состоит в зеленой оргаизации?{green}</div>
        {/* <div className="person__age">{info.age}</div> */}
        {/* <div className="person__gender">{info.gender}</div> */}
      </div>
      {/* <div className="person__single">{info.single}</div> */}
    </div>
  );
}
function Main(props) {
  console.log(props);
  return (
    <></>
    )
  
}
export default Main;

