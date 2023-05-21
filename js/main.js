
class Comida {
    constructor(burger, incluye, precio) {
        this.burger = burger
        this.incluye = incluye
        this.precio = precio
    }
    descuento() {
        let porcentajeDeDescuento = Number(prompt('Ingresa burger'))
        let nuevoValor = this.precio
        alert('burger ' + this.burger + ' ' + this.incluye + ' sale ' + nuevoValor + ' pesos')
    }
}

const burger1 = new Comida('simple', 'con queso', 60)
const burger2 = new Comida('especial', 'con panceta', 70)
const burger3 = new Comida('completa', 'lechuga y tomate', 50)

burger3.descuento()