counter = 0;

function addDataRow() {
    counter = counter + 1;
    title = $("#addItemRowTitle").val();
    content = $("#addItemRowContent").val();
    checkbox = '<input type="checkbox" class="align - middle" style="margin - left: 15px" aria-label="Checkbox for following text input">';
    button = '<button type="button" class="btn btn-secondary btn-outline-primary" id="addItemRow">Add</button>';
    deleteBtn = '<button type="button" class="removeItemRow btn btn-secondary btn-outline-primary">Delete</button>';
    return "<tr><td>" + title + "</td> <td>" + content + "</td> <td>" + checkbox + "</td> <td>" + button + deleteBtn + "</td></tr>";
}

