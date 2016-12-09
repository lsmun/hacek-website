/* Make each element the same height */
// team bio blocks
$(function() {
	$('.team-bio').matchHeight();
});

// team name h3 tags
$(function() {
	$('.team-name').matchHeight();
});

/* Stuff to do upon load. */
$( document ).ready( function() {
	$( window ).on( 'load resize' , function(){
        /* Set footer height. */
		var img = new Image();
		img.src = '../img/footer-bg.png';
		var win = $( window ).width();
		var ratio = win / img.width;
		var newHeight = img.height * ratio;
		$( '#footer' ).height( newHeight );
        
        /* Set video width. */
        var galleryWidth = $( '#gallery-container' ).width()
		$( '#gallery-video' ).width( galleryWidth );
	});
    
	$( window ).on( 'load' , function(){
        /* Content swap functionality. 
        Sauce: http://jsfiddle.net/FtS8u/7/ */
        $( '.pages' ).hide();
        $( '.navbar a' ).click( function ( e ) {
            e.preventDefault();
            var item = this.href.split( '#' )[1];
            $( '.pages:visible' ).fadeOut( 1000 , function () {
                window.scrollTo(0, 0);
                $( '#' + item ).fadeIn( 1000 );
            });
            
            /* Switches active state. */
            $( '.navbar' ).find( '.active' ).removeClass( 'active' );
            $( this ).parent().addClass( 'active' );
        });
        $( '#intro' ).show();
    });
});