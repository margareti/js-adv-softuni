
//Window object
console.log('Global')
testContext();


//just prints an object
console.log('Object')
new testContext();


console.log('Local')

//testContext is the same as global, because it inherits from global

function testContext() {
	console.log(this)
}
(function(){

	testContext()

})();