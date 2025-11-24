//your JS code here. If required.
const board = document.querySelector("#board");
const squares=800;
for(let i=0;i<squares;i++){
	const square=document.createElement("div");
	square.classList.add("square");


	square.addEventListener("mouseover",()=>{
		const color="red";
		square.style.background=color;

		setTimeout(()=>{
			square.style.background="black";
		},1000)
	})
	board.appendChild(square)
}