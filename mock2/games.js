document.getElementById("buton").addEventListener("click", searchDate);

async function searchDate() {
  let start = document.getElementById("start_date").value;
  let end = document.getElementById("end_date").value;
  if (!start && !end) {
    alert("Please give start and end date properly");
  } else {
    const url = `https://www.balldontlie.io/api/v1/games?page=0&per_page=10&start_date=${start}&end_date=${end}`;
    let data = await fetch(url);
    data = await data.json();
    if (data.data.length == 0) {
      document.getElementById("container").innerHTML = "";
      let err = document.createElement("h1");
      err.innerText = "No Games Found.....";
      err.style.color = "red";
      document.getElementById("container").append(err);
    } else display(data.data);
  }
}

document.querySelector("#pagiDiv").addEventListener("click", async (e) => {
  let page = e.target.innerText;
  const url = `https://www.balldontlie.io/api/v1/games?page=${page}&per_page=10`;
  let data = await fetch(url);
  data = await data.json();
  display(data.data);
});

async function getData() {
  const url = "https://www.balldontlie.io/api/v1/games?page=0&per_page=10";
  let data = await fetch(url);
  data = await data.json();
  display(data.data);
}
getData();

function display(data) {
  document.getElementById("container").innerHTML = "";
  data.forEach((ele, index) => {
    let div = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");

    ///hometeam
    let image1 = document.createElement("img");
    image1.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk40A9mUnnb06q5kQhEcAnYF84cX4hQvM-hJFWN3sSnQ&s";
    image1.style.width = "100%";
    image1.style.height = "200px";

    let name1 = document.createElement("h2");
    name1.innerText = "Home team Name" + ": " + ele.home_team.name;

    let date1 = document.createElement("p");
    date1.innerText = "Date" + ": " + ele.date;

    let season1 = document.createElement("p");
    season1.innerText = "Season" + ": " + ele.season;

    let status1 = document.createElement("p");
    status1.innerText = "Status" + ": " + ele.status;

    let score1 = document.createElement("p");
    score1.innerText = "Home team Score" + ": " + ele.home_team_score;

    ///other team
    let image2 = document.createElement("img");
    image2.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk40A9mUnnb06q5kQhEcAnYF84cX4hQvM-hJFWN3sSnQ&s";
    image2.style.width = "100%";
    image2.style.height = "200px";

    let name2 = document.createElement("h2");
    name2.innerText = "Visitor team Name" + ": " + ele.visitor_team.name;

    let date2 = document.createElement("p");
    date2.innerText = "Date" + ": " + ele.date;

    let season2 = document.createElement("p");
    season2.innerText = "Season" + ": " + ele.season;

    let status2 = document.createElement("p");
    status2.innerText = "Status" + ": " + ele.status;

    let score2 = document.createElement("p");
    score2.innerText = "Visitor team Score" + ": " + ele.visitor_team_score;

    let vs = document.createElement("h1");
    vs.innerText = "VS";
    vs.style.marginTop = "40px";

    div1.append(image1, name1, date1, season1, status1, score1);
    div2.append(image2, name2, date2, season2, status2, score2);

    ///score comparision

    let output1 = document.createElement("h2");
    output1.innerText = "WON";
    output1.style.color = "green";

    let output2 = document.createElement("h2");
    output2.innerText = "LOST";
    output2.style.color = "red";

    let output3 = document.createElement("h2");
    output3.innerText = "TIE";
    output3.style.color = "orange";

    let output4 = document.createElement("h2");
    output4.innerText = "TIE";
    output4.style.color = "orange";

    if (Number(ele.home_team_score) > Number(ele.visitor_team_score)) {
      div1.append(output1);
      div2.append(output2);
    } else if (Number(ele.home_team_score) < Number(ele.visitor_team_score)) {
      div2.append(output1);
      div1.append(output2);
    } else {
      div2.append(output3);
      div1.append(output4);
    }

    div.append(div1, vs, div2);
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.gap = "50px";

    document.getElementById("container").append(div);
  });
}
