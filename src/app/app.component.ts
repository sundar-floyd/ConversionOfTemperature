import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exam-app';
  selected:any;
  degree:number=0;
  answer:number=0;
  calculateTemperature(data:any){
    this.degree=data;
    if(this.selected=="Farenheit")
    {
      data=parseFloat(data);
      this.answer=(data-32)/1.8;
    }
    if(this.selected=="Kelvin"){
      data=parseFloat(data);
      this.answer=(data-273.15);
      this.answer.toFixed(2);
    }
  }
}
