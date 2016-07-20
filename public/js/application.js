$(document).ready(function() {
  console.log('READY');
  getNewTodosForm();
  postNewTodo();
});

function getNewTodosForm() {
  // console.log('inside new form function');
  $('#new-todo-form').on('click', function(event) {
    // console.log('event', event);
    event.preventDefault();
    // console.log("prevented default!");
    $.ajax({
      url: '/todos/new',
      method: 'GET'
    })
    .done(function(serverData){
      // console.log(serverData);
      // hide link for new form
      $(this).hide();
      // show the form
      $('#new-todo').append(serverData);
    })
    .fail(function(serverData){
      console.log('failing')
    })
  });
};

function postNewTodo() {
  $('#new-todo').on('submit', 'form', function(event) {
    event.preventDefault();
    // console.log('prevented submit!', this)
    var formData = $('#new-todo form').serialize();
    // console.log(formData);

    $.ajax({
      url: '/todos',
      method: 'POST',
      data: formData
    })
    .done(function(serverData) {
      // console.log('server data', serverData)
      $('.todos').append(serverData);
    })
    .fail(function(serverData) {
      console.log('failing!')
    })
  });
};