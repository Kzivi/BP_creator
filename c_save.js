var js_sn_bp = document.getElementById("sn_bp").value;
var js_worker = document.getElementById("h_worker_l").value;
var js_bp_power = document.getElementById("s_power").value;
var js_bp_amount = document.getElementById("h_amount").value;
var x = 1;
var y = 1;
var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
var formattedDate = year + "-" + month + "-" + day;

var db_output = "INSERT INTO db_packets(SN, Data, Operator, S ";
for (y; y <= js_bp_amount; y++) {
  db_output = db_output + ", Cell" + y;
}
db_output = db_output + ") VALUES ";
y = 1;

for (x; x <= js_bp_power; x++) {
  db_output =
    db_output +
    "('" +
    js_sn_bp +
    "',' " +
    formattedDate +
    "','" +
    js_worker +
    "','" +
    x;
  for (y; y <= js_bp_amount; y++) {
    var cell = [x, y];
    cell = document.getElementById("cell" + x + "x" + y).value;
    db_output = db_output + "','" + cell;
  }
  db_output = db_output + "')";
  if (x < js_bp_power) {
    db_output = db_output + ",";
  }
  y = 1;
}
db_output = db_output + ";";
console.log(db_output);

if (js_sn_bp != "" && js_worker != "") {
  $.ajax({
    url: "to_db.php",
    type: "POST",
    data: { db_output: db_output },
    async: false,
    success: function (data) {
      console.log(data);
      window.location.reload();
    },
  });
} else {
  var s_fb = document.getElementById("save_log"); //Identyfikacja elementu wyświetlającego
  s_fb.innerHTML = "Brak SN lub Operatora!"; //Wyświetlenie
}
