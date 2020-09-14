$( document ).ready(function() {
    $( "p" ).text( "The DOM is now loaded and can be manipulated." );
 
//    Flapping animation
    $('#startFlap').click(function() {
        $('#rightwing').attr('class','right_wing');
    });   
    $('#stopFlap').click(function() {
        $('#rightwing').attr('class','');
        
    });
      $('#map .india #center_portion').mouseover(function() {

       	 
       	  $('#map .india #center_portion path').attr('fill','#ffffff');
       	  $('#map .india #chakra path').attr('fill','#000088');
        
    });
       $('#map .india #center_portion').mouseout(function() {

       	 $('#map .india #chakra path').attr('fill','#ffffff');
       	  $('#map .india #center_portion path').attr('fill','#d3d3d3');
        
    });

     

    var start = false;
    var pathPoints = "";
    var pathPoints1 = "";
    var pathPoints2 = "";
   var offsetValues ;
var drawPath = function () {
   
    $( "#svgCanvasForPath" ).bind({
        mousemove: function(e) {
            // console.log('mousemove: X:' + e.clientX + " Y: " + e.clientY);
            // pathPoints += " L" + (parseFloat(e.clientX) - offsetValues.X)   + " " + 
            // 					(parseFloat(e.clientY) - offsetValues.Y);
            pathPoints += " L " + (parseFloat(e.offsetX) + 40)   + " " + (parseFloat(e.offsetY) + 20);
            $( "#pathForDrawing" ).attr('d', pathPoints);
        }
    });
};

var stopDrawingPath = function () {
    console.log('done drawing');
    start = false;
    $( "#svgCanvasForPath" ).unbind( "mousemove" );
    
};
$( "#svgCanvasForPath" ).bind({
      click: function(e) {
          console.log('click');
            offsetValues = document.getElementById('svgCanvasForPath').getBoundingClientRect();
   offsetValues = {X: offsetValues.left, Y:offsetValues.top};
   console.log('the left top values of svg are: ' + JSON.stringify(offsetValues));
          if(!start) {
            start = true;
              pathPoints = "";
               // pathPoints = "M " + (parseFloat(e.clientX) - offsetValues.X)   + " " + (parseFloat(e.clientY) - offsetValues.Y);
                // pathPoints = "M " + (parseFloat(e.clientX) + parseFloat(e.offsetX))   + " " + ( parseFloat(e.clientY) + parseFloat(e.offsetY));
                 pathPoints = "M " + (parseFloat(e.clientX - offsetValues.X))   + " " + (parseFloat(e.clientY ) - offsetValues.Y);
                  pathPoints = "M " + (parseFloat(e.offsetX) + 40)   + " " + (parseFloat(e.offsetY) + 20);
            drawPath();
          } else {
          	console.log(pathPoints);
            stopDrawingPath();
          }
      }
   });


       //Drawing path 

//    $('#motionAnimation').click(function() {
////        $('#changePath').attr('stroke','#eee');
//         var animation = document.createElementNS(
//                         'http://www.w3.org/1999/xlink', 'use');
//    animation.setAttributeNS('http://www.w3.org/2000/xlink/namespace/', 'xlink:href', '#followpath');
//        $('#svgAnim')[0].appendChild(animation);
//    });  
//    document.getElementById('startMotionAnimation').addEventListener('click',function(){
//  $('#animatedMotionPath').beginElement();
//},false);
 });