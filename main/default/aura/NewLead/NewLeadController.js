({
	saveRecordController : function(component, event, helper) {
		helper.helperSaveRecord(component, event, helper);},
   	cancelDialog: function(component, event, helper) {
		component.set("v.isOpen", false);
     	var action = component.get("c.getListViews");
    	action.setCallback(this, function(response){
        var state = response.getState();
        if (state === "SUCCESS") {
            var listviews = response.getReturnValue();
            var navEvent = $A.get("e.force:navigateToList");
            navEvent.setParams({"listViewId": listviews.Id,"listViewName": null,"scope": "Platform_Lead__c"});
            navEvent.fire();}});
    	$A.enqueueAction(action);},
    doInit: function(component, event, helper) {
        	component.find("forceRecordPlatformLead").getNewRecord("Platform_Lead__c",null,false, 
            $A.getCallback(function() {var rec = component.get("v.platformlead");}));},    
})