import {Atividade} from "./Atividade";

export class Tarefa{

  constructor(public id?:number,  public nome?: string, public ativo?: boolean, public atividade?:Atividade){}

}
