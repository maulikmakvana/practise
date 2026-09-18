let subtotal = 0;
let discountTotal = 0;

function addItem() {

    let name = document.getElementById("name").value;
    let qty = Number(document.getElementById("qty").value);
    let price = Number(document.getElementById("price").value);
    let discount = Number(document.getElementById("discount").value) || 0;

    if (name == "" || qty <= 0 || price <= 0) {
        alert("Please enter valid details");
        return;
    }

    let total = qty * price;
    let discountAmount = total * discount / 100;

    subtotal += total;
    discountTotal += discountAmount;

    document.getElementById("list").innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${qty}</td>
            <td>₹${price}</td>
            <td>₹${total - discountAmount}</td>
        </tr>
    `;

    let gst = (subtotal - discountTotal) * 18 / 100;
    let grand = subtotal - discountTotal + gst;

    document.getElementById("subtotal").innerText = subtotal;
    document.getElementById("discountTotal").innerText = discountTotal;
    document.getElementById("gst").innerText = gst;
    document.getElementById("grand").innerText = grand;

    document.getElementById("name").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("price").value = "";
    document.getElementById("discount").value = "";
}

function reset() {

    subtotal = 0;
    discountTotal = 0;

    document.getElementById("list").innerHTML = "";

    document.getElementById("subtotal").innerText = 0;
    document.getElementById("discountTotal").innerText = 0;
    document.getElementById("gst").innerText = 0;
    document.getElementById("grand").innerText = 0;
}