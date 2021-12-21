import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DxDataGridModule } from 'devextreme-angular';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: '',
          component: DashboardComponent ,
      },
  ]),
  DxDataGridModule
  ]
})
export class DashboardModule { }
