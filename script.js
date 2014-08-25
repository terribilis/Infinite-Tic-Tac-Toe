function show_image(sender, src, width, height, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  document.body.appendChild(img);
  // This next line will just add it to the <body> tag
  /*var TD = $("<td></td>");
  TD.append(img);

  $(sender).parent().append(TD); */
};
function add_X(){
  var src = "http://bookriotcom.c.presscdn.com/wp-content/uploads/2013/07/x.png";
  show_image($(this),'http://bookriotcom.c.presscdn.com/wp-content/uploads/2013/07/x.png', 60, 60, "X")
};
function add_O(){
  var src = "http://store.hamiltonmarine.com/prodimg/BER-O.JPG";
  show_image($(this), 'http://store.hamiltonmarine.com/prodimg/BER-O.JPG', 50, 50, "x")
};
