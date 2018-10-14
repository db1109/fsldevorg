({
	 helperSaveRecord : function (component, event, helper) {
     var x = component.get("v.platformlead");
     var action = component.get("c.saveRecordApex");
     action.setParams({ p : component.get("v.platformlead"), accid: x.Account__c, conid: x.Contact__c, leadid: x.Lead__c});
     action.setCallback(this, function(response) {
     var state = response.getState();
        if (state === "SUCCESS") { 
			var recid = response.getReturnValue();
	        component.set("v.isOpen", false);
            var sObectEvent = $A.get("e.force:navigateToSObject");
    		sObectEvent .setParams({"recordId": recid,"slideDevName": "detail"});
    		sObectEvent.fire();}   
     	if (state === "ERROR") { 
     		var errors = response.getError();
            var toastEvent = $A.get("e.force:showToast");
           toastEvent.setParams({"title": "Error ","message": errors[0].message});
        	toastEvent.fire();}})
         $A.enqueueAction(action);},})