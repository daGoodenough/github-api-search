

let users = [];

function addUser (user) {
  //add user to users array
  //if array is certain length cut some off the end
}

function fetch(query) {//finish ajac
  $.ajax({
    method: "GET",
    success: function (data) {
      addUser(data);
    },
    error: function() {

    }
  })
}

$('#search').click(function () {
  let searchVal = $('#search-bar').val();
  
  fetch(searchVal);
})

function renderUsers() {
  let source = $('#user-template').html();

  let template = Handlebars.compile(source);

  users.forEach((user) => {
    let html = template(user)
    $('.github-users').append(html);
  })
}

renderUsers();