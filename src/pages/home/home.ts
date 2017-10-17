import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Tarefa} from "../model/Tarefa.model";
import {TarefaServiceProvider} from "../../providers/tarefa-service/tarefa-service";
  // import {Atividade} from "../model/Atividade";
import {EditarTarefaPage} from "../editar-tarefa/editar-tarefa";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tarefas : Tarefa[];
  // Quando for private por convenção usar _ na frente da variavel
  constructor(public navCtrl: NavController, private tarefaSerProvider: TarefaServiceProvider, private _storage:Storage) {
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

  enviarDadosServidor(): void {
      /*this._storage.forEach(obj => {console.log("nome:"+obj.nome)});//apenas pega os dados e lista no console
      console.log("antes do service");*/
      this.tarefaSerProvider.cadastraTarefaBackend(this._storage);
    console.log("depois do service");
  }
}
