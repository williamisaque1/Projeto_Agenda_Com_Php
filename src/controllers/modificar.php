<?php



//echo json_encode("seu id é $id você escolheu $opcaoUsr sua resposta é $textoUsr seu nome é $nome seu telefone é $telefone seu email é $email  seu endereco é $endereco");
$nome = $_POST['nome'] ;
$telefone = $_POST['telefone'] ;
$email = $_POST['email'] ;
$endereco= $_POST['endereco'] ;
$id= $_POST['ids'] ;
$opcaoUsr = $_POST['opcaoUsuario'] ;
$textoUsr = $_POST['textoUsr'] ;

if (!empty($nome) || !empty($email) || !empty($telefone) || !empty($opcaoUsr && $opcaoUsr != "escolha um campo para editar")){
    header('Content-Type: application/json');
$pdo = new PDO('mysql:host=localhost; dbname=contato;', 'root',''); 
$stmt = $pdo->prepare('UPDATE  contatos SET nome = :no, telefone = :tel , email = :em , endereco = :ende  WHERE id = :id ');
    switch ($opcaoUsr) {
        case 'nome':
            $stmt -> bindValue(':no', $textoUsr );
            $stmt -> bindValue(':tel', $telefone );
            $stmt -> bindValue(':em', $email);
            $stmt -> bindValue(':ende', $endereco );
            $stmt -> bindValue(':id', $id );
            $stmt -> execute();
            echo json_encode('contato alterado com sucesso');
            break;
        case 'telefone':
            $stmt -> bindValue(':no', $nome );
            $stmt -> bindValue(':tel', $textoUsr );
            $stmt -> bindValue(':em', $email);
            $stmt -> bindValue(':ende', $endereco );
            $stmt -> bindValue(':id', $id );
            $stmt -> execute();
            echo json_encode('contato alterado com sucesso');
            break;
        case 'email':
            $stmt -> bindValue(':no', $nome );
            $stmt -> bindValue(':tel', $telefone );
            $stmt -> bindValue(':em', $textoUsr);
            $stmt -> bindValue(':ende', $endereco );
            $stmt -> bindValue(':id', $id );
            $stmt -> execute();
            echo json_encode('contato alterado com sucesso');
            break;
        case 'endereco':
            $stmt -> bindValue(':no', $nome );
            $stmt -> bindValue(':tel', $telefone );
            $stmt -> bindValue(':em', $email);
            $stmt -> bindValue(':ende', $textoUsr);
            $stmt -> bindValue(':id', $id );
            $stmt -> execute();
            echo json_encode('contato alterado com sucesso');
            break;
            default:
            echo json_encode('erro a alterar o contato');     
            break;
            }
   }
?>
