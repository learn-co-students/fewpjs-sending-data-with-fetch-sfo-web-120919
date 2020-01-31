// Add your code here
function submitData(name,email)
{
    const configObj = {
        method: "POST",
        headers:{"Content-Type": "application/json","Accept": "application/json"},
        body: JSON.stringify({name:name,email:email})
    };
    return fetch("http://localhost:3000/users",configObj)
    .then(response => response.json())
    .then(data => document.body.innerHTML = `<h1>${data.id}</h1>`)
    .catch(function(error){
        document.body.innerHTML = `<h1>${error.message}</h1>`});
}
