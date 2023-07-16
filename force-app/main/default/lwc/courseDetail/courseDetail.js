import { LightningElement, api} from 'lwc';
import getCourseDetails from '@salesforce/apex/CourseController.getCourseDetails';

const columns = [
    { label: 'Title', fieldName: 'Title__c' },
    { label: 'Description', fieldName: 'Description__c', type: 'text' }
];

export default class CourseDetail extends LightningElement {
    data = [];
    columns = columns;
   // @api recordId;

   
    connectedCallback(){
        // alert('Hi');
        //  alert(this.recordId);
        getCourseDetails()
        .then(result => {
               this.data = result;
            }            
        )
        
    }

}