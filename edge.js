function Edge( connectedNodeA, connectedNodeB, weight = 1 )
{
    this.weight = weight;
    this.active = false;
    throwErrorIfObjectIsNoNode( connectedNodeA );
    throwErrorIfObjectIsNoNode( connectedNodeB );
    this.connectedNodeA = connectedNodeA;
    this.connectedNodeB = connectedNodeB;
    this.activate           = function() { this.active = true };
    this.deactivate         = function() { this.active = false };
    this.toggleActivation   = function() { this.active = !this.active };
    this.show = function(){
        strokeWeight( sizeReference/13 );
        stroke( 0 )
        if( this.active ) stroke( 30, 180, 25 );
        line( connectedNodeA.position.x, connectedNodeA.position.y, connectedNodeB.position.x, connectedNodeB.position.y );
    }
}

function DirectionalEdge(  connectedNodeFrom, connectedNodeTo, weight = 1 )
{
    this.weight = weight;
    throwErrorIfObjectIsNoNode( connectedNodeFrom );
    throwErrorIfObjectIsNoNode( connectedNodeTo );
    this.connectedNodeFrom  = connectedNodeFrom;
    this.connectedNodeTo    = connectedNodeTo;
    this.activate           = function() { this.active = true };
    this.deactivate         = function() { this.active = false };
    this.toggleActivation   = function() { this.active = !this.active };
    this.show = function(){
        strokeWeight( sizeReference/13 );
        stroke( 0 )
        if( this.active ) stroke( 30, 180, 25 );
        line( connectedNodeFrom.position.x, connectedNodeFrom.position.y, connectedNodeTo.position.x, connectedNodeTo.position.y );
    }
}

function throwErrorIfObjectIsNoNode( node )
{
    if( !(node instanceof Vertex) ) console.error( "Detected other Object than Vertex in Edge constructor." );
}