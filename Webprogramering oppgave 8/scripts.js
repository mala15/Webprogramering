/**
 * Client-side JavaScipt code
 */

// TODO


function ajax_get_albums()
{


	var albums = document.getElementById("albums");
	
	var hr = new XMLHttpRequest();
    hr.open("POST", "albums.php", true);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	
	
	
    hr.onreadystatechange = function() 
	{
	
	
	    if(hr.readyState == 4 && hr.status == 200)
		{
		
		
		    var data_albums = JSON.parse(hr.responseText);
			
			albums.innerHTML = '<ul>';
			
			a_album_grabbed = false;
			
			for(var o in data_albums)
			{
			
				//grabs the first album to fill album cover and album songs with
				if(!a_album_grabbed)
				{
					var album = data_albums[o];
					var album_position = o;
					a_album_grabbed = true;
				}
				
				
				if(data_albums[o])
				{
					//variables in function is the name of the album and position of the album
				    albums.innerHTML += '<li onclick="show_album_info("' + data_albums[o] + ', '+ o + ' )">'data_albums[o]'</li>';
				}
			}
	
			albums.innerHTML += '</ul>';
			
			
	    }
		
		
    }
	
	
	show_album_info(album, album_position);
	
    hr.send(null);
 
}


 
function show_album_info(album, album_position)
{

	var hr = new XMLHttpRequest();
	var album_cover = document.getElementById("album_cover");
	var album_songs = document.getElementById("album_songs");
    hr.open("POST", "albuminfo.php", true);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
    hr.onreadystatechange = function() 
	{
	
	    if(hr.readyState == 4 && hr.status == 200)
		{
			//grab the data in album inof
		    var data_songs = JSON.parse(hr.responseText);
			
			//update album cover
			album_cover.innerHTML = '<img src="cover_images/' + album + '.jpg" />';
			
			
			//update song list
			album_songs.innerHTML = '<table>';
			album_songs.innerHTML += '<tr>';
			
			album_songs.innerHTML += '<tr>No.</th>';
			album_songs.innerHTML += '<tr>Title</th>';
			album_songs.innerHTML += '<tr>Length</th>';
			
			album_songs.innerHTML += '</tr>';
			
			album_songs.innerHTML += '<tr>';
			
			//define total lenght
			var total_song_lenght = 0;
			
			//loop through data and do "nødvendige" operations
			for(var o in data_songs)
			{
				if(data_songs[o]) 
				{
					//calculate song length to minutes and seconds.
					var song_length = data_songs[o][2];
					var song_minutes = parseInt(song_length/60);
					var song_seconds = parseInt(song_length%60);
					
					//add the length of the songs to the total lenght so the total length can be calculated in minutes and seconds later.
					total_song_lenght += song_length;
					
					//access the different elements of the song with [0], [1], and [2]
				    album_songs.innerHTML += '<td class="song_no">' + data_songs[o][0] + '.</td><td class="song_title">' + data_songs[o][1] + '</td><td class="song_length">' + song_minutes + ':' + song_seconds + '</li>';
				}
			}
	
			album_songs.innerHTML += '</tr>';
			
			album_songs.innerHTML += '<tr>';
			
			var total_song_minutes = parseInt(total_song_lenght/60);
			var total_song_seconds = parseInt(total_song_lenght%60);
			
			album_songs.innerHTML += '<td colspan="2"><strong>Total length:</strong></td>';
			album_songs.innerHTML += '<td class="song_length"><strong>' + total_song_minutes + ':' + total_song_seconds + '</strong></td>';
			
			album_songs.innerHTML += '</tr>';
			
			album_songs.innerHTML += '</table>';
			
			
	    }	
    }
	
    hr.send(null);
	
}


