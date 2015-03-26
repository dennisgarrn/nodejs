angular.module('routerApp', ['routerRoutes', 'ngAnimate'])

.controller('mainCtrl', function(){
	var vm = this;

	vm.message = 'A smooth sea never made a skilled sailor.';
})

.controller('homeCtrl', function(){
	var vm = this;

	vm.message = 'This is the home page!';
})

.controller('aboutCtrl', function(){
	var vm = this;

	vm.message = 'Yeah well if you what to...';
})

.controller('contactCtrl', function(){
	var vm = this;

	vm.message = 'This is my magic address: pico 45, LA';
});