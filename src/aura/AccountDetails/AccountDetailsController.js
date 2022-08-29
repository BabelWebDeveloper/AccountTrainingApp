({
    onAccountInfo: function( component, event, helper ) {
        console.log('onAccountInfo');
        let message = event.getParam("PassData");
        component.set("v.info", message);

        if(message=== 'undefined'|| message === null){
            component.set("v.flag",false);
            return;
        }
        else{
            component.set("v.flag",true);
            return;
        }
    },

    onViewAccount: function( component, event, helper ) {
        let navigation = component.find( 'navigation' );
        let message = component.get('v.info');
        let pageReference = {
            'type': 'standard__recordPage',
            'attributes': {
            'objectApiName': 'Account',
            'recordId': message,
            'actionName': 'view'
            }
        };
        navigation.generateUrl(pageReference)
            .then($A.getCallback(function(url) {
                window.open(url,'_blank');
        }));
        return;
    },

    onEditAccount: function( component, event, helper ) {
        let navigation = component.find( 'navigation' );
        let message = component.get('v.info');
        navigation.navigate({
            'type': 'standard__recordPage',
            'attributes': {
            'objectApiName': 'Account',
            'recordId': message,
            'actionName': 'edit'
            }
        });
        return;
    },

    reDisplayMarkers : function (component , event , helper){
        let searchTerm = component.get("")
    },

    handleValueChange : function (component, event, helper) {
        console.log("old value: " + event.getParam("oldValue"));
        console.log("current value: " + event.getParam("value"));
    },

    clearDetails : function (component , event , helper){
        let flag = event.getParam("flag");
        component.set("v.flag",flag);
    },

    recordUpdated: function(component, event, helper) {
        let changeType = event.getParams().changeType;

        if (changeType === "CHANGED") {
            console.log("CHANGED");
            var accountRefreshListEvent = $A.get("e.c:AccountRefreshList");
            accountRefreshListEvent.fire();
            return;
//            component.find("recordHandler").saveRecord($A.getCallback(function(saveResult) {
//                                if (saveResult.state === "SUCCESS") {
//                                  console.log('success!');
//                                  return;
//                                }
//                            }));
        }
    },

})