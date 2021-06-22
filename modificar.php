<?php




$nome = $_POST['nome'] ;
$telefone = $_POST['telefone'] ;
$email = $_POST['email'] ;
$endereco= $_POST['endereco'] ;
$ids = $_POST['ids'] ;
$opcaoUsr = $_POST['opcaoUsr'] ;
$textoUsr = $_POST['textoUsr'] ;


  echo json_encode("seu id é  $ids ")  ;
/*
$telefone = $_POST['telefone'];
$email = $_POST['email'];
$endereco = $_POST['endereco'] ;
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
