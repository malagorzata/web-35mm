const url1 = "https://web35mm-e688.restdb.io/rest/cameras/?max=4";
const mediaurl1 = "https://web35mm-e688.restdb.io/media/";

/*API key*/
const options1 = {
  headers: {
    "x-apikey": "603254a35ad3610fb5bb646f",
  },
};

fetch(url1, options1)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })

  .then((data) => {
    handleRec(data);
  })
  .catch((e) => {
    console.error("an error occured:", e.message);
  });

function handleRec(data) {
  console.log(data);
  data.forEach(showRec);
}

function showRec(rec) {
  //grab the template
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
