<?php



$id_delete = $_POST['ids'];

header('Content-Type: application/json');
$pdo = new PDO('mysql:host=localhost; dbname=contato;', 'root',''); 
try {
$stmt = $pdo->prepare('DELETE FROM contatos WHERE id = :id ');

$stmt -> bindValue(':id', $id_delete );
$stmt -> execute();
echo json_encode('contato apagado com sucesso ');
} catch (Exception $e) {
    echo json_encode('impossivel apagar este contato ');
}

?>
