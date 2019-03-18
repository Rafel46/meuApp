import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  a : number = 0;
  b : number = 0;
  c : number = 0;
  primeiroNumero(x):double{
    alert(x);
    a = x;

  }


    somar():void{
      

}
