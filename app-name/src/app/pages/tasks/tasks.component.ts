import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import 'devextreme/data/odata/store';
import { BuscarFipeService } from 'src/app/layouts/buscar-fipe.service';

@Component({
  templateUrl: 'tasks.component.html'
})

export class TasksComponent {
  dataSource: DataSource;


  constructor(private buscarFipe: BuscarFipeService) {
    this.dataSource = this.buscarFipe.getBuscarTabelaFipes();
  }

  onDetalhesClick(data: any) {
    console.log(data);
  }


}
