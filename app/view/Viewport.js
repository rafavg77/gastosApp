Ext.define('GastosApp.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'fit',
       
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
                {
                    xtype: 'textfield'
                }
            ]
        });
                
        me.callParent(arguments);
    }
});