import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  
  createDb() {
    console.log("Creating Database");
    let heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    let persons = [
      {id: 1, name: 'Mr. One'},
      {id: 2, name: 'Mr. Two'},
      {id: 3, name: 'Mr. Three'}
    ];

    let rv = { heroes, persons };
    return rv;
  }
  
  
  // Use responseInterceptor to manipulate the response
  //responseInterceptor(responseOptions, requestInfo) {
  //  console.log("responseInterceptor");
  //}

}
