import { Servico } from './servico.model';
import { Usuario } from './usuario.model';
export class Oferta{
    public id: number
    public titulo: string
    public descricao: string
    public servicos: Servico[]
    public data: Date
    public usuario: Usuario
}