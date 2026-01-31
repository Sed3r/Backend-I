class TicketManager {
    eventos = [];
    #idContador = 1;
    #precioBaseDeGanancia = 0.15;
    constructor() {
        this.eventos = []
    }
    getEventos = () => {
        return this.eventos;
    }
    addEvento = (nombre, lugar, precio, capacidad=50, fecha= new Date() ) => {
        const nuevoEvento = {
            id: this.idContador,
            nombre,
            lugar,
            precio: precio + this.#precioBaseDeGanancia,
            capacidad,
            fecha,
            participantes: []
        }
        this.#idContador++;
        this.eventos.push(nuevoEvento);
        return this.eventos;
    }
    addUsuario(idEvento, idUsuario) {
        const evento = this.eventos.find( event => event.id === idEvento);

        if(!evento){
            return { error: 'No existe el evento'}
        }
        
        const usuarioRegistrado = evento.participantes.inludes(idUsuario);
        if(usuarioRegistrado){
            return { error: 'El usuario ya esta registrado en el evento'}
        }

        evento.participantes.push(idUsuario);
        return evento;
    }
}

