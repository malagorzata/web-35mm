const url = "https://keadatabase-99c6.restdb.io/rest/types-of-camera?max=20";
const mediaurl = "https://keadatabase-99c6.restdb.io/media/";

// 560263607f98025500000000?s=t

// API KEY 603420035ad3610fb5bb6527
const options = {
  headers: {
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
    handleData(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function handleData(data) {
  data.forEach(showCamera);
}

function showCamera(camera) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h3").textContent = camera.typeofCamera;
  copy.querySelector("p").textContent = camera.description;

  const imgurl = mediaurl + camera.image;
  copy.querySelector("img").src = imgurl;

  const parent = document.querySelector(".typescameraGrid");
  parent.appendChild(copy);
}
