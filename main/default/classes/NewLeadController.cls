public class NewLeadController {
  @AuraEnabled   
  public static id saveRecordApex( Platform_Lead__c p, list<string> accid, list<string>  conid, list<string>  leadid) {
   //takes account of bad mapping between js and apex in Lightning for lookups
      if(accid.size()>0){p.Account__c=accid[0];}
      if(conid.size()>0){p.Contact__c=conid[0];}
      if(leadid.size()>0){p.Lead__c=leadid[0];}
      insert p;
      return p.id;}
  @AuraEnabled
  public static List<ListView> getListViews() {
    List<ListView> listviews = [SELECT Id, Name FROM ListView WHERE SobjectType = 'Platform_Lead__c'];
    return listviews;}}