/**
 * Created by przemyslaw.babel on 26.08.2022.
 */
({
    rerender: function (component, helper) {
        this.superRerender();
        console.log('renderer');
    },
})