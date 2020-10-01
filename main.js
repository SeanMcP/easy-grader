(() => {
  const usp = new URLSearchParams(location.search);
  // Places is special because it can be zero
  const places = parseInt(usp.get("places"));
  const params = {
    places: places === 0 ? places : places || 2,
    problems: parseFloat(usp.get("problems")) || 17,
    step: parseFloat(usp.get("step")) || 0.5,
  };

  // Update values in DOM
  document.querySelector('input[name="problems"]').value = params.problems;
  document.querySelector('input[name="places"]').value = params.places;
  document.querySelector('input[name="step"]').value = params.step;

  let output = "";

  for (let i = params.problems; i >= 0; i -= params.step) {
    output += `<tr>
        <td>${i}/${params.problems}</td>
        <td>${((100 * i) / params.problems).toFixed(params.places)}%
            </td>
    </tr>`;
  }

  document.getElementById("output").innerHTML = output;
})();

(() => {
  const toggle = document.querySelector("#dark-mode-toggle > input");
  const label = document.querySelector("#dark-mode-toggle > span");
  const prefersDarkMode = JSON.parse(localStorage.getItem("dark-mode"));

  function setDarkMode() {
    label.textContent = "🌞";
    label.setAttribute("aria-label", "Switch to light mode");
    document.body.setAttribute("data-theme", "dark");
  }

  function setLightMode() {
    label.textContent = "🌛";
    label.setAttribute("aria-label", "Switch to dark mode");
    document.body.removeAttribute("data-theme");
  }

  if (prefersDarkMode) {
    toggle.checked = true;
    setDarkMode();
  } else {
    setLightMode();
  }

  toggle.addEventListener("change", () => {
    localStorage.setItem("dark-mode", JSON.stringify(toggle.checked));

    if (toggle.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  });
})();
