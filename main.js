

let users = [];
let maxLength = 8;

function addUser (user) {
 let userInfo = {
  name: user.author.login || null,
  profileURL: user.author.avatar_url || null
 }
 users.unshift(userInfo);
 if(users.length > maxLength) {
  users.pop();
 }
 renderUsers();
}

function fetch(query) {//finish ajac
  $.get("https://api.github.com/repos/facebook/react/commits/" + query, function (data) {
    addUser(data);
  })
}

$('#search').click(function () {
  let searchVal = $('#search-bar').val();
  
  fetch(searchVal);
})

function renderUsers() {
  $('.github-users').empty();

  let source = $('#user-template').html();

  let template = Handlebars.compile(source);

  users.forEach((user) => {
    let html = template(user)
    $('.github-users').append(html);
  })
}

renderUsers();