const Navbar = () => {
  const handleTheme = (e) => {
    let rootColor = document.documentElement;
    // console.log(rootColor);
    let moon = document.querySelector(".moon");
    let lightMoon = document.querySelector(".light-moon");
    moon.classList.toggle("hidden");
    lightMoon.classList.toggle("hidden");

    if (!lightMoon.classList.contains("hidden")) {
      rootColor.style.setProperty("--element-color", "hsl(0, 0%, 100%)");
      rootColor.style.setProperty("--main-bg-color", "hsl(0, 0%, 98%)");
      rootColor.style.setProperty("--main-txt-color", "hsl(200, 15%, 8%)");
    } else {
      rootColor.style.setProperty("--element-color", "hsl(209, 23%, 22%)");
      rootColor.style.setProperty("--main-bg-color", "hsl(207, 26%, 17%)");
      rootColor.style.setProperty("--main-txt-color", "hsl(0, 0%, 100%)");
    }
  };

  return (
    <div className="navbar">
      <h1>Where in the world?</h1>
      <div className="darkTheme" onClick={handleTheme}>
        <svg
          className="moon "
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <path d="M224.30762,150.29346a8.00288,8.00288,0,0,0-10.01416-5.28955A84.03122,84.03122,0,0,1,111.01514,41.6377a8.00207,8.00207,0,0,0-9.96582-9.96192,100.01386,100.01386,0,1,0,123.29,123.2207A8.0018,8.0018,0,0,0,224.30762,150.29346Z"></path>
        </svg>
        <svg
          className="light-moon hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#111517"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <path
            d="M216.66238,152.64951A92.03175,92.03175,0,0,1,103.35039,39.338l.00255.00078A92.01376,92.01376,0,1,0,216.66147,152.64624Z"
            fill="none"
            stroke="#111517"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></path>
        </svg>

        <span htmlFor="moon">Dark Mode</span>
      </div>
    </div>
  );
};

export default Navbar;
