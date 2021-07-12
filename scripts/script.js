function procesarTodo() {
	let texto = document.getElementById("comment").value

	texto = texto.trim()

	if (texto.length === 0) {
		alert("Ingrese texto para calcular")
		return
	}

	let list = texto.split(',')
	list = list.sort(() => Math.random() - 0.5)
  
 console.log(texto)
 console.log(list)

	const numeroPalabras = list.length;
	document.getElementById(`cantidad-palabras`).textContent = numeroPalabras


	document.getElementById(`comment-result`).textContent = list
}