export class OfertaDB{
    public id: number
    public titulo: string
    public descricao: string
    public servico: number
    public data: Date
    public usuario: number

    constructor(simples: any[], id?: number) {
        this.id = id
        this.titulo = simples[0]
        this.descricao = simples[1]
        this.data = simples[2]
        this.servico = simples[3]
        this.usuario = simples[4]
    }
}