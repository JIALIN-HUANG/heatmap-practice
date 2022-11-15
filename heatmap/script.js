//link to my csv 
function preload() {
    table = loadTable("./tripdata.csv", "csv", "header");
  }

  function planet(x, y, r = 30) {
    push();
    translate(x, y);
    rowNum = table.getRowCount();
    n = floor(random(rowNum));

    let StartStation = table.getString(n, 4);
    let endStation = table.getString(n, 8);
   
    let elem = document.getElementById("para");
    elem.innerHTML =
      "StartStation: " + StartStation + ", " + "endStation " + endStation;
    
    }