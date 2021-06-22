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
  console.log("-----------");

  //$(".estado").val();
  var textoUsr = prompt("digite o " + $(".estado").val());
  console.log($(".estado").val());
  console.log("id: " + id);
  $.ajax({
    url: "https://localhost/projeto_agenda/exibir.php",
    method: "GET",
    dataType: "json",
  }).done(function (resultado) {
    for (var i = 0; i < resultado.length; i++) {
      if (resultado[i].id == id) {
        console.log(resultado[i].id + " " + id + "ZZ" + i);
        $.ajax({
          url: "https://localhost/projeto_agenda/modificar.php",
          method: "POST",
          data: {
            nome: resultado[i].nome,
            telefone: resultado[i].telefone,
            email: resultado[i].email,
            endereco: resultado[i].endereco,
            ids: resultado[i].id,
            opcaoUsuario: $(".estado").val(),
            textoUsr: textoUsr,
          },
          dataType: "json",
        }).done(function (resultado, data) {
          console.log("recebi algo " + resultado);
        });
      }
    }
  });
}

/*
  $(".estado").change(function (acao) {
    //prompt("digi");
    editar(resultado[0].nome);
    */

/*
  // prompt("digite ");
  var nome = $("#nome").val();
  var telefone = $("#tel").val();
  var email = $("#email").val();
  var endereco = $("#endereco").val();

  $.ajax({
    url: "https://localhost/projeto_agenda/deletar.php ",
    method: "POST",
    data: {
      ids: id,
    },
    dataType: "json",
  }).done(function (resultado, data) {});
  */

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
            '<select  class= "estado";   onchange= "editar(' +
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

      // $("#icone").click(buscar(resultado));

      $("#icone").on("click", function () {
        //prompt("digi");
        buscar(resultado);
      });
    }
  });
}

exibir();
