angular.module('eirwin.emmit-client',['SignalR']).
	service('mit',['$rootScope','Hub','$log','$timeout',function($rootScope,Hub,$log,$timeout){

		var createProxy = function(config){
        var hub = new Hub(config.emitter,{
            rootPath:config.path,
            listeners:config.listeners,
            queryParams:config.queryParams,
            errorHandler:config.onError,
            hubDisconnected:config.onDisconnected
            });
        return hub;
    };

    return {
        createProxy:createProxy
    }
}]);