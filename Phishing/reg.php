<!doctype html>
<html lang="no">
<head>
    <meta charset="utf-8"/>
    <title>Brukerregistrering</title>
	<link rel="stylesheet" type="text/css" href="../meg.css" />
	<link rel="icon" type="image/png" href="../Bilder/NPJ-logo-B.png" sizes="16x16">
	<link href="../meg.css" rel="stylesheet" type="text/css">

</head>
<body>
<div id="wrapper">
		<div id="box1">
	<table width="100%" border="0" cellspacing="5" cellpadding="5" vertical-align: midle><!--Tabell som bruker 100% av siden uten border og med midtstilling vertikalt-->
  <tbody>
    <tr>
      <td>&nbsp; <a href="../index.html"> <img src="../Bilder/NPJ-logo-B.png" alt="Nils Petters logo" width="250px" height="auto" /> </a> </td>
      <td>&nbsp; <h0>Nils Petter Johnsrud</h0></td> 
    </tr>
  </tbody>
</table>
	</div>
	<div id="box2">
		<nav>
			<a href="prosjekter.html" class="knapp">Prosjekter</a>
			<!-- prosjekter.html -->
			<a href="bilder.html" class="knapp">Bilder</a>
			<!-- bilder.html - laget -->
			<a href="opplering.html" class="knapp">Opplæring</a><!-- opplering.html -->
			<a href="artikler.html" class="knapp">Artikler</a>
			<!-- artikler.html -->
			<a href="lenkesamling.html" class="knapp">Lenkesamling</a>
			<!-- lenkesamling.html-->
			<a href="omMeg.html" class="knapp">Om Meg</a>
			<!-- omMeg.html -->
			<a href="kontaktMeg.html" class="knapp">Kontakt meg</a>
			<!-- kontaktMeg.html -->
		</nav></div>
	<div id="box3">
	<h1>Oppgave med PHP-registrering til tekstfil</h1>
		<p></p>

 <h1>Registrer deg for trekning av gevinst</h1>
<?php
$fil = fopen("Phishing.csv","a") // Åpne fil
   or die("Kan ikke åpne fil");

foreach ($_GET as $key => $value) // Gå gjennom alle input-data
{
  echo "<p> $key : \t $value";    // Skriv inkomne data på skjermen
  fwrite($fil,$value);            // Skriv til fil
  fwrite($fil,";");               // Sett inn et semikolon imellom
}
fwrite($fil,"\n");                // Avslutt med linjeskift
fclose($fil);                     // Lukk fila
 ?>

	<!-- Her skal nettsidens innhold inn -->
		</div>
		<div id="box4">Nils Petter Johnsrud - nilsj@viken.no</div>
	</div>


 </body>
</html>
