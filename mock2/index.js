document.querySelector("#pagiDiv").addEventListener("click", async (e) => {
  let page = e.target.innerText;
  const url = `https://www.balldontlie.io/api/v1/players?page=${page}&per_page=10`;
  let data = await fetch(url);
  data = await data.json();
  display(data.data);
});

document.getElementById("buton").addEventListener("click", filter);

async function filter() {
  let name = document.getElementById("search").value;
  const url = `https://www.balldontlie.io/api/v1/players?search=${name}&page=0&per_page=10`;
  let data = await fetch(url);
  data = await data.json();
  display(data.data);
}

async function getData() {
  const url = "https://www.balldontlie.io/api/v1/players?page=0&per_page=10";
  let data = await fetch(url);
  data = await data.json();
  display(data.data);
}
getData();

function display(data) {
  document.getElementById("container").innerHTML = "";
  data.forEach((ele, index) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src =
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg";
    image.style.width = "100%";
    image.style.height = "200px";

    let name = document.createElement("p");
    name.innerText = ele.first_name + " " + ele.last_name;

    let position = document.createElement("p");
    position.innerText = ele.position;

    let button = document.createElement("button");
    button.innerText = "TEAM DETAILS";
    button.style.backgroundColor = "tomato";
    button.style.border = "0";
    button.style.cursor = "pointer";
    button.style.padding = "5px 10px";
    button.addEventListener("click", () => {
      // localStorage.setItem("player",JSON.stringify(ele))
      document.getElementById("modal").innerHTML = "";

      let div1 = document.createElement("div");

      let close = document.createElement("button");
      close.innerText = "Close";
      close.style.cursor = "pointer";
      close.addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
      });

      let title = document.createElement("h2");
      title.innerText = "TEAM DETAILS";

      let teamname = document.createElement("p");
      teamname.innerText = "Team Name" + ": " + ele.team.name;

      let abb = document.createElement("p");
      abb.innerText = "Abb" + ": " + ele.team.abbreviation;

      let conference = document.createElement("p");
      conference.innerText = "Conference" + ": " + ele.team.conference;

      let division = document.createElement("p");
      division.innerText = "Division" + ": " + ele.team.division;

      let city = document.createElement("p");
      city.innerText = "City" + ": " + ele.team.city;

      div1.append(title, teamname, abb, conference, division, city, close);
      div1.style.textAlign = "center";
      document.getElementById("modal").append(div1);
      document.getElementById("modal").style.display = "block";
    });

    div.append(image, name, position, button);
    document.getElementById("container").append(div);
  });
}
