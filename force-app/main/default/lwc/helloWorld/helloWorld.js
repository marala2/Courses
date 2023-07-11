import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
greeting ="Wold";
changeHandler(event){
    this.greeting = event.target.value; 
}

}