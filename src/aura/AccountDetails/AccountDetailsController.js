({
    onAccountInfo: function( component, event, helper ) {
        let message = event.getParam("PassData");
        component.set("v.info", message);

        if(message=== 'undefined'|| message === null){
            component.set("v.flag",false)
        }else{
            component.set("v.flag",true)
        }
    },

    onViewAccount: function( component, event, helper ) {
        let navigation = component.find( 'navigation' );
        let message = component.get('v.info');
                console.log(message)
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
        }))
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

    }

})