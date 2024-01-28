window.onload = () => {
        document.body.classList.remove("container");
      
        var x = document.getElementById("myAudio");
        var button = document.getElementById("container"); // Replace with your actual button ID

        setTimeout(function(){
                button.click();
                }, 1000);
      
        if (x && button) {
          // Mute the audio to enable autopla
      
          // Add a click event listener to the button
          button.addEventListener("click", function () {

            x.play();
          });
        }
      };
      