import { Component, inject, OnInit } from '@angular/core';
import { Body } from '../../Core/Interface/Body';
import { BodyService } from '../../Core/services/body.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent implements OnInit {
 

  private _BodyService = inject(BodyService)

   Bodys:Body[] =[]
  ngOnInit(): void {
    this.loadData();
    
  }
  async loadData() {
    this.Bodys = await this._BodyService.getTableData();

    console.log(this.Bodys)
  }
}
