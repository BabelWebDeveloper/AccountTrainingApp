({
    onSearchTermChange: function( component, event, helper ) {
        let searchTerm = component.get( "v.searchTerm" );
        let delayMillis = 500;
        let timeoutId = component.get( "v.searchTimeoutId" );
        clearTimeout( timeoutId );
        timeoutId = setTimeout( $A.getCallback( function() {
            helper.handleSearch( component, searchTerm );
        }), delayMillis );
        component.set( "v.searchTimeoutId", timeoutId );

        let appEvent = $A.get("e.c:clearDetails");
             appEvent.setParams({"flag" : false});
             appEvent.fire();

        let eventSpinner = $A.get("e.c:AccountSpinner");
            eventSpinner.fire();

        return;
    },

    onSearchTermRerender: function( component, event, helper ) {
        let searchTerm = component.get( "v.searchTerm" );
        let delayMillis = 500;
        let timeoutId = component.get( "v.searchTimeoutId" );
        clearTimeout( timeoutId );
        timeoutId = setTimeout( $A.getCallback( function() {
            helper.handleSearch( component, searchTerm );
        }), delayMillis );
        component.set( "v.searchTimeoutId", timeoutId );

        let eventSpinner = $A.get("e.c:AccountSpinner");
            eventSpinner.fire();

        return;
    },

    clearSearchFields: function( component, event, helper ) {
        component.set("v.searchTerm","");
        let searchTerm = component.get( "v.searchTerm" );
        helper.handleSearch( component, searchTerm );

        let clearEvent = $A.get("e.c:clearDetails");
             clearEvent.setParams({"flag" : false});
             clearEvent.fire();

         return;
    },

})