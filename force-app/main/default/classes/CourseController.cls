public with sharing class CourseController {
    @AuraEnabled(cacheable=true)
    public static List<Course__c> getCourseDetails() {
        // Query the Course object to fetch the desired course details
        return [SELECT Title__c,Description__c FROM Course__c];// where program__c =: programId LIMIT 1];
    }
}
