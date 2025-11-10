function encodeAndDecodeMessages() {
   let encodeButton = document.getElementsByTagName('button')[0];
   let decodeButton = document.getElementsByTagName('button')[1];
   let textAreaEncode = document.getElementsByTagName("textarea")[0];
   let textAreaDecode = document.getElementsByTagName("textarea")[1];


   encodeButton.addEventListener('click', sendAndEncode);
   decodeButton.addEventListener('click', decodeAndRead);

   function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
   }

    function previousChar(c) {
    return String.fromCharCode(c.charCodeAt(0) - 1);
   }

   function transform(text, fn) { 
    
    return text.split('').map(fn).join('');

   }

   function sendAndEncode() {

   let valueToEncode = textAreaEncode.value;
   let encode = transform(valueToEncode, nextChar);

   textAreaDecode.value = encode;


   }

   function decodeAndRead() {

    textAreaDecode.value = transform(textAreaDecode.value, previousChar);
   }
}