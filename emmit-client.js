angular.module('eirwin.emmit-client',[]).
	service('Emmit',function(){
	 var createProxy = function(config){
	      var connection = $.hubConnection(config.url,{
	          useDefaultPath:config.useDefaultPath
	      });

	      var proxy = connection.createHubProxy(config.emitter);
	      connection.start()
	          .done(function () {
	              $log.info('Now Connected,connection ID=' + connection.id);
	          })
	          .fail(function () {
	              $log.error('Could not connect')
	          });
	      return proxy;
      };
      return {
      	createProxy:createProxy
	});