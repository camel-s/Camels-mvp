import { AreaAtuacao } from './areaAtuacao.model';

export class Servico{
    public id: number
    public titulo: string
    public descricao: string
    public areaAtuacao: AreaAtuacao
    public preco: number
    public anexo: string
}