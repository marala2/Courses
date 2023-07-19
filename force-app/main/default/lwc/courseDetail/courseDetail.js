import { LightningElement, track, wire} from 'lwc';
import getCourseDetails from '@salesforce/apex/CourseController.getCourseDetails';
import {loadStyle} from 'lightning/platformResourceLoader';
import lwcDatatableStyle from '@salesforce/resourceUrl/lwcDatatableStyle';


const columns = [
    { label: 'Title', fieldName: 'Title__c',  cellAttributes:{class:'datatable-CellColor'}},
    { label: 'Description', fieldName: 'Description__c', type: 'text',
    cellAttributes:{
        class:{fieldName:'descriptionColor'}
    }}
];

export default class CourseDetail extends LightningElement {
    //data = []; 
    @track data;
    @track error;
    columns = columns;
   // @api recordId;


   
  /* connectedCallback(){

        // 1st option imperative way of calling the data 
        getCourseDetails()
        .then(result => {
               this.data = result;
            }            
        )
        
    }*/
 // 2nd option 
 //show data
@wire(getCourseDetails)
wireData({data, error}){
    if(data){
        let dataCopy= JSON.parse(JSON.stringify(data));

        dataCopy.forEach(currentItem => {
            currentItem.descriptionColor = currentItem.Description__c < 50000 ? "slds-text-color_error" : "slds-text-color_success";
          
        });

        this.data = dataCopy;

        loadStyle(this, lwcDatatableStyle).then(()=>{
            console.log("Loaded Successfully")
        }).catch(error=>{
            console.log(error)
        });
    
    } else if(error){
        this.data = undefined;
        this.error = error;
    }

}
}