({
    onSearchTermChange: function( component, event, helper ) {
        var searchTerm = component.get( "v.searchTerm" );
        console.log('search term: ' + searchTerm);
        var delayMillis = 500;
        var timeoutId = component.get( "v.searchTimeoutId" );
        clearTimeout( timeoutId );
        timeoutId = setTimeout( $A.getCallback( function() {
            helper.handleSearch( component, searchTerm );
        }), delayMillis );
        component.set( "v.searchTimeoutId", timeoutId );
    },
    clearSearchFields: function( component, event, helper ) {
        component.set("v.searchTerm","");
        var searchTerm = component.get( "v.searchTerm" );
        helper.handleSearch( component, searchTerm );
        $A.get('e.force:refreshView').fire()
    }
})