/**
 * Created by fabiano on 09/05/2017.
 */
function calcula(){
    var r = document.getElementById("raio").value;
    var a = Math.PI*r*r;
    var c = 2*Math.PI*r;

    document.getElementById("area").value = a.toFixed(2);
    document.getElementById("perimetro").value = c.toFixed(2);
}
