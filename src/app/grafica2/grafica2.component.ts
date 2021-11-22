import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica2',
  templateUrl: './grafica2.component.html',
  styleUrls: ['./grafica2.component.scss']
})
export class Grafica2Component implements OnInit {

    data: any;

    chartOptions: any;


  constructor() { }

  ngOnInit(): void {
    this.data = {
      labels: ['Multiplataforma','Desarrollo','Ciberseguridad'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#64B5F6",
                  "#FFB74D",
                  "#81C784"
              ],
              hoverBackgroundColor: [
                  "#64B5F6",
                  "#FFB74D",
                  "#81C784"
              ]
          }
      ]
  };

  

  }

  

getLightTheme() {
    return {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    }
}

getDarkTheme() {
    return {
        plugins: {
            legend: {
                labels: {
                    color: '#ebedef'
                }
            }
        }
    }
}

}
