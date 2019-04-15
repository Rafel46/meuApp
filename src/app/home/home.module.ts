import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentPar } from '../componentes/par/component.par';
import { HomePage } from './home.page';
import  { ComponentColocarImagem } from '../componentes/colocarimagem/component.colocarimagem';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, ComponentPar, ComponentColocarImagem]
})
export class HomePageModule {}
