<?php
/**
 * Server-side PHP script that generates a list of albums (in JSON format)
 */
// TODO

header("Content-Type: application/jsonl"); 

$jsonData = '{

	"album1":"Rage Against the Machine - Rage Against the Machine", 
	"album2":"Nightwish - Angels Fall First", 
    "album2":"Korn - Korn III Remember Who You Are"
	
}';

echo $jsonData;

?>