var arr = {
	name: 'Margarita',
	role : 'superfox'
},
 n = [1,2,3,4,5]

function getRole(){
	console.log(this.name + ' is a ' + this.role);
}
getRole.apply(arr, arr)
getRole.apply(arr);
getRole.call(arr)
getRole.call(arr, arr)