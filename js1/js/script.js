
window.onload = function(){
  for(i=1;i<11;i++){
    var table = document.createElement("TABLE");
    document.body.appendChild(table);
    var cab = document.createElement("TH");
    cab.colSpan = 2;
    var c = document.createTextNode("Produtos de "+ i);
    cab.appendChild(c);
    table.appendChild(cab);
    for(j=1;j<11;j++){
      var row = document.createElement("TR");
      table.appendChild(row);
      var col = document.createElement("TD");
      var t = document.createTextNode(i+"x"+j);
      col.appendChild(t);
      row.appendChild(col);
      col = document.createElement("TD");
      t = document.createTextNode(i*j);
      col.appendChild(t);
      row.appendChild(col);

    }
  }
}
