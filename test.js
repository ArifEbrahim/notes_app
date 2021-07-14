let x = {
  text: ':bowtie:'
}

let y = JSON.stringify(x)

let params = {
  method: 'POST',
  headers: {"Content-Type": "application/json"},
  body: y
}

fetch('https://makers-emojify.herokuapp.com/', params)
.then(response => response.json())
.then(data => console.log(data));