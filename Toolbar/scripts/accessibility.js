// This function keeps the toolbar above the footer when you scroll to the bottom of the page.
function checkOffset() {
    if($('main').offset().top + $('accessibility').height() >= $('footer').offset().top - 20) {
        $('.accessibility-tool .fixed').css('position', 'absolute');
    }
    if($(document).scrollTop() + window.innerHeight < $('footer').offset().top) {
        $('.accessibility-tool .fixed').css('position', 'fixed');
    }
}

$(document).scroll(function() {
    checkOffset();
});




// This is for opening and closing the toolbar. 
window.addEventListener('load', (event) => {
    $('.arrow').click(function() {
        if ($('.toolbar-read').css("visibility") == "hidden") {
            $('.toolbar-read').css("visibility", "visible");
            $('.toolbar-size').css("visibility", "visible");
            $('.accessibility-tool .fixed').css('height', "283px");
            $('.arrow').css('transform', 'rotate(0deg)');  
        }
        else {
            $('.toolbar-read').css("visibility", "hidden");
            $('.toolbar-size').css("visibility", "hidden");
            $('.accessibility-tool .fixed').css('height', "78px");
            $('.arrow').css('transform', 'rotate(180deg)'); 
        }  
    });
});


function minusfont() {
  // CUSTOMIZE: replace 'article p' with the selector for the text you are changing sizes for. 
  // CUSTOMIZE: replace the '2' with the value (in px) you would like font to decrement by. 
  // CUSTOMIZE: replace the '10' with the minimum acceptable font size.
  var v = parseInt($('article p').css('font-size')) - 2;
  if (v >= 10){
    $('article p').attr('style', 'font-size: ' + v + 'px !important') 
  }
}

function plusfont() {
  // CUSTOMIZE: replace 'article p' with the selector for the text you are changing sizes for. 
  // CUSTOMIZE: replace the '2' with the value (in px) you would like font to increment by. 
  // CUSTOMIZE: replace the '36' with the maximum acceptable font size.
  var v = parseInt($('article p').css('font-size')) + 2;
  if (v <=36){
    $('article p').attr('style', 'font-size: ' + v + 'px !important')
  }
}

// CUSTOMIZE: replace 'article' with the tag containing all the content you would like 
// the read aloud to read. 
window.onload=function(){
    document.getElementById("play").onclick = function() {
      play('article')
    };
  
    document.getElementById("pause").onclick = function() {
      pause()
    };
  
    document.getElementById("restart").onclick = function() {
      restart('article')
    };

    document.getElementById("minus").onclick = function() {
      minusfont()
    }
  
    document.getElementById("plus").onclick = function() {
      plusfont()
    }
  }
    
  // Customize: you can change the keyboard shorcuts by replacing 'command+alt+r', etc.
  Mousetrap.bind(['command+alt+r', 'ctrl+alt+r'], function() { 
    restart('article')
  });
    
  Mousetrap.bind(['command+shift+l', 'ctrl+shift+l'], function() { 
    if($().articulate('isPaused') || !$().articulate('isSpeaking')) {
      play('article')
    }
    else if (!$().articulate('isPaused')) {
      pause()
    }
  });
    
  Mousetrap.bind(['command+alt+[', 'ctrl+alt+['], function() { 
    minusfont()
  });
  
  Mousetrap.bind(['command+alt+]', 'ctrl+alt+]'], function() { 
    plusfont() 
  });

  Mousetrap.bind(['command+shift+a', 'ctrl+shift+a'], function() { 
    if ($('.toolbar-read').css("visibility") == "hidden") {
        $('.toolbar-read').css("visibility", "visible");
        $('.toolbar-size').css("visibility", "visible");
        $('.accessibility-tool .fixed').css('height', "283px");
        $('.arrow').css('transform', 'rotate(0deg)');  
    }
    else {
        $('.toolbar-read').css("visibility", "hidden");
        $('.toolbar-size').css("visibility", "hidden");
        $('.accessibility-tool .fixed').css('height', "78px");
        $('.arrow').css('transform', 'rotate(180deg)'); 
    }  
  });
    
  function play(obj) {
    var speaking = $().articulate('isSpeaking');
    var paused = $().articulate('isPaused');
  
    if (speaking) {
      if (paused) {
        $().articulate('resume');
      } 
    } else {
      $(obj).articulate('speak');
    };
  };
      
  function pause() {
    $().articulate('pause');
  }; 
    
  function restart(obj) {
    var speaking = $().articulate('isSpeaking');
    if (speaking) {
      $().articulate('stop');
      $(obj).articulate('speak');
    }
    else {
      $(obj).articulate('speak');
    }
  }; 
    
    
    