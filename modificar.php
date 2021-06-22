<?php




$nome = $_POST['nome'] ;
$telefone = $_POST['telefone'] ;
$email = $_POST['email'] ;
$endereco= $_POST['endereco'] ;
$id= $_POST['ids'] ;
$opcaoUsr = $_POST['opcaoUsr'] ;
$textoUsr = $_POST['textoUsr'] ;
echo json_encode("seu id é $id você escolheu $opcaoUsr sua resposta é $textoUsr seu nome é $nome seu telefone é $telefone seu email é $email  seu endereco é $endereco");
if (!empty($nome) || !empty($email) || !empty($telefone) || !empty($opcaoUsr && $opcaoUsr != "escolha um campo para editar")){
    

    header('Content-Type: application/json');
$pdo = new PDO('mysql:host=localhost; dbname=contato;', 'root',''); 
//echo json_encode("meu nome e $nome");
$stmt = $pdo->prepare('UPDATE  contatos SET nome = :no, telefone = :tel , email = :em , endereco = :ende) WHERE id = :id ');

    switch ($opcaoUsr) {
        case 'nome':
            $stmt -> bindValue(':no', $textoUsr );
            $stmt -> bindValue(':tel', $telefone );
            $stmt -> bindValue(':em', $email);
            $stmt -> bindValue(':ende', $endereco );
            $stmt -> bindValue(':id', $id );
          
            break;
        case 'telefone':
            $stmt -> bindValue(':no', $nome );
            $stmt -> bindValue(':tel', $textoUsr );
            $stmt -> bindValue(':em', $email);
            $stmt -> bindValue(':ende', $endereco );
            $stmt -> bindValue(':id', $id );
            break;
        case 'email':
            $stmt -> bindValue(':no', $nome );
            $stmt -> bindValue(':tel', $textoUsr );
            $stmt -> bindValue(':em', $textoUsr);
            $stmt -> bindValue(':ende', $endereco );
            $stmt -> bindValue(':id', $id );
            break;
        case 'endereco':
            $stmt -> bindValue(':no', $nome );
            $stmt -> bindValue(':tel', $textoUsr );
            $stmt -> bindValue(':em', $textoUsr);
            $stmt -> bindValue(':ende', $textoUsr);
            $stmt -> bindValue(':id', $id );
            break;
    }
    
    $stmt -> execute();
    if ($stmt->rowCount() >= 1){
    echo json_encode('contato alterado com sucesso');
    }else{
    echo json_encode('erro a alterar o contato');
    }
}

 


  



 





//echo json_encode("meu nome é: $nome meu email é: $email mais o telefone  $telefone");
//echo json_encode("seu id é $id você escolheu $opcaoUsr sua resposta é $textoUsr seu nome é $nome seu telefone é $telefone seu email é $email  seu endereco é $endereco")  ;
/*
$telefone = $_POST['telefone'];
$email = $_POST['email'];
$endereco = $_POST['endereco'];
*/
//echo($nome);
/*
header('Content-Type: application/json');
$pdo = new PDO('mysql:host=localhost; dbname=contato;', 'root',''); 
$stmt = $pdo->prepare('UPDATE  contatos SET (nome= :no,telefone = :tel ,email = :em , endereco = :ende) WHERE id = :id');
//UPDATE `contatos` SET `id`='[value-1]',`nome`='[value-2]',`telefone`='[value-3]',`email`='[value-4]',`endereco`='[value-5]' WHERE 1
switch ($opcaoUsr) {
    case 'nome':
        $stmt -> bindValue(':no', $nome );
        
        break;
    case 'tel':
        $stmt -> bindValue(':tel', $nome );
        break;
    case 'email':
        $stmt -> bindValue(':em', $nome );
        break;
    case 'endereco':
        $stmt -> bindValue(':ende', $nome );
        break;
}

$stmt -> bindValue(':tel', $telefone);
$stmt -> bindValue(':em', $email );
$stmt -> bindValue(':ende', $endereco );
$stmt -> bindValue(':id', $id );
$stmt -> execute();

if ($stmt->rowCount() >= 1){
    echo json_encode('contato salvo com sucesso');
}else{
    echo json_encode('erro a salvar o contato');
}
*/

?>
