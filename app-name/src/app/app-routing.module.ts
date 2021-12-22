import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/services';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxButtonModule, DxDataGridModule, DxFormModule } from 'devextreme-angular';

const routes: Routes = [
  {
    path: 'marcas',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'marcas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }),DxDataGridModule,DxButtonModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [TasksComponent]
})
export class AppRoutingModule { }
