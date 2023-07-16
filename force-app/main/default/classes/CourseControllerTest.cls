@isTest
private class CourseControllerTest {
    @isTest
    static void testGetCourseDetails() {
        // Create test Course record
       Course__c testCourse = new Course__c(Title__c = 'Test Course', Description__c = 'Test Description');
        insert testCourse;

        // Call the getCourseDetails method
        Test.startTest();
        Course__c courseDetails = CourseController.getCourseDetails();
        Test.stopTest();

        // Verify the returned course details
       System.assertEquals('Test Course', courseDetails.Title__c);
       System.assertEquals('Test Description', courseDetails.Description__c);
    }
}
