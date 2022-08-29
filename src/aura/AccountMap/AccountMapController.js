({
    onAccountsLoaded: function( component, event, helper ) {
        let mapMarkers = [];
        component.set('v.approximation', 'auto')
        let accounts = event.getParam( 'accounts' );
        for ( let i = 0; i < accounts.length; i++ ) {
            let account = accounts[i];
            let marker = {
                'location': {
                    'Street': account.BillingStreet,
                    'City': account.BillingCity,
                    'PostalCode': account.BillingPostalCode
                },
                'title': account.Name,
                'description': (
                    'Phone: ' + account.Phone +
                    ' ' +
                    'Website: ' + account.Website
                ),
                'icon': 'standard:location'
            };
            mapMarkers.push( marker );
        }
        if(accounts.length == 1) {
            component.set('v.approximation', 15);
            return;
        }

        component.set( 'v.mapMarkers', mapMarkers );
        return;
    },

    loadAccount: function(component,event,helper) {
        let mapMarkers = [];
        let accountId = event.getParam('idAccount');
        let street = event.getParam('street');
        let city = event.getParam('city');
        let code = event.getParam('code');
        let phone = event.getParam('phone');
        let website = event.getParam('website');
        let name = event.getParam('name');
        let marker = {
             'location': {
             'Street': street,
             'City': city,
             'PostalCode': code
             },
             'title': name,
             'description': (
             'Phone: ' + phone +
             ' ' +
             'Website: ' + website
              ),
              'icon': 'standard:location'
        };
        mapMarkers.push( marker );
        component.set( 'v.mapMarkers', mapMarkers );
        component.set('v.approximation', 15);
        return;
    },
})