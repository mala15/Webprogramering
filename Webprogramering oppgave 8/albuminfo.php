<?php
/**
 * Server-side PHP script that returns detailed information about a given album 
 * (in JSON format) 
 */
// TODO
header("Content-Type: application/jsonl"); 
$jsonData = '{

	"album1":{
		"song1":{"song_no":1, "song_title":"Bombtrack", "song_length":244 },
		"song2":{"song_no":2, "song_title":"Killing in the Name", "song_length":314 },
		"song3":{"song_no":3, "song_title":"Take the Power Back" , "song_length":337 },
		"song4":{"song_no":4, "song_title":"Settle for Nothing", "song_length":288 },
		"song5":{"song_no":5, "song_title":"Bullet in the Head", "song_length":307 },
		"song6":{"song_no":6, "song_title":"Know Your Enemy", "song_length":295 },
		"song7":{"song_no":7, "song_title":"Wake Up", "song_length":364 },
		"song8":{"song_no":8, "song_title":"Fistful of Steel", "song_length":331 },
		"song9":{"song_no":9, "song_title":"Township Rebellion", "song_length":324 },
		"song10":{"song_no":10, "song_title":"Freedom", "song_length":366 }
	}, 
	"album2":{
		"song1":{"song_no":1, "song_title":"Elvenpath", "song_length":280 },
		"song2":{"song_no":2, "song_title":"Beauty and the Beast", "song_length":384 },
		"song3":{"song_no":3, "song_title":"The Carpenter" , "song_length":357 },
		"song4":{"song_no":4, "song_title":"Astral Romance", "song_length":312 },
		"song5":{"song_no":5, "song_title":"Angels Fall First", "song_length":334 },
		"song6":{"song_no":6, "song_title":"Tutankhamen", "song_length":331 },
		"song7":{"song_no":7, "song_title":"Nymphomaniac Fantasia", "song_length":287 },
		"song8":{"song_no":8, "song_title":"Know Why the Nightingale Sings", "song_length":254 },
		"song9":{"song_no":9, "song_title":"Lappi ", "song_length":560 }
	}, 
	"album3":{
		"song1":{"song_no":1, "song_title":"Uber-Time", "song_length":89 },
		"song2":{"song_no":2, "song_title":"Oildale", "song_length":283 },
		"song3":{"song_no":3, "song_title":"Pop a Pill" , "song_length":240 },
		"song4":{"song_no":4, "song_title":"Fear Is a Place to Live", "song_length":189 },
		"song5":{"song_no":5, "song_title":"Move On", "song_length":228 },
		"song6":{"song_no":6, "song_title":"Lead the Parade", "song_length":264 },
		"song7":{"song_no":7, "song_title":"Let the Guilt Go", "song_length":236 },
		"song8":{"song_no":8, "song_title":"The Past", "song_length":306 },
		"song9":{"song_no":9, "song_title":"Never Around", "song_length":329 },
		"song10":{"song_no":10, "song_title":"Are You Ready to Live?", "song_length":239 },
		"song11":{"song_no":11, "song_title":"Holding All These Lies", "song_length":277 }
	} 
	
}';

echo $jsonData;



?>