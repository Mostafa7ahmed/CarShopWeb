import { AllcarService } from './../../Core/services/allcar.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-allcar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './allcar.component.html',
  styleUrl: './allcar.component.scss'
})
export class AllcarComponent implements OnInit {
  carTypes=[1,2,3,4,5];
  tableData: any[] = [];

  constructor(private supabaseService: AllcarService) {}

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.tableData = await this.supabaseService.getTableData({ name: '' ,price_day: 0 });
    console.log(this.tableData)
  }

}
