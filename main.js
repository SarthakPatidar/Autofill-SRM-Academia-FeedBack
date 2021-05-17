(function () {
  let rows = document.querySelectorAll("table.zc-subformcontent tr.zc-grid-subform");
  for (let i = 1; i <= rows.length; i++) {
    let tr = rows[i];
    if (!tr) continue;

    for (let j = 2; j <= tr.cells.length; j++) {
      const optionEl = tr.querySelectorAll('td li.search-selected-val')[j]

      if (typeof (optionEl) == 'undefined' || optionEl == null) continue;

      const remarks = [
        { name: "Average", code: "2727643000027208373" },
        { name: "Excellent", code: "2727643000027208389" },
        { name: "Good", code: "2727643000027208377" },
        { name: "Poor", code: "2727643000027208369" },
        { name: "Very Good", code: "2727643000027208385" },
      ]

      const randomRemark = remarks[Math.floor(Math.random() * remarks.length)]

      optionEl.setAttribute("selvalue", randomRemark.code);
      optionEl.querySelector("span").innerHTML = randomRemark.name;
      optionEl.querySelector("input").setAttribute("value", randomRemark.code);
    }

    let commentEl = tr.querySelector('td textarea.zc-gridsubform-input');
    if (commentEl) { commentEl.innerHTML = "Good Teacher" };
  }
})();
