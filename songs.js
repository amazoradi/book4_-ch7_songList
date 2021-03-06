$(document).ready(function () {
  // Use jQuery to get a reference to `load-songs`
  let loadSong = $("#load-songs")
  // Use jQuery to get a reference to `song-list`
  let listSong = $("#song-list")
  /*
      Attach a click handler to the button with jQuery. When
      the button is clicked, use $.ajax() to load `songs.json`
      from the file system
  */
  $(loadSong).click(() => {
    $.ajax({
      type: "GET",
      url: "http://localhost:8088/songs",
    })
      /*
          Chain a `.then()` method to the ajax call, and when
          it is complete build a DOM component for each song with
          the following structure. Use the jQuery append() method
          to put an HTML representation of each song the DOM as a
          child component of the .
      */
    .then(songs => $.each(songs, function (i, song) {
      listSong.append(`<section class="song"><h2 class="song__title"> ${song.title}</h1>
          <section class="song__description">
            Performed by ${song.artist} on the album ${song.album}
          </section></section>`)
    })
    )
  })
})


