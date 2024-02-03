function confirmPurchase(columnIndex, buttonId) {
    var confirmation = confirm("Вы уверены, что хотите купить билет?");
    if (confirmation) {
        var table = document.getElementById("movieTable");
        var rows = table.getElementsByTagName("tr");

        for (var i = 1; i < rows.length; i++) {
            var cells = rows[i].getElementsByTagName("td");
            cells[columnIndex].classList.add("bought");
            document.getElementById(buttonId).style.display = "none";
        }
    }
}