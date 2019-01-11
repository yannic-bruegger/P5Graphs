var vertices    = [];
var edges       = [];
var zoom        = 1;

function setup()
{
    createCanvas(windowWidth, windowHeight);
    readTextFile( 'graphs/graph_1024.txt' );
    vertices[1].activate();
}
  
function draw()
{
    scale(zoom);
    background( 20, 30, 50 );
    drawEdges();
    drawVertices();
}

function drawVertices()
{
    vertices.forEach(function( vertex ){
        vertex.show();
    });
}

function drawEdges()
{
    edges.forEach(function( edge ){
        edge.show();
    });
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) {
    print(event.delta);
    if( event.delta > 0 ) zoom -= .1;
    if( event.delta < 0 ) zoom += .1;
    return false;
  }

function generateRandomGraph()
{
    let vertices    = [];
    let edges       = [];
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                importGraph(allText);
            }
        }
    }
    rawFile.send(null);
}

function importGraph( fileContent )
{
    var sections = fileContent.split( ';' ); 
    var i = [];
    edges = [];
    createCanvas(windowWidth, windowHeight);
    vertices = [];
    if( sections.length != 4 )
    {
        console.error( "File not in correct format." );
        return;
    }

    let fileVertices = sections[1].split('\n');
    fileVertices = fileVertices.slice( 1, fileVertices.length - 1 );


    fileVertices.forEach( vertex => {
        vertices.push( new Vertex(  vertex.split( ' ' )[0], { x: vertex.split( ' ' )[1], y: vertex.split( ' ' )[2] } ) );
    });
    let fileEdges       = sections[2].split('\n');
    fileEdges = fileEdges.slice( 1, fileEdges.length - 1 );

    fileEdges.forEach( edge => {
        edges.push( new Edge( vertices[ edge.split( ' ' )[1] ], vertices[ edge.split( ' ' )[2] ] ) );
    });
}