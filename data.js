let url = "https://web35mm-e688.restdb.io/rest/cameras?max=19";
const mediaurl = "https://web35mm-e688.restdb.io/media";

/*Filter*/
document.querySelector("select.level").addEventListener("change", handleSelect);
document
  .querySelector("select.format")
  .addEventListener("change", handleSelectFormat);
document
  .querySelector("select.type")
  .addEventListener("change", handleSelectType);

function handleSelect(evt) {
  console.log(evt.target.value);
  if (evt.target.value === "Show all") {
    url = `https://web35mm-e688.restdb.io/rest/cameras?max=19`;
  } else {
    url = `https://web35mm-e688.restdb.io/rest/cameras?max=19&q={"level":"${evt.target.value}"}`;
  }
  getData();
}

function handleSelectFormat(evt) {
  console.log(evt.target.value);
  if (evt.target.value === "Show all") {
    url = `https://web35mm-e688.restdb.io/rest/cameras?max=19`;
  } else {
    url = `https://web35mm-e688.restdb.io/rest/cameras?max=19&q={"format":"${evt.target.value}"}`;
  }
  getData();
}

function handleSelectType(evt) {
  console.log(evt.target.value);
  if (evt.target.value === "Show all") {
    url = `https://web35mm-e688.restdb.io/rest/cameras?max=19`;
  } else {
    url = `https://web35mm-e688.restdb.io/rest/cameras?max=19&q={"type":"${evt.target.value}"}`;
  }
  getData();
}

/*API key*/
const options = {
  headers: {
    "x-apikey": "603254a35ad3610fb5bb646f",
  },
};

function getData() {
  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })

    .then((data) => {
      // console.log(data);
      handleData(data);
    })
    .catch((e) => {
      console.error("an error occured:", e.message);
    });
}

getData();

function handleData(data) {
  console.log(data);
  document.querySelector(".products").innerHTML = "";
  data.forEach(showProduct);
}

function showProduct(product) {
  //grab the template
  const template = document.querySelector("#cameraTemplate").content;
  //clone it
  const copy = template.cloneNode(true);
  //change the content
  copy.querySelector(".cameraName").textContent = product.cameraName;
  copy.querySelector(".format").textContent = product.format;
  copy.querySelector(".level").textContent = product.level;
  copy.querySelector("img.cameraimg").src = `https://web35mm-e688.restdb.io/media/${product.img}?s=w`;

  //grab the parent
  const parent = document.querySelector(".products");
  //append
  parent.appendChild(copy);
}


/*MENU*/
function menuToggle() {
  var nav = document.getElementById("menu-overlay");
  nav.classList.toggle("active");
  var nav = document.getElementById("toggleIcon");
  nav.classList.toggle("active");
}
