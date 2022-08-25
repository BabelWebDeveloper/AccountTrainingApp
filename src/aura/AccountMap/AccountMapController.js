({
    onAccountsLoaded: function( component, event, helper ) {
        var mapMarkers = [];
        var accounts = event.getParam( 'accounts' );
        for ( var i = 0; i < accounts.length; i++ ) {
            var account = accounts[i];
            var marker = {
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
        component.set( 'v.mapMarkers', mapMarkers );
        if(accounts.length === 1){
            component.set('v.zoomLevel',15);
        }

    },
    loadAccount: function( component, event, helper ) {
        var mapMarkers = [];
        var accountId = event.getParam( 'marker' );
        var street = event.getParam('street');
        var city = event.getParam('city');
        var code = event.getParam('code');
        var marker = {
        'location': {
        'Street': street,
        'City': city,
        'PostalCode': code
        },
        'title': "Pinezka",
        'description': (
        'Phone: ' + "1111" +
        ' ' +
        'Website: ' + "www.morele.net"
                                ),
        'icon': 'standard:location'
        };
        mapMarkers.push( marker );
        component.set( 'v.mapMarkers', mapMarkers );
        component.set('v.zoomLevel',20);
    }


})