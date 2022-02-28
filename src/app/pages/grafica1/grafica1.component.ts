import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  labels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  
  dataMuseo:  ChartData<'doughnut'> = {
    datasets: [
      { data: [ 220, 110, 330 ],
      backgroundColor:['#6857E6','#009FEE','#F02059'] },
    ]
  };

  dataTienda:  ChartData<'doughnut'> = {
    datasets: [
      { data: [ 440, 110, 500 ],
      backgroundColor:['#6857E6','#009FEE','#F02059'] },
    ]
  };
    

  constructor() { }

  ngOnInit(): void {
  }

}
