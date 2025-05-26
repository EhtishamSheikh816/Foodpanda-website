const pakistanCities = [
  { cityName: "Karachi", image: "/images/karachi.jpg" },
  { cityName: "Lahore", image: "/images/lahore.jpg" },
  { cityName: "Faisalabad", image: "/images/faisalabad.jpg" },
  { cityName: "Rawalpindi", image: "/images/rawalpindi.jpg" },
  { cityName: "Murree", image: "/images/murree.jpg" },
  { cityName: "Gujranwala", image: "/images/gujranwala.jpg" },
  { cityName: "Abottabad", image: "/images/abottabad.jpg" },
  { cityName: "Quetta", image: "/images/quetta.jpg" },
  { cityName: "Islamabad", image: "/images/islamabad.jpg" },
  { cityName: "Mangla", image: "/images/mangla.jpg" },
  { cityName: "Bahawalpur", image: "/images/bahawalpur.jpg" },
  { cityName: "Sargodha", image: "/images/sargodha.jpg" },
  { cityName: "Kamoke", image: "/images/kamoke.jpg" },
  { cityName: "Wahh Cannt", image: "/images/wahhCannt.jpg" },
  { cityName: "Rahim Yar Khan", image: "/images/rahimYarKhan.jpg" },
  { cityName: "Sadiqabad", image: "/images/sadiqabad.jpg" },
  { cityName: "Sahiwal", image: "/images/sahiwal.jpg" },
  { cityName: "Mardan", image: "/images/mardan.jpg" },
  { cityName: "Larkana", image: "/images/larkana.jpg" },
  { cityName: "Jhelum", image: "/images/jhelum.jpg" },
  { cityName: "Dera Ghazi", image: "/images/DeraGhaziKhan.jpg" },
  { cityName: "Pano Aqil", image: "/images/panoAqil.jpg" },
];
pakistanCities.forEach((city) => {
  const getCitySec = document.querySelector("#citySec");
  getCitySec.innerHTML += `<div class="cityCard">
          <img src=${city["image"]} alt="City Image" />
          <p>${city["cityName"]}</p>
    </div>`;
});

const logIn = () => {
  location.href = "/login.html";
};

const signUp = () => {
  location.href = "/signUp.html";
};

const authentication = () => {
  location.href = "/authentication.html";
};
