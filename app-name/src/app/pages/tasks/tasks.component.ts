import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import DataSource from 'devextreme/data/data_source';
import 'devextreme/data/odata/store';
import { BuscarFipeService } from 'src/app/layouts/buscar-fipe.service';

@Component({
  templateUrl: 'tasks.component.html'
})

export class TasksComponent {
  dataSource: DataSource;
  dataSourceModel: any;
  marca!: [];

  @ViewChild('modalMarcas ') modalMarcas : TemplateRef<any> | undefined;


  constructor(private buscarFipe: BuscarFipeService,
    private modalService: NgbModal) {
    this.dataSource = this.buscarFipe.getBuscarTabelaFipes();
  }

  onDetalhesClick(data: any) {
    let n = data.codigo;
    let b = parseInt(n);
  this.dataSourceModel = this.buscarFipe.getBuscarMarcas(b);
    this.modalService.open(this.modalMarcas);
   
  }

  closeModal(id: string) {
    this.modalService.dismissAll(id);
  }

}
