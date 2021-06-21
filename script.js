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
    console.log("resultado do deletar   " + data);
    exibir();
  });

  console.log("eu fui apertado meu id é : " + id);
}
function buscar(result) {
  var aux = false;
  console.log("--------");
  $(".box_comment").html("");

  result.forEach(function (elemento) {
    if (elemento.nome == $("#busca").val()) {
      $(".box_comment").prepend(
        " '<div class=b_comm> <h2>" +
          "Pesquisa" +
          "</h2><h4>" +
          "Nome" +
          "</h4><p>" +
          elemento.nome +
          "</p> <h4 >" +
          " Telefone </h4><p>" +
          elemento.telefone +
          "</p> " +
          " <h4 >" +
          " Email </h4><p>" +
          elemento.email +
          "</p>" +
          "<h4 >" +
          "endereco </h4><p>" +
          elemento.endereco +
          "</p> </div>"
      );

      console.log(elemento.nome);
      console.log("dentro do for " + aux);

      aux = true;
      console.log("dentro do for após " + aux);
    }
  });
  if (aux == false) {
    console.log("dentro do if " + aux);
    alert("nao achei o contato");
    aux = true;
  }
}

function editar(id) {
  $.ajax({
    url: "https://localhost/projeto_agenda/deletar.php",
    method: "POST",
    data: {
      ids: id,
    },
    dataType: "json",
  }).done(function (resultado, data) {});
}
function exibir() {
  $.ajax({
    url: "https://localhost/projeto_agenda/exibir.php",
    method: "GET",
    dataType: "json",
  }).done(function (resultado) {
    console.log(resultado);
    // ou for ( i == 0)
    if (resultado === "Nenhum contato encontrado") {
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
            " <button id = " +
            "editar onclick = 'editar(" +
            resultado[i].id +
            ")' > Editar </button>  <button id=deletar onclick = 'deletar(" +
            resultado[i].id +
            ")'> deletar </button>  </div>"
        );
      }
      // $("#icone").click(buscar(resultado));
      $("#icone").on("click", function () {
        //prompt("digi");
        buscar(resultado);
      });
    }
  });
}

exibir();
