$("#form1").submit(function (e) {
  e.preventDefault();
  var nome = $("#nome").val();
  var telefone = $("#tel").val();
  var email = $("#email").val();
  var endereco = $("#endereco").val();
  /*console.log(
    "resultado " + $nome + " " + $telefone + " " + $email + " " + $endereco
  );*/
  $.ajax({
    url: "https://localhost/projeto_agenda/adicionar.php",
    method: "POST",
    data: {
      nome: nome,
      telefone: telefone,
      email: email,
      endereco: endereco,
    },
    dataType: "json",
  }).done(function (resultado, data) {
    $("#nome").val("");
    $("#tel").val("");
    $("#email").val("");
    $("#endereco").val("");
    console.log(resultado);
    console.log(data);
    getComments();
  });
});
function deletar(id) {
  console.log("eu fui apertado meu id é : " + id);
}

function getComments() {
  // console.log("aki" + $email);
  $.ajax({
    url: "https://localhost/projeto_agenda/exibir.php",
    method: "GET",
    dataType: "json",
  }).done(function (resultado) {
    console.log(resultado);
    if (resultado === "Nenhum comentário encontrado") {
      $(".box_comment").prepend(
        '<div class="b_comm"><h4>' + resultado + "</h4>"
      );
    } else {
      for (var i = 0; i < resultado.length; i++) {
        $(".box_comment").prepend(
          '<div class="b_comm"><h4>' +
            "Nome" +
            "</h4><p>" +
            resultado[i].nome +
            "</p> <h4 >" +
            " Telefone </h4><p>" +
            resultado[i].telefone +
            "</p> " +
            " <h4 >" +
            " Email </h4><p>" +
            resultado[i].email +
            "</p>" +
            "<h4 >" +
            "endereco </h4><p>" +
            resultado[i].endereco +
            "</p> " +
            " <button onclick = 'deletar(" +
            resultado[i].id +
            ")' style= 'width:70px ; border-radius: 10px'> deletar </button> </div>"
        );
      }
    }
  });
}

getComments();
/*
$("#form1").submit(function (e) {
  e.preventDefault();

  var u_name = $("#name").val();
  var u_comment = $("#comment").val();

  //console.log(u_name, u_comment);
  $.ajax({
    url: "http://localhost/PROJS/VIDEO_AULAS/SERIE/03_AJAX_e_PHP/inserir.php",
    method: "POST",
    data: { name: u_name, comment: u_comment },
    dataType: "json",
  }).done(function (result) {
    $("#name").val("");
    $("#comment").val("");
    console.log(result);
    getComments();
  });
});

function getComments() {
  $.ajax({
    url: "http://localhost/PROJS/VIDEO_AULAS/SERIE/03_AJAX_e_PHP/selecionar.php",
    method: "GET",
    dataType: "json",
  }).done(function (result) {
    console.log(result);

    for (var i = 0; i < result.length; i++) {
      $(".box_comment").prepend(
        '<div class="b_comm"><h4>' +
          result[i].name +
          "</h4><p>" +
          result[i].comment +
          "</p></div>"
      );
    }
  });
}

getComments();
*/
