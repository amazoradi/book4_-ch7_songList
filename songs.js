$(document).ready(function () {
  // Use jQuery to get a reference to `load-songs`
  let loadSong = $("#load-songs")
  // Use jQuery to get a reference to `song-list`
  let listSong = $("#song-list")

  function loadToDoc() {
  /*
      Attach a click handler to the button with jQuery. When
      the button is clicked, use $.ajax() to load `songs.json`
      from the file system
  */
    $(loadSong).click(() => {
      console.log("click")
      $.ajax({
        type: "GET",
        url: "http://localhost:8088/songs",
        success: function (song) {
          console.log("success", song)
        }

        // Instructions for how to deserialize a `mycustomtype`
        //  converters: {
        // 'text mycustomtype': function (result) {
        // Do Stuff
        // return newresult;
        // }
        // },
      }).then(songs => console.log("then", songs))
    })
  }
  loadToDoc()


})

  

  

    //     // Expect a `mycustomtype` back from server
    //     dataType: 'mycustomtype'
    //   });


    /*
        Chain a `.then()` method to the ajax call, and when
        it is complete build a DOM component for each song with
        the following structure. Use the jQuery append() method
        to put an HTML representation of each song the DOM as a
        child component of the .
  
            <section class="song">
                <h1 class="song__title">{Title of song}</h1>
                <section class="song__description">
                    Performed by {artist} on the album {album}
                </section>
            </section>
    */
  // })