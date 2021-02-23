const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");
const url = "https://web35mm-e688.restdb.io/rest/cameras/" + id;
const mediaurl = "https://web35mm-e688.restdb.io/media/";

/*API key*/
const options = {
  headers: {
    "x-apikey": "603254a35ad3610fb5bb646f",
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
    handleCameras(data);
  })
  .catch((e) => {
    console.error("an error occured:", e.message);
  });

function handleCameras(cameras) {
  console.log(cameras);
  document.querySelector(".cameraName").textContent = cameras.cameraName;
  document.querySelector(
    ".format-level"
  ).textContent = `${cameras.format} | ${cameras.level} `;
  document.querySelector(".type").textContent = cameras.type;
  document.querySelector(".description").textContent = cameras.description;
  document.querySelector("#cameraView h2").textContent = cameras.cameraName;
  document.querySelector(
    ".camera-image"
  ).src = `https://web35mm-e688.restdb.io/media/${cameras.img}?s=w`;
  document.querySelector(".name").textContent = cameras.cameraName;
}
