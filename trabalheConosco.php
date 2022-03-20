<?php
$conexao = mysql_pconnect('localhost','root','') or die("Problema ao efetuar conexão com o banco de dados");

$abre_banco = mysql_select_db('jhellytec',$conexao) or die("Problema ao abrir banco de dados");

$vnome=$_POST['txtnome'];
$vemail=$_POST['txtemail'];
$vtelefone=$_POST['txttelefone'];
$vcurriculo=$_POST['arquivo'];

$comando=mysql_query("select * from tbl_trabalheconosco where nome='$vnome'") or die(mysql_error());

if (mysql_num_rows($comando) > 0) {
  echo "<script language=javascript> window.alert('esse nome já foi cadastrado!');</script>";
} else {
  $comando=mysql_query("insert into tbl_trabalheconosco(nome,email,telefone,curriculo) values('$vnome','$vemail','$vtelefone','$vcurriculo')") or die(mysql_error());

  echo "<script language=javascript> window.alert('Cadastro efetuado com sucesso!'); </script>";
}

$fecha_banco = mysql_close($conexao);

header('location:trabalheconosco.html');
?>