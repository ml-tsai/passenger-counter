let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

//console.log(saveEl)

function increment() {
	count += 1
	countEl.textContent = count
}

function save() {
	let countStr = count + " - "
	saveEl.textContent += countStr
	countEl.textContent = 0
	count = 0

	//console.log(count)
}





/*let welcomeEl = document.getElementById("welcome-el")

let name = "ML"
let greeting = "Welcome "

welcomeEl.innerText = greeting + name

welcomeEl.innerText += "👋"*/
