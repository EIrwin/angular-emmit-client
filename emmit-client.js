angular.module('EmmitClient',['SignalR']).
service('Emmit',['$rootScope','Hub','$log','$timeout','$q',function($rootScope,Hub,$log,$timeout,$q){

   var createProxy = function(config){
   		var d = $q.defer();

		try
		{
	        var hub = new Hub(config.emitter,{
	           rootPath:config.path,
	           listeners:config.listeners,
	           queryParams:config.queryParams,
	           errorHandler:config.onError,
	           hubDisconnected:config.onDisconnected
	           });

	        d.resolve(hub);
	    }
	    catch(e){
	    	d.reject(e);
	    }

        return d.promise;
   };

   return {
       createProxy:createProxy
   }
}]);
