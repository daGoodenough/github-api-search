let source = $('#user-template').html();

let template = Handlebars.compile(source);

let html = template({name: "user", profileURL: "https://avatars.githubusercontent.com/u/1733610?v=4"})

console.log(html)

$('.github-users').append(html)
$('.github-users').append(html)
$('.github-users').append(html)
$('.github-users').append(html)