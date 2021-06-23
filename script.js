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
    alert(`contato com o id ${id} deletado com sucesso`);
    exibir();
  });
}
function buscar(result) {
  console.log("--------");
  $(".box_comment").html("");
  let aux = false;
  console.log("este é o conteudo do result", result.length);
  for (var i = 0; i < result.length; i++) {
    console.log("este é o nome do result", result[i].id);
    if (result[i].nome == $("#busca").val()) {
      console.log("este e o i", i);
      $(".box_comment").prepend(
        " '<div class=b_comm> <h2>" +
          "Pesquisa" +
          "</h2><h4>" +
          "Nome" +
          "</h4><p>" +
          result[i].nome +
          "</p> <h4 >" +
          " Telefone </h4><p>" +
          result[i].telefone +
          "</p> " +
          " <h4 >" +
          " Email </h4><p>" +
          result[i].email +
          "</p>" +
          "<h4 >" +
          "endereco </h4><p>" +
          result[i].endereco +
          "</p> </div>"
      );
      aux = true;
    }
  }
  if (aux == false) {
    alert("nao achei o contato");
  }
}

function editar(id) {
  console.log("-----------");
  $("select.estado").change(function (u) {
    console.log("evento acionado" + $("select.estado").val());
  });
  //$(".estado").val();
  var textoUsr = prompt("digite o " + $(".estado").val());
  console.log($(".estado").val());
  console.log(
    "id: " + id + "texto " + textoUsr + " op " + $("select.estado").val()
  );
  $.ajax({
    url: "https://localhost/projeto_agenda/exibir.php",
    method: "GET",
    dataType: "json",
  }).done(function (resultado1) {
    for (let i = 0; i < resultado1.length; i++) {
      if (resultado1[i].id == id) {
        console.log(resultado1[i].id + " " + id + "ZZ" + i);
        $.ajax({
          url: "https://localhost/projeto_agenda/modificar.php",
          method: "POST",
          data: {
            nome: resultado1[i].nome,
            telefone: resultado1[i].telefone,
            email: resultado1[i].email,
            endereco: resultado1[i].endereco,
            ids: resultado1[i].id,
            opcaoUsuario: $(".estado").val(),
            textoUsr: textoUsr,
          },
          dataType: "json",
        }).done(function (resultado2, data) {
          console.log(alert(resultado2));
          exibir();
        });
      }
    }
  });
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
            '<select  class= "estado"; onchange= "editar(' +
            resultado[i].id +
            ')" > ' +
            "<option  selected >escolha um campo para editar</option>" +
            '<option value="nome"  >Nome</option>' +
            '<option value="telefone" >Telefone</option>' +
            ' <option value="email">Email</option>' +
            ' <option value="endereco">Endereco</option>' +
            "</select>" +
            '<button id=deletar onclick = "deletar(' +
            resultado[i].id +
            ')"> deletar </button>  </div>'
        );
      }
      $("#icone").on("click", function () {
        buscar(resultado);
      });
    }
  });
}

exibir();
