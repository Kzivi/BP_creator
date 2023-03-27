var js_bp_power = document.getElementById("s_power").value;
var js_bp_amount = document.getElementById("h_amount").value;
var x = 1;
var y = 1;

var output = "<table>";
for (x; x <= js_bp_power; x++) {
  output = output + "<tr>";
  for (y; y <= js_bp_amount; y++) {
    if (x % 2 == 0) {
      output =
        output +
        "<td class='bblack'>S" +
        x +
        "x" +
        y +
        ": <input type='text' id='cell" +
        x +
        "x" +
        y +
        "' placeholder=s/n /></td>";
    } else {
      output =
        output +
        "<td class='bred' >S" +
        x +
        "x" +
        y +
        ": <input type='text' id='cell" +
        x +
        "x" +
        y +
        "' placeholder=s/n /></td>";
    }
  }
  y = 1;
  output = output + "</tr>";
}
var bp_table = document.getElementById("h_cells");
bp_table.innerHTML = output;
