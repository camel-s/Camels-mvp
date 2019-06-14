import { Login } from './login.model';
import { Avaliacao } from './avaliacao.model';

export class Usuario{
    public id: number
    public nome: string
    public login: Login
    public avaliacoes: Avaliacao[]
    public cpf: number
}