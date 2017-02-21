export class Message {
  private time : string;
  
  // this is an typescript automatic assignment constructor
  constructor( public message: string) {
    this.time = new Date().toLocaleString();
  }

  

}