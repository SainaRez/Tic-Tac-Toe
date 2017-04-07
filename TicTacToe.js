
var currentState = true;
var clickCounter = 0;

function clickableGrid(rows, cols, callback) {
    var i = 0;
    var board = document.getElementById("board");
    var grid = document.createElement('table');
    grid.className = 'grid';

    function setCell(elem) {
        if (!elem.hasClass("deactive")) {
            clickCounter++;
            if (currentState) {
                elem.text("X");
            }
            else {
                elem.text("O");
            }
            elem.addClass("deactive");
            currentState = !currentState;
            if ((rows * cols) === clickCounter) {
                setTimeout(showAlert, 500);

                function showAlert() {
                    if (confirm("Game Over\nDo you want to play again?")) {
                        restart();
                    }
                }

                //alert("Game Over");
                //$("#message").text("Game Over");

            }
        }
    }

    for (var r = 0; r < rows; ++r) {
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c = 0; c < cols; ++c) {
            var cell = document.createElement('td');
            tr.appendChild(cell);
            $(cell).addClass("cell");
            console.log($(cell));
        }
    }
    board.appendChild(grid);
    $("td").on("click", function () {
        console.log("clicked");
        setCell($(this));

    });
    return grid;
}

function restart(){
    clickCounter = 0;
    currentState = true;
    $("td").each(function(){
        $(this).text(" ");
        $(this).removeClass("deactive");
    });
}




clickableGrid(3, 3, function (a, b, c, d) {
    console.log("clicked!");
});