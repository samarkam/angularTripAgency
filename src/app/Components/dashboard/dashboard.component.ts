import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'This Week',
        fill: true,
        tension: 0.5,
        borderColor: 'blue',
        backgroundColor: 'rgba(30, 144, 255, 0.2)',
      }
    ]
  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true
  };

  public lineChartType: ChartType = 'line';

  // Line Chart - Monthly
  public lineChartDataMonths: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{ data: [65, 59, 80, 81], label: 'Bookings' }]
  };

  // Bar Chart
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Hotels', 'Flights', 'Cars'],
    datasets: [{ data: [120, 150, 90], label: 'Sales' }]
  };

  // Doughnut Chart
  public doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: ['Europe', 'Asia', 'America'],
    datasets: [{ data: [300, 500, 200] }]
  };

}