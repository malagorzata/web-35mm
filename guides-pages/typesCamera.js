const url = "https://keadatabase-99c6.restdb.io/rest/types-of-camera?max=2";

// API KEY 603420035ad3610fb5bb6527
const options = {
  header: {
    "x-apikey": "603420035ad3610fb5bb6527",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // handleData(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

// fetch(url)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     showCameraType(data);
//   });
