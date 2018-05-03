var image = {
	width: 100,
	height: 400,
	title: 'Cool image'
};


function multiplyNumeric(obj) {
    
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  
  for (prop in obj) {
    if(isNumeric(obj[prop])) {
      obj[prop] *= 2;
    }
  }
  
  return "image width: " + obj.width + " image height: " + obj.height + " image title: " + obj.title;
  
}

console.log(multiplyNumeric(image));