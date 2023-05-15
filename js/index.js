'use strict'

//DOM selection
const list = document.getElementById('list')
const input = document.getElementById('input')
const add = document.getElementById('add')
const clear = document.getElementById('clear')
const url = document.getElementById('url')
const load = document.getElementById('load')

const tasks = ['Lire un livre', 'Faire un exercice']

//Une fonction qui ajoute les taches au DOM avec un bouton de suppression auquel attache un evenement
function taskToDOM(task){
	// Si on a une chaîne non-vide
	if(typeof task === 'string' && task ) { //tasks[i] raha vide de false zay rhf ao am if
		const li = document.createElement('li')
		const remove = document.createElement('button')

		li.textContent = task
		remove.textContent = 'REMOVE'

		remove.addEventListener('click', () => {
			//on veut supprimer son parent cad li anle remove
			list.removeChild(remove.parentNode)
		})

		//apdirn ao am li le remove
		li.appendChild(remove)
		//ajout en debut de liste notre li
		list.insertBefore(li, list.firstChild)//le insert vaovao no atao ambony
		return true
	}
	return false
}

//On ajoute chaque tâche à la liste à puces
tasks.forEach(task => taskToDOM(task))

// On gère l'ajout de tàche avec le bouton ADD et la touche enter
function newTask() {
	if (tasks.indexOf(input.value) === -1 && taskToDOM(input.value)) {
		tasks.push(input.value)
		input.value = ''
		list.innerHTML = ''
		tasks.forEach(task => taskToDOM(task))	
	} else {
		alert('Ce tâche existe')
	}
input.focus()//permet le garder le curseur dans input
}
//ajouter une nouvelle tache
add.addEventListener('click', newTask)
input.addEventListener('keydown', e => {
	if(e.key === 'Enter') {
		newTask()
	}
})

//On supprime la liste du DOM et du navigateur
clear.addEventListener('click', () => {
	list.innerHTML = ''
})

// On gère l'importation de tâche
load.addEventListener('click', () => {

})