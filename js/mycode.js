var data={
id:13,
path: location.pathname,
dogs: ['Rex', 'Rover', 'Henrietta', 'Alan']

}
new Vue({
el: "body",
data: data,
created(){
	console.log("running");
	this.dogs.push("Alsatian","daschmund")
	}

});