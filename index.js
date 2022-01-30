const grid = document.getElementById("theGrid");

const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    alert(error);
  }
};

const renderTests = async () => {
  const testimonies = await fetchData("./data.json");

  grid.innerHTML = testimonies.users
    .map(
      (user) =>
        `<div class="testimony">
            <div class="details">
                <img src=${user.src} alt="">
                <div class='name'>
                    <h3>${user.name}</h3>
                    <p>Verified Graduate</p>
                </div>
            </div>
            <div class="test">
                <h2>${user.summary}</h2>
                <p class="full">" ${user.testimony} "</p>
            </div>
        </div>`
    )
    .join("");
};

renderTests();
