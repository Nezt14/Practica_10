class libro{
    constructor(titulo, autor, anio){
        this._titulo = titulo
        this._autor = autor
        this._anio = anio
    }
    resumen(){
        return `${this._titulo} de ${this._autor}, publicado en ${this._anio} `
    }
}

let libro1 = new libro(`La bella y la bestia`, `La bestia`, 2024)

console.log(libro1.resumen())