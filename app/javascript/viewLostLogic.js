

document.getElementById("view").addEventListener("click",function(){


fetch("/api/lost").then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
})

})