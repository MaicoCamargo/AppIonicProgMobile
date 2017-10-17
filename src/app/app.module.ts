import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {Alert,AlertController, IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TarefaServiceProvider } from '../providers/tarefa-service/tarefa-service';
import {HttpModule} from "@angular/http";
import {EditarTarefaPage} from "../pages/editar-tarefa/editar-tarefa";
import {IonicStorageModule} from "@ionic/storage";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditarTarefaPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({ // para usar um banco de dados no celular
      name: 'tarefas',//nome do db
      driverOrder:['indexeddb', 'sqlite', 'websql']}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditarTarefaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TarefaServiceProvider
  ]
})
export class AppModule {}
