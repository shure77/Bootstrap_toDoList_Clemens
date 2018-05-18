$(document).ready(function () {
    $("#addItemRow").click(function () {
        $("#todoListTable").append(addDataRow());
        $("#addItemRowTitle").val("");
        $("#addItemRowContent").val("");
        $(".removeItemRow").click(function () {
            //this zeigt auf den Button removeItemRow, .parents("tr:first")[0].remove() löscht das erste Parent mit tr-Tag
            $(this).parents("tr:first")[0].remove();
        });
    });
});

