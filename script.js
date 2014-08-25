function show_image(src, width, height, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;

  // This next line will just add it to the <body> tag
  x.appendChild(img); 
};
function add_X(){
  var src = "http://bookriotcom.c.presscdn.com/wp-content/uploads/2013/07/x.png";
  show_image('http://bookriotcom.c.presscdn.com/wp-content/uploads/2013/07/x.png', 60, 60, "X")
};
function add_O(){
  var src = "http://store.hamiltonmarine.com/prodimg/BER-O.JPG";
  show_image('http://store.hamiltonmarine.com/prodimg/BER-O.JPG', 50, 50, "x")
};
