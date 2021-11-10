
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

# here is how to test it
```
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "user": "nodejs",
  "repo": "node",
  "branch": "canary-base",
  "per_page": 1
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("localhost:5000/api/commits", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  ```