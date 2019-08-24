
import { Usuario } from './usuario.model';
import { Servico } from './servico.model';
export class Oferta{
    public id: number
    public titulo: string
    public descricao: string
    public servico: Servico[]
    public data: Date
    public usuario: Usuario

    constructor(simples: any[], objetos: any[], id?:number) {
        this.id = id
        this.titulo = simples[0]
        this.descricao = simples[1]
        this.data = simples[2]
        this.servico = objetos[0]
        this.usuario = objetos[1]
    }
}