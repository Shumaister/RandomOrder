function procesarTodo() {
	let texto = document.getElementById("comment").value

	texto = texto.trim()

	if (texto.length === 0) {
		alert("Ingrese texto para calcular")
		return
	}

	let lista = texto.split(',')
	lista = lista.sort(() => Math.random() - 0.5)

	const cantidadEquipos = document.getElementById(`team`).value

	if (cantidadEquipos == 1) {
		const numeroPalabras = lista.length;
		document.getElementById(`cantidad-palabras`).textContent = numeroPalabras
		document.getElementById(`comment-result`).textContent = lista
		return
	}

	const mitad = Math.floor(lista.length / 2)
	const equipo1 = lista.slice(0, mitad)
	const equipo2 = lista.slice(mitad, lista.length)

	const numeroPalabras1 = equipo1.length;
	const numeroPalabra2 = equipo2.length;

	document.getElementById(`cantidad-palabras`).textContent = numeroPalabras1
	document.getElementById(`comment-result`).textContent = equipo1

	document.getElementById(`cantidad-palabras-2`).textContent = numeroPalabra2
	document.getElementById(`comment-result-2`).textContent = equipo2
}


$(document).ready(function () {
	document.getElementById(`equipo-2`).style.display = 'none'

	$('#team').change(function () {
		const cantidadEquipos = $(this).val()

		if (cantidadEquipos == 2)
			document.getElementById(`equipo-2`).style.display = 'block'
		else
			document.getElementById(`equipo-2`).style.display = 'none'
	})
})