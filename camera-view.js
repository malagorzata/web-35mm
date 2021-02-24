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
  document.querySelector(".cameraName-camerabox").textContent =
    cameras.cameraName;
  document.querySelector(
    ".format-level"
  ).textContent = `${cameras.format} | ${cameras.level} `;
  document.querySelector(".type-camerabox").textContent = cameras.type;
  document.querySelector(".description").textContent = cameras.description;
  document.querySelector("#cameraView h2").textContent = cameras.cameraName;
  document.querySelector(
    ".camera-image"
  ).src = `https://web35mm-e688.restdb.io/media/${cameras.img}?s=w`;
  document.querySelector(".name").textContent = cameras.cameraName;
}

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })

  .then((dataa) => {
    handleRec(dataa);
  })
  .catch((e) => {
    console.error("an error occured:", e.message);
  });

function handleRec(dataa) {
  console.log(dataa);
  data.forEach(showRec);
}

function showRec(rec) {
  console.log(rec);
  const template = document.querySelector("#recCam").content;
  //clone it
  const copy = template.cloneNode(true);
  //change the content
  copy.querySelector(".cameraName").textContent = rec.cameraName;
  copy.querySelector(".format").textContent = rec.format;
  copy.querySelector(".level").textContent = rec.level;
  copy.querySelector(
    "img.cameraimg"
  ).src = `https://web35mm-e688.restdb.io/media/${rec.img}?s=w`;
  copy.querySelector("a").href = `camera-view.html?_id=${rec._id}`;

  //grab the parent
  const parent = document.querySelector(".recCam");
  //append
  parent.appendChild(copy);
}
