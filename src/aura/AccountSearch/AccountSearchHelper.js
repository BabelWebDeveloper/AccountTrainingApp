({

    handleSearch: function( component, searchTerm ) {
        let action = component.get( "c.searchAccounts" );
        action.setParams({
            searchTerm: searchTerm
        });
        action.setCallback( this, function( response ) {
            let event = $A.get( "e.c:AccountsLoaded" );
            event.setParams({
                "accounts": response.getReturnValue()
            });
            event.fire();
            return;
        });
        $A.enqueueAction( action );
    },

    handleSearchRerender: function( component, searchTerm ) {
        let action = component.get( "c.searchAccounts" );
        action.setParams({
            searchTerm: searchTerm
        });
        $A.enqueueAction( action );
    },

})