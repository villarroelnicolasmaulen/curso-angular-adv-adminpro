import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit, AfterViewInit {

    @Input() doughnutChartLabels:string[]=[ ' Sales', 'In-asdasSales', 'Mail-asdas Sales'];
    @Input() nombreGrafica:string = 'Sin titulo';

    // Doughnut
    @Input() doughnutChartData: ChartData<'doughnut'> = {
      datasets: [
        { data: [ 350, 450, 100 ],
        backgroundColor:['#6857E6','#009FEE','#F02059'] },
      ]
    };
    public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.doughnutChartLabels);
    
    this.doughnutChartData.labels = this.doughnutChartLabels;
  }

  ngOnInit(): void {
      
  }

}
