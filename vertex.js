var sizeReference = 20;

function Vertex( value, position = { x: 0, y: 0 } )
{
    this.value = value
    this.active = false;
    this.marked = false;
    this.position = position;

    this.activate           = function() { this.active = true };
    this.deactivate         = function() { this.active = false };
    this.toggleActivation   = function() { this.active = !this.active };
    this.setMarked          = function() { this.marked = true };
    this.setUnmarked        = function() { this.marked = false };
    this.toggleMarked       = function() { this.marked = !this.active };
    this.setPosition        = function( position ) { this.position = position; }

    this.show = function()
    {
        stroke( 0 );
        fill( 240 );
        if( this.marked ) stroke( 180, 30, 25 )
        if( this.active ){
            stroke( 30, 180, 25 )
            fill( 30, 180, 25 )
        }
        if( this.marked ) fill( 180, 30, 25 )

        strokeWeight( sizeReference/13 );
        ellipse( position.x, position.y, sizeReference )
        
        /* Text with value */
        fill( 0 );
        if( this.marked ) fill( 255 )
        if( this.active ){
            stroke( 255 )
            fill( 255 )
        }
        strokeWeight( 1 )
        textSize(sizeReference/2);
        textAlign(CENTER, CENTER);
        stroke( 0 )
        text(value, position.x, position.y+(sizeReference/25) );
    }
}