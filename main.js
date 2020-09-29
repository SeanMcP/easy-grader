(() => {
  const usp = new URLSearchParams(location.search);
  const params = {
    places: parseFloat(usp.get("places")) || 2,
    problems: parseFloat(usp.get("problems")) || 17,
    step: parseFloat(usp.get("step")) || 0.5,
  };

  // Update values in DOM
  document.querySelector('input[name="problems"]').value = params.problems;
  document.querySelector('input[name="places"]').value = params.places;
  document.querySelector('input[name="step"]').value = params.step;

  let output = "";

  for (let i = params.problems; i >= 0; i -= params.step) {
    // output += `<li>${i}/${params.problems} or ${(
    //   (100 * i) /
    //   params.problems
    // ).toFixed(params.places)}%</li>`;
    output += `<tr>
        <td>${i}/${params.problems}</td>
        <td>${((100 * i) / params.problems).toFixed(params.places)}%
            </td>
    </tr>`;
  }

  document.getElementById("output").innerHTML = output;
})();
