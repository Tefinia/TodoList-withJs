'use strict'

// Pour le stockage local de nos tahces
class ArrayStorage {
	// Un constructeur pour initialiser l'objet avec le nom de la clé et son contenu
	constructor(name){
		this.name = name
		this.list = this.get()
	}

	// Un méthode pour récupérer un tableau des valeurs ou par défaut, le créer
	get(){
		//s'il n'ya pas dans mon localstorage
		if (!localStorage.getItem(this.name)) {
			localStorage.setItem(this.name, '[]')
		}
		return JSON.parse(localStorage.getItem(this.name))
	}

	// Une méthode pour ajouter une valeur dans le tableau
	set(value){
		this.list.push(value)
		localStorage.setItem(this.name, JSON.stringify(this.list))
	}

	// Une méthode pour supprimer une valeur du tableau
	remove(value) {
		const index = this.list.indexOf(value)
		this.list.splice(index, 1) //permet de supprimer  la tab dans l'index
		localStorage.setItem(this.name, JSON.stringify(this.list))//maj la chaine de caractere
	}

	// Une methode pour vider tout le tableau
	clear() {
		localStorage.removeItem(this.name)
	}
}