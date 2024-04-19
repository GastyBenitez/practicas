class Display {
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipodeOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos={
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-',
        }
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipodeOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo){
        this.tipodeOperacion !== 'igual' && this.calcular();
        this.tipodeOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }


    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero;
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual
        this.displayValorAnterior.textContent =  `${this.valorAnterior} ${this.signos[this.tipodeOperacion] || ''}`;
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual   = parseFloat(this.valorActual);

        if( isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculador[this.tipodeOperacion](valorAnterior , valorActual);
        
    }
}