
import { Usuario } from './usuario.model';

export class ServicoDB{
    public id: number
    public titulo: string
    public descricao: string
    public tipo: number
    public preco: number
    public data: Date
    public usuario: number

    constructor(simples: any[], id?:number){
        this.id = id
        this.titulo = simples[0]
        this.descricao = simples[1]
        this.tipo = simples[2]
        this.preco = simples[3]
        this.data = simples[4]
        this.usuario = simples[5]
    }
}