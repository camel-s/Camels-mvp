import { Login } from './login.model';
import { Avaliacao } from './avaliacao.model';

export class Usuario{
    public id: number
    public nome: string
    public login: Login
    public avaliacoes: Avaliacao[]
    public cpf: number

    constructor(simples: any[], objetos: any[], id?:any) {
        this.id = id
        this.nome = simples[0]
        this.cpf = simples[1]
        this.login = objetos[0]
        this.avaliacoes = objetos[1]
    }
}