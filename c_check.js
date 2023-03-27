var js_bp_power = document.getElementById("s_power").value;
var js_bp_amount = document.getElementById("h_amount").value;
var x = 1;
var y = 1;
var a = 1;
var b = 1;
var i = 1;
var j = 1;
var feedback = "";

function getCookieValue(cookieName) {
  const cookieParts = document.cookie.split(";");
  for (let i = 0; i < cookieParts.length; i++) {
    const cookieKeyValue = cookieParts[i].split("=");
    if (cookieKeyValue[0].trim() === cookieName) {
      return cookieKeyValue[1];
    }
  }
  return "";
}

if (getCookieValue("usermail")) {
  if (getCookieValue("userper")) {
    console.log("Ciasteczko znalezione");
    // Użycie funkcji do odczytu wartości parametrów
    var email = getCookieValue("usermail");
    document.getElementById("h_worker_l").value = email;
  }
}

for (x - 1; x <= js_bp_power; x++) {
  for (y - 1; y <= js_bp_amount; y++) {
    var cell = document.getElementById("cell" + x + "x" + y).value;
    var db_check = "SELECT result FROM celltest WHERE serial='" + cell + "';";
    console.log(db_check);
    //
    $.ajax({
      url: "c_check.php",
      type: "POST",
      data: { db_check: db_check },
      dataType: "json", // Ustawienie typu danych na JSON
      async: false,
      success: function (response) {
        console.log(response);
        var test = response.fb; // Pobranie wartości zmiennej fb z odpowiedzi JSON
        if (test != "") {
          feedback = feedback + "</br> Cell S:" + x + "x" + y + ": " + test;
        }
        console.log("FB: " + feedback);
      },
    });
    //
  }
  y = 1;
}
x = 1;

for (a - 1; a <= js_bp_power; a++) {
  for (b - 1; b <= js_bp_amount; b++) {
    var cell_compare_a = document.getElementById("cell" + a + "x" + b).value;
    for (i - 1; i <= js_bp_power; i++) {
      for (j - 1; j <= js_bp_amount; j++) {
        var cell_compare_i = document.getElementById(
          "cell" + i + "x" + j
        ).value;
        if (!(i == a && j == b)) {
          if (cell_compare_a === cell_compare_i) {
            feedback = feedback + "</br> Cell S:" + i + "x" + j + " zdublowana";
          }
        } else {
        }
      }
      j = 1;
    }
    i = 1;
  }
  b = 1;
}
a = 1;

if (feedback === "") {
  feedback = "OK";
}
console.log(feedback + "przed usuwanie");

if (feedback.toString() === "OK") {
  $(".bp_form").removeClass("hidden");
  console.log("usuwanie");
} else {
  console.log("feedback!='OK'");
}

var h_fb = document.getElementById("fb_cell"); //Identyfikacja elementu wyświetlającego
h_fb.innerHTML = feedback; //Wyświetlenie
console.log("po usuwanie");
