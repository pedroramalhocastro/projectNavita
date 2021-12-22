import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { TasksComponent } from './tasks.component';



@NgModule({
  declarations: [TasksComponent],
  imports: [
    DxDataGridModule,
    DxButtonModule,
    CommonModule,
  ]
})
export class TasksModule { }
