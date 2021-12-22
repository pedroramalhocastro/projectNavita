import { Injectable } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

@Injectable({
  providedIn: 'root'
})
export class BuscarFipeService {

  constructor() { }

  getBuscarTabelaFipes(): DataSource {
    return new DataSource({
      paginate: false,
      store: AspNetData.createStore({
        loadUrl:'https://parallelum.com.br/fipe/api/v1/carros/marcas',
        loadMethod: 'GET'
      })
    });
  }
}
