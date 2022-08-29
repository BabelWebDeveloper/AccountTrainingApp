({
    onAccountsLoaded: function( component, event, helper ) {
        let cols = [
            {
                'label': 'Name',
                'fieldName': 'Name',
                'type': 'text'
            },
            {
                'label': 'Phone',
                'fieldName': 'Phone',
                'type': 'phone'
            },
            {
                'label': 'Website',
                'fieldName': 'Website',
                'type': 'url'
            },
            {
                'label': 'Action',
                'type': 'button',
                'typeAttributes': {
                    'label': 'View details',
                    'name': 'view_details'
                }
            }
        ];
        let check = event.getParam( 'accounts' );
        console.log('list from event: '+check);
        if(check=== 'undefined'|| check === null || check.length===0){
            component.set("v.records",false)
            component.set("v.message","No records found.");
        }
        else{
            component.set("v.records",true)
            component.set("v.message","")
        }
        component.set( 'v.cols', cols );
        component.set( 'v.rows', event.getParam( 'accounts' ) );
        return;
    },
    selectRecord : function(component, event, helper) {
        let target = component.get("v.rows")[event.currentTarget.dataset.record],
        selectedRow = JSON.stringify(target);
        let stringify = JSON.parse(selectedRow)

        let idAccount = stringify['Id']

        let detailsOnRecordClickEvent = $A.get("e.c:sendAccountToDetails");
        detailsOnRecordClickEvent.setParams({"PassData" : idAccount});
        detailsOnRecordClickEvent.fire();
        let loadAccountEvent = $A.get("e.c:sendAccountToMap");
        loadAccountEvent.setParams({
        "marker" : idAccount ,
        "street":stringify['BillingStreet'],
        "city" :stringify['BillingCity'],
        "code" :stringify['BillingPostalCode'] });
        loadAccountEvent.fire();
        return;
    },
    rerenderList : function(component, event, helper){
        component.set('v.rows',rerender());
        return;
    }
})