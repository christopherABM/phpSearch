$(document).ready(() => {

  const api = 'http://localhost:8080';
  const init = () => {
    $("#submit").click(() => { search() });
    $("#keyword").on("keypress", (e) => { if (e.keyCode === 13) search(); });
    $('#data-content').hide();
  };

  const search = () => {
    const keyword = $("#keyword").val();
    $.get(`${api}/search`, { keyword }, (data) => {
      displayRecords(data);
    });
  };

  const displayRecords = (data) => {
    $('#data-content').show();
    $('#results').empty();
    let row = null;
    if (data.length) {
      data.forEach((item) => {
        row = $('<tr scope="row">').addClass('bar');
        row.append(`<td>${item.ID}</td>`);
        row.append(`<td>${item.name}</td>`);
        row.append(`<td>${item.city}</td>`);
        row.append(`<td>${item.state}</td>`);
        $('#results').append(row);
      });
      return
    }
    $('#results').append(`<td class="table-warning text-center" colspan="4"> <i class="fa fa-exclamation-circle" aria-hidden="true"></i> Sorry we found nothing, try another keyword</td>`);

  };

  init();

});