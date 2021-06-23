<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>projeto agenda</title>
  
    <link rel="stylesheet" href="src/css/style.css">
 
    
</head>
<body>
<section class="content">
<div class="box_form">
<h1>Agenda:</h1>


<form  id ="form1"  action ="script.js" method="POST" name="formulario"  >
<label for="busca">Buscar</label> <br>

<input  id = "busca" type="text "  placeholder="buscar pelo nome">  <img id =icone  src= "src/img/icones.svg"> </img>

</span>  <br><br>
<label for="name">Nome</label><br>
<input  id = "nome" type="text "  placeholder="nome"> <br><br>
<label for="telefone">telefone</label><br>
<input id="tel" type="text " placeholder="telefone"> <br><br>
<label for="email">email</label><br>
<input id = "email" type="text " placeholder="email"> <br><br>
<label for="endereco">endereco</label><br>
<input id = "endereco" type="text " placeholder="endereco">  <br><br>
<input type="submit" form="form1" class="btn-sub" value="enviar" > <br><br>
</form>
</div>

		<div class="box_comment">
			
		</div>
</section>

</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script src= "src/js/script.js"> </script>

</html>