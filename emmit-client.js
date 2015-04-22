angular.module('EmmitClient',['SignalR']).
service('Emmit',['$rootScope','Hub','$log','$timeout','$q',function($rootScope,Hub,$log,$timeout,$q){

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
