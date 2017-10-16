import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Tarefa} from "../model/Tarefa.model";
import {TarefaServiceProvider} from "../../providers/tarefa-service/tarefa-service";
  // import {Atividade} from "../model/Atividade";
import {EditarTarefaPage} from "../editar-tarefa/editar-tarefa";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tarefas : Tarefa[];

  constructor(public navCtrl: NavController, private tarefaSerProvider: TarefaServiceProvider) {
     tarefaSerProvider.listarTarefa().subscribe(tar =>{ this.tarefas = tar;});
   /* this.tarefas= [
     new Tarefa(1,'programar .java',true,new Atividade(1,'comprar mais memória ham')),
     new Tarefa(2,'programar .java',true,new Atividade(2,'esperar')),
     new Tarefa(3,'programar .java',true,new Atividade(3,'configurar xml')),
     ];*/
  }
  tarefaSelecionada(tarefa: Tarefa): void {
    this.navCtrl.push(EditarTarefaPage,{tarefaSelecionada: tarefa});
    console.log(tarefa.nome);
  }

}
