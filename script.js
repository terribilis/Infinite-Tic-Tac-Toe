function show_image(/*sender,*/ src, width, height, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  
var table= document.getElementsByTagName("table");

  document.table.appendChild(img); //DO NOT DO THIS.

  //REPLACE WITH BELLOW CODE
  

  //$(sender).append(TD); //ur element will be appended in the same row, but separated <td></td>.

  //or u use this to append in the same <td></td>

  // $(sender).append(img);

};

function add_X(){
  var src = "http://bookriotcom.c.presscdn.com/wp-content/uploads/2013/07/x.png";
  show_image('http://bookriotcom.c.presscdn.com/wp-content/uploads/2013/07/x.png', 60, 60, "X")
};

function add_O(){
  var src = "http://store.hamiltonmarine.com/prodimg/BER-O.JPG";
  show_image('http://store.hamiltonmarine.com/prodimg/BER-O.JPG', 50, 50, "x")
};
