
let counter=0;

 const addOne=()=>{
    counter++;
    render();
 }

 const deductOne=( )=>{
    counter--;
    render();
 }
const resetCounter=()=>{

    counter= 0;
    render();
}
 const render=()=>{
    const counterTemplate =(
    <div>
    <h1 id="counter" className="counter">{counter}</h1>
    <button onClick = {addOne}>+1</button>
    <button onClick = {deductOne}>-1</button>
    <button onClick = {resetCounter}>reset</button>
    </div>
);

const myApp = document.querySelector("#hook");

ReactDOM.render(counterTemplate, myApp);

 }
 render();
