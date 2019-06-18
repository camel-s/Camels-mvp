
import { Usuario } from './usuario.model';

export class Servico{
    public id: number
    public titulo: string
    public descricao: string
    public tipo: number
    public preco: number
    public data: Date
    public usuario: Usuario
}