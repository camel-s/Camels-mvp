import { AreaAtuacao } from './areaAtuacao.model';
import { Usuario } from './usuario.model';

export class Servico{
    public id: number
    public titulo: string
    public descricao: string
    public preco: number
    public usuario: Usuario
}