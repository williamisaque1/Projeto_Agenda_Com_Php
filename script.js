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
    $(".box_comment").html("");
    exibir();
  });
});
function deletar(id) {
  $.ajax({
    url: "https://localhost/projeto_agenda/deletar.php",
    method: "POST",
    data: {
      ids: id,
    },
    dataType: "json",
  }).done(function (resultado, data) {
    console.log(resultado);
    console.log("resultado do deletar " + data);
    exibir(id);
  });

  console.log("eu fui apertado meu id é : " + id);
}
function exibir() {
  $.ajax({
    url: "https://localhost/projeto_agenda/exibir.php",
    method: "GET",
    dataType: "json",
  }).done(function (resultado) {
    console.log(resultado);
    if (resultado === "Nenhum comentário encontrado") {
      $(".box_comment").html('<div class="b_comm"><h4>' + resultado + "</h4>");
    } else {
      $(".box_comment").html("");
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

exibir();
