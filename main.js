

let users = [];

function renderUsers() {
  let source = $('#user-template').html();

  let template = Handlebars.compile(source);

  users.forEach((user) => {
    let html = template(user)
    $('.github-users').append(html);
  })
}

renderUsers();