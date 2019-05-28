import { Usuario } from './usuario.model';
import { Servico } from './servico.model';
import { Oferta } from './oferta.model';

export class Oferente extends Usuario{
    public ofertas: Oferta[]
    public servicos: Servico[]
}