function printArgsInfo(){
	var args = arguments,
		i;
	for (i = 0; i < args.length; i ++){
		console.log(args[i], typeof(args[i]))
	}
}
printArgsInfo(2, 3, 2.5, -110.5564, false)
printArgsInfo(null, undefined, "", 0, [], {}) 
// Note that [].toString() returns ""
printArgsInfo([1, 2], ["string", "array"], ["single value"])
printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20})
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]])
