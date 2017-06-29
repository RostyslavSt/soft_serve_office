 nameValidation = (name) => {
     let letters = /^[A-Za-z]+$/;
     if (name.match(letters) && (name.length > 2)) {
         return true
     }
     return false;
 }

 export default nameValidation;