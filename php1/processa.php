<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <title>Instituto de Computação</title>
  </head>
<body>
	<?php
		echo "<p> Nome: " . $_GET["nome"] . "</p>";
		echo "<p> Email: " . $_GET["email"] . "</p>";
		echo "<p> Website: " . $_GET["site"] . "</p>";
		echo "<p> Mensagem: " . $_GET["msg"] . "</p>";
	?>
</body>
</html>