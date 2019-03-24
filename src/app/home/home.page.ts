import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 var1 : Number = 0;
 var2 : Number = 0;
 acharPar():void{
   let a = Number(this.var1)+Number(this.var2);
   if (a % 2 == 0){
     alert("O numero "+a+" é par");
   }
   else{
     alert("O numero "+a+" é impar");
   }
 }
  multiplicar():void{
   let num1 = Number(this.var1);
   let num2 = Number(this.var2);
   let mina = num1*num2;

   alert("O mmc desses numeros é "+minm);
 }

}
