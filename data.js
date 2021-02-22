const url = "https://web35mm-e688.restdb.io/rest/cameras?max=19";

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
    // console.log(data);
    handleData(data);
  })
  .catch((e) => {
    console.error("an error occured", e.message);
  });

function handleData(data) {
  console.log(data);
  data.forEach(showProduct); 
}

/* <template id="camera">
      <div class="products">
        <article class="camera">
          <img class="cameraimg" src="images/nikon-fm2.jpg" alt="Camera" />
          <h3 class="cameraName">NIKON FM2</h3>
          <p class="format">35mm</p>
          <p class="level">Beginner</p>
          <a href="#">Read More</a>
        </article>
      </template> */

function showProduct(product) {
  //grab the template
  const template = document.querySelector("#cameraTemplate").content;
  //clone it
  const copy = template.cloneNode(true);
  //change the content
  document.querySelector(".cameraName").textContent = product.cameraName;
  document.querySelector(".format").textContent = product.format;
  document.querySelector(".level").textContent = product.level;
  document.querySelector("img.cameraimg").src = 'img';

  //grab the parent
  const parent = document.querySelector("main");
  //append
  parent.appendChild(copy);
}
