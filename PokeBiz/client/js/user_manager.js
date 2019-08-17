$("#btnAllUser").click(function () {
    console.log('Button user clicked!');
    event.preventDefault();
    $.ajax({
        type: "get",
        url: "/getAllUser",
        dataType: "json",
        success: function (response) {

            if (response.err) {
                console.log("Get user failed!");
            }
            else {
                var divId = $("#AllUserModal-body");
                console.log(response[0]);
    

                var result = "";
                divId.empty();

                response.forEach(function (user) {
                    if(user.role==0)
                    {
                        result = '<div class="col-lg-3 col-sm-6 center" id="' + user._id + '"><img height="116px" width="116px" src="'+user.imageURL+'"><br><p>Username: '
                        +user.username+'<br><div style="margin-bottom:2%" class="profile-userbuttons">' +'<button type="button" onclick=detailUser("' + user._id + '") class="btn btn-success btn-sm">Detail</button> '+' <button type="button" onclick=deleteUser("' + user._id + '") class="btn btn-success btn-sm">Delete</button> '+' </div>';
    
                        divId.append(result);
                    }
                });
                $('#AllUserModal').modal('show');
            }

        },
        error: function (response) {
            console.log(response);
        }
    });
});
function deleteUser(id) {
    console.log('id user ' + id);
    event.preventDefault();
    var data = { 'userID': id };
    console.log(data);
    $.ajax({
        type: "get",
        url: "/deleteuser",
        data: data,
        dataType: "json",
        success: function (response) {
            
            console.log('return');

            if (response.err) {
                console.log("delete user failed!");
            }
            else {
                $('#'+ id).remove();
            }
        },
        error: function (response) {
            console.log(response);
        }
    });
};
function detailUser(id){
    event.preventDefault();
    console.log("a");
    $.ajax({
        type: "get",
        url: "/getAllUser",
        dataType: "json",
        success: function (response) {

            if (response.err || response == null) {
                console.log("Get user failed!");
            }
            else {
                var divId = $("#userModal-body");

                $("#modal-title").text('Profile')

                var result = response[0].username;
                divId.empty();
                divId.append('<div class="profile-avatar">' +
                    '<img src="'+response[0].imageURL+'" style="margin-left:32px" class="img-responsive" alt="">' +
                    '</div>'+
                    '<div style="margin-left:72px" class="profile-usertitle  margin-auto">' +
                    '<div class="profile-usertitle-name">Username: ' +
                    response[0].username +
                    '</div>' +
                    '<div class="profile-usertitle-job">' +
                    'Level: ' + response[0].level +
                    '</div>' +
                    '</div>' +
                    // '<div class="profile-userbuttons">' +
                    // '<button type="button" class="btn btn-success btn-sm">Add Friend</button>' +
                    // '</div>' +
                    '<div class="profile-usermenu">' +
                    '<ul class="nav">' +
                    '<li style="margin-left:72px;margin-right:40px">' +
                    '<a href="#">' +
                    '<i class="glyphicon glyphicon-home"></i>' +
                    'Pokemons: ' + response[0].pokemons.length +' </a>' +
                    '</li>' +
                    '<li style="margin-left:72px;margin-right:40px">' +
                    '<a href="#">' +
                    '<i class="glyphicon glyphicon-user"></i>' +
                    'Friends: ' + response[0].friends.length +' </a>' +
                    '</li>' +
                    '<li style="margin-left:72px;margin-right:40px">' +
                    '<a href="#">' +
                    '<i class="glyphicon glyphicon-ok"></i>' +
                    'Coins: ' + response[0].coins +' </a>' +
                    '</li>' +
                    '<li style="margin-left:72px">' +
                    '<a href="#">' +
                    '<i class="glyphicon glyphicon-flag"></i>' +
                    'Date joined: ' + response[0].dateJoined.substring(0, 10) +' </a>' +
                    '</li>' +
                    '</ul>' +
                    '</div>');
                // });



                $('#userModal').modal('show');
                $('#AllUserModal').modal('hide');
            }

        },
        error: function (response) {
            console.log(response);
        }
    });
};