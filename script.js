var button = $("#btn")
button.on("click", () => {
  var object = new Object();
  object.name = "teste"
	object.members = []
  
 var settings = {
  "url": "https://petstores-api.herokuapp.com/api/v1/pet-stores/?search={aquiaceitaqualquercoisa}",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({"name":"Group 2","members":["189.120.72.56"]}),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
})