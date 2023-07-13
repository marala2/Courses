import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import COURSE_OBJECT from '@salesforce/schema/Course__c';

const fields = ['Course__c.Title__c', 'Course__c.Description__c'];

export default class CourseDisplay extends LightningElement {
  @api recordId;
  courseTitle;
  courseDescription;

  @wire(getRecord, { recordId: '$recordId', fields })
  wiredCourse({ error, data }) {
    if (data) {
      this.courseTitle = data.fields.Title__c.value;
      this.courseDescription = data.fields.Description__c.value;
    } else if (error) {
      // Handle error 
      console.error(error);
    }
  }
}
/*import { LightningElement, wire } from 'lwc';
import getCourseDetails from '@salesforce/apex/CourseController.getCourseDetails';

export default class CourseDetails extends LightningElement {
    courseTitle;
    courseDescription;

    @wire(getCourseDetails)
    wiredCourse({ error, data }) {
        if (data) {
            this.courseTitle = data.Title;
            this.courseDescription = data.Description;
        } else if (error) {
            console.error('Error fetching course details: ', error);
        }
    }
}
*/