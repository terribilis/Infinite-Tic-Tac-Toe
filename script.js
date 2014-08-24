function show_image(src, width, height, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;

  // This next line will just add it to the <body> tag
  document.body.appendChild(img); 
};
function add_X(){
  var src = "http://google.com/images/logo.gi";
  show_image("http://google.com/images/logo.gi",100px, 100px, "Bleeding Awesome X")
};
function add_O(){
  var src = "http://store.hamiltonmarine.com/prodimg/BER-O.JPG";
  show_image('http://store.hamiltonmarine.com/prodimg/BER-O.JPG', 50, 50, "x")
};

