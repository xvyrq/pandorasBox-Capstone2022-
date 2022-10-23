// https://www.codebrainer.com/blog/contact-form-in-javascript

function createUser() {
   var url = "https://45.56.126.232:3333/api/groups";

   var xhr = new XMLHttpRequest();
   xhr.open("POST", url);

   xhr.setRequestHeader("Authorization", "Bearer 5caca5184bdafafa1d9fb4d1d89947d58f4d2f2ffa684e4645fd00a41a992630");
   xhr.setRequestHeader("Content-Type", "application/json");

   xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
         console.log(xhr.status);
         console.log(xhr.responseText);
      }};


   var data = {
      // create random group name
      "name": "group${Math.floor(Math.random() * 1000000)}",
      "targets":[
         {
         "email":"kiritoassualt@gmail.com"
         }
         ]
   };

   xhr.send(data);
}


