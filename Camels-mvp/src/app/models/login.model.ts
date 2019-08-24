export class Login{
    public email: string
    public senha: string

    constructor(simples: string[]){
        this.email = simples[0],
        this.senha = simples[1]
    }
}