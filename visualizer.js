var vertices    = [];
var edges       = [];

function setup()
{
    readTextFile( 'graphs/graph_1024.txt' );
    createCanvas(windowWidth, windowHeight);
    graph_16();
    vertices[0].activate();
}
  
function draw()
{
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

function generateRandomGraph()
{
    let vertices    = [];
    let edges       = [];
}

function graph_16(){
    vertices.push( new Vertex(  0, { x: 52 , y: 242 } ) );
    vertices.push( new Vertex(  1, { x: 595, y: 164 } ) );
    vertices.push( new Vertex(  2, { x: 545, y: 702 } ) );
    vertices.push( new Vertex(  3, { x: 961, y: 644 } ) );
    vertices.push( new Vertex(  4, { x: 770, y: 635 } ) );
    vertices.push( new Vertex(  5, { x: 970, y: 677 } ) );
    vertices.push( new Vertex(  6, { x: 643, y: 710 } ) );
    vertices.push( new Vertex(  7, { x: 152, y: 325 } ) );
    vertices.push( new Vertex(  8, { x: 496, y: 123 } ) );
    vertices.push( new Vertex(  9, { x: 377, y: 509 } ) );
    vertices.push( new Vertex( 10, { x: 534, y: 152 } ) );
    vertices.push( new Vertex( 11, { x: 772, y: 706 } ) );
    vertices.push( new Vertex( 12, { x: 572, y: 287 } ) );
    vertices.push( new Vertex( 13, { x: 682, y: 681 } ) );
    vertices.push( new Vertex( 14, { x: 519, y: 165 } ) );
    vertices.push( new Vertex( 15, { x: 302, y: 109 } ) );

    edges.push( new Edge( vertices[ 2 ], vertices[ 0 ] ) );
    edges.push( new Edge( vertices[ 0 ], vertices[ 7 ] ) );
    edges.push( new Edge( vertices[ 7 ], vertices[ 2 ] ) );
    edges.push( new Edge( vertices[ 7 ], vertices[ 9 ] ) );
    edges.push( new Edge( vertices[ 9 ], vertices[ 2 ] ) );
    edges.push( new Edge( vertices[ 8 ], vertices[ 1 ] ) );
    edges.push( new Edge( vertices[ 1 ], vertices[ 10 ] ) );
    edges.push( new Edge( vertices[ 10 ], vertices[ 8 ] ) );
    edges.push( new Edge( vertices[ 3 ], vertices[ 4 ] ) );
    edges.push( new Edge( vertices[ 4 ], vertices[ 11 ] ) );
    edges.push( new Edge( vertices[ 11 ], vertices[ 3 ] ) );
    edges.push( new Edge( vertices[ 3 ],  vertices[ 5 ] ) );
    edges.push( new Edge( vertices[ 5 ],  vertices[ 11 ] ) );
    edges.push( new Edge( vertices[ 4 ],  vertices[ 12 ] ) );
    edges.push( new Edge( vertices[ 12 ], vertices[ 3 ] ) );
    edges.push( new Edge( vertices[ 3 ],  vertices[ 1 ] ) );
    edges.push( new Edge( vertices[ 1 ],  vertices[ 12 ] ) );
    edges.push( new Edge( vertices[ 2 ],  vertices[ 6 ] ) );
    edges.push( new Edge( vertices[ 6 ],  vertices[ 13 ] ) );
    edges.push( new Edge( vertices[ 13 ], vertices[ 2 ] ) );
    edges.push( new Edge( vertices[ 4 ],  vertices[ 13 ] ) );
    edges.push( new Edge( vertices[ 13 ], vertices[ 12 ] ) );
    edges.push( new Edge( vertices[ 9 ],  vertices[ 12 ] ) );
    edges.push( new Edge( vertices[ 13 ], vertices[ 9 ] ) );
    edges.push( new Edge( vertices[ 11 ], vertices[ 6 ] ) );
    edges.push( new Edge( vertices[ 13 ], vertices[ 11 ] ) );
    edges.push( new Edge( vertices[ 10 ], vertices[ 14 ] ) );
    edges.push( new Edge( vertices[ 14 ], vertices[ 8 ] ) );
    edges.push( new Edge( vertices[ 14 ], vertices[ 1 ] ) );
    edges.push( new Edge( vertices[ 12 ], vertices[ 14 ] ) );
    edges.push( new Edge( vertices[ 0 ],  vertices[ 15 ] ) );
    edges.push( new Edge( vertices[ 15 ], vertices[ 7 ] ) );
    edges.push( new Edge( vertices[ 8 ],  vertices[ 15 ] ) );
    edges.push( new Edge( vertices[ 15 ], vertices[ 14 ] ) );
    edges.push( new Edge( vertices[ 15 ], vertices[ 9 ] ) );
    edges.push( new Edge( vertices[ 15 ], vertices[ 12 ] ) );
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
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}