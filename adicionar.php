<?php
echo json_encode($_POST['nome']);


$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$email = $_POST['email'];
$endereco = $_POST['endereco'];

header('Content-Type: application/json');
$pdo = new PDO('mysql:host=localhost; dbname=contato;', 'root',''); 
$stmt = $pdo->prepare('INSERT INTO contatos (nome,telefone,email,endereco) VALUES (:no,:tel:em:ende)');

$stmt -> bindValue(':no', $nome );
$stmt -> bindValue(':tel', $telefone);
$stmt -> bindValue(':em', $email );
$stmt -> bindValue(':ende', $endereco );
$stmt -> execute();
if($stmt -> rowCount() >= 1){
    echo json_encode('contato salvo com sucesso');
}else{
    echo json_encode('erro a salvar o contato');
}
?>
