import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {Tarefa} from "../model/Tarefa.model";
import {Storage} from "@ionic/storage";
import {HomePage} from "../home/home";

/**
 * Generated class for the EditarTarefaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-tarefa',
  templateUrl: 'editar-tarefa.html',
})
export class EditarTarefaPage {


  private _tarefa : Tarefa;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage,private alertCtrl:AlertController) {

    this._tarefa =this.navParams.get('tarefaSelecionada');//get(nome do metodo que deve ser chamado)

    console.log('teste editar tarefa:: '+this._tarefa.nome);

  }

  salvarAlteracao(): void {
    let chave =  this._tarefa.id+this._tarefa.nome;
    // depois do set é chave valor (no caso this._tarefa.id+this._tarefa.nome é chave) e this tarefa é o que que foi salvo
    let alert= this.alertCtrl.create({ title:'success',subTitle:'tarefa cadastrada', buttons:[{text:'ok', handler:v=>{this.storage.set(chave,this._tarefa); this.navCtrl.setRoot(HomePage); }}]});
    alert.present();
    console.log("salvo");
  };


  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarTarefaPage');
  }

}
