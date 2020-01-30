// Add your code here
function submitData(name, email) {
  let formData = {
    name, 
    email
  }
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };


  return fetch("http://localhost:3000/users", configObj)
  .then(res => res.json())
  .then(json => {
    console.log(json)
    const body = document.querySelector('body')
    const div = document.createElement('div')
    div.textContent = json['id']
    body.append(div)
  })
  .catch(error => {
    document.body.append("Unauthorized Access")
  })
}
