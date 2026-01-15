function criticalCode() {
	throw "throwing an exception";
}

function logError(theException) {
	console.log(theException);
}

console.log("\n******* Try..Catch *******");

try {
	criticalCode();
} catch (ex) {
	console.log("Got an error");
	logError(ex);
}

console.log("******* Throwing in Try..Catch *******\n");

try {
	throw "An exception that is thrown every time";
} catch (ex) {
	console.log("Got an error");
	logError(ex);
}

console.log("\n******* Try..Catch..Finally *******");

try {
	criticalCode();
} catch (ex) {
	console.log("Got an error");
	logError(ex);
} finally {
	console.log("This is always executed");
}