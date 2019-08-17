$("#btnAllPokestop").click(function () {
    console.log('Button pokestop clicked!');
    event.preventDefault();
    $.ajax({
        type: "get",
        url: "/getAllPokestop",
        dataType: "json",
        success: function (response) {

            if (response.err) {
                console.log("Get pokestop failed!");
            }
            else {
                var divId = $("#AllPokestopModal-body");
                console.log(response[0]);
    

                var result = "";
                divId.empty();

                response.forEach(function (pokestop) {
                    result = '<div style="border-bottom: solid" class="col-lg-3 col-sm-6 center" id="' + pokestop._id + '"><p style="width:180px">Name: '+pokestop.name+'</p><br><p>Vị trí X: '
                    +pokestop.coordinatesX+'</p><br><p style="margin-bottom:20px">Vị trí Y: '+pokestop.coordinatesY+'</p> '+' </div>';

                    divId.append(result);
    
                });
                $('#AllPokestopModal').modal('show');
            }

        },
        error: function (response) {
            console.log(response);
        }
    });
});