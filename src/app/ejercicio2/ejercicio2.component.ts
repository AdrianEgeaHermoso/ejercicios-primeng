import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.scss']
})
export class Ejercicio2Component implements OnInit {

  data: any;

  chartOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.data = {
      labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
      datasets: [{
          type: 'line',
          label: 'Importaciones',
          borderColor: '#42A5F5',
          borderWidth: 2,
          fill: false,
          data: [
              50,
              25,
              12,
              48,
              56,
              76,
              42
          ]
      }, {
          type: 'bar',
          label: 'Exportaciones',
          backgroundColor: '#66BB6A',
          data: [
              21,
              84,
              24,
              75,
              37,
              65,
              34
          ],
          borderColor: 'white',
          borderWidth: 2
      },]
  };

  this.chartOptions =  {
      plugins: {
          legend: {
              labels: {
                  color: '#495057'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          },
          y: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          }
      }
  };

    
  }

  

  

applyLightTheme() {
    this.chartOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    }
}

applyDarkTheme() {
    this.chartOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#ebedef'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(255,255,255,0.2)'
                }
            },
            y: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(255,255,255,0.2)'
                }
            }
        }
    };
}





}
