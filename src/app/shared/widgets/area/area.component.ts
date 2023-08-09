import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts'
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit{
  chartOptions: {};
  @Input() data: any = [];


  

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Ticket Summary'
      },
      subtitle: {
        text: 'Overall'
      },
      xAxis:{
        categories:['Jan','Feb','Mar','Apr','May','Jun'],
        tickmarkPlacement:'on',
        title:{
          enabled:false
        }
      },
      yAxis:{
        title:{
          text:'Count'
        },
        
      },
      tooltip: {
        split: true,
        valueSuffix: ' '
      },
      plotOptions:{
        area:{
          stacking:'normal',
          lineColor: '#666666',
          lineWidth:1,
          marker:{
            lineWidth:1,
            lineColor:'#666666'
          }
        }
      },
      series:[{
        name:'Critical',
        data:[4,5,6,7,8,9]
      },{
        name:'High',
        data:[10,34,23,56,45,80]
      },{
        name:'Major',
        data:[100,45,67,34,22,78]
      },{
        name:'Minor',
        data:[89,104,120,145,98,101]
      }
    ]
     
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
