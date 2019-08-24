export class Notificacao{
    public id: number
    public descricao: string
    public tipo: number
    public data: Date
    public remetente: number
    public destinatario: number
    public oferta: number

    constructor(simples: any[], id?:number) {
        this.id = id
        this.descricao = simples[0]
        this.tipo = simples[1]
        this.data = simples[2]
        this.remetente = simples[3]
        this.destinatario = simples[4]
        this.oferta = simples[5]
    }
}