Ext.loader.setConfig({enable : tue});
Ext.application({
	name : 'GastoApp',
	controllers : [
		'gastosAltaController'
	],
	autoCreateViewport: true
});