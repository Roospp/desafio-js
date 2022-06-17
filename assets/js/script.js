function calcular() {
    const c = document.getElementById("cantidad");
    const color = document.getElementById("color");
    let t = document.querySelector(".total");
    t.innerHTML = "Total: $" + c.value * 400;
    let ct = document.querySelector(".totalcantidad");
    ct.innerHTML = "Cantidad: " + c.value;
    let cl = document.querySelector(".box");
    cl.style.backgroundColor = color.value;

}