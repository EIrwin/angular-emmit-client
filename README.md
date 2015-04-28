# angular-emmit-client
=======================

An AngularJS client for [Emmit](https://github.com/EIrwin/Emmit) that wraps [angular-signalr-hub](https://github.com/JustMaier/angular-signalr-hub) and adds a few changes such as promises and one-step proxy creation.

##Installation

####Bower
`bower install angular-emmit-client`

##Usage

1. Include the `emmit-client.js` script provided by this component into your app.
2. Include the `angular-signalr-hub.js` script provided by the `angular-signalr-hub` component into your app.
3. Add `EmmitClient` as a module dependency to your app
```javascript
    var myApp = angular.module('myApp',['EmmitClient']);
```    
4. Use Emmit to create a proxy to your Emmit server.
```javascript
   myApp.controller('myController',['$scope','Emmit','$log'],function($scope,Emmit,$log){
      Emmit.createProxy({
            emitter:'myEmitter',
            path:'http://localhost:8181/emmit',
            listeners:{
                'onSendNotification':function(notification){
                    //do something with notification received from server
                    $scope.$emit('onSendNotification',notification);
                }
            },
            onError:function(){
                $log.error('onError:');
            },
            onDisconnected:function(){
                $log.info('onDisconnected:')
            },
            queryParams:{
                userId:'12345'  //optional
            }
        }).then(function(proxy){
            $log.info('proxy created');
            //Do something here with the proxy if you need
        });
   }
```

