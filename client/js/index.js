$(document).ready(() => {

  const api = 'http://localhost:8080';
  const init = () => {
    $("#submit").click(() => { search() });
  };

  const search = () => {
    const keyword = $("#keyword").val();
    $.get(`${api}/search`, { keyword }, (data) => {
      displayRecords(data);
    });
  };

  const displayRecords = (data) => {
    $('#results').empty();
    let row = null;
    data.forEach((item) => {
      row = $('<tr>').addClass('bar');
      row.append(`<td>${item.ID}<td>`);
      row.append(`<td>${item.city}<td>`);
      row.append(`<td>${item.name}<td>`);
      row.append(`<td>${item.state}<td>`);
      $('#results').append(row);
    });
  };

  init();

});