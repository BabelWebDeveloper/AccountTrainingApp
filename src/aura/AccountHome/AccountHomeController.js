({
        showSpinner : function(component,event,helper){
            component.set("v.toggleSpinner", true);
          },
        hideSpinner : function(component,event,helper){
            component.set("v.toggleSpinner", false)
        },
        afterSearch : function(component, event , helper){
            component.set('v.afterSearch',true);
        }

})