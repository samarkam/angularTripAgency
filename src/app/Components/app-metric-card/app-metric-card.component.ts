import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-metric-card',
  templateUrl: './app-metric-card.component.html',
  styleUrls: ['./app-metric-card.component.css']
})
export class AppMetricCardComponent implements OnInit {

  constructor() { }

  @Input() icon: string = 'show_chart';
  @Input() title: string = 'Metric';
  @Input() value: string = '0';
  @Input() change: string = '0%';
  @Input() trend: 'up' | 'down' = 'up';
  ngOnInit(): void {
  }


}
