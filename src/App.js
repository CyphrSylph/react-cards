// 1) Create a component
function App(){
	const message = 'Enter an number';
	return(
        <div>
            <p>{message}</p>
            <input type="number" min={18} style={{color:'green'}} />
        </div>
	);
}
// 2) Export the compnent
export default App