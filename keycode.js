<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>keybord</title>
    <style type="text/css">
     
     
    </style>
</head>
<body>

  <input id="textinput" type="text" size="40" onkeypress="events(e)"> 
     
      <table>
      <p id="text"></p>
      <p id="text2"></p>
      </table>
        
     <script type="text/javascript">

      const input = document.querySelector('#textinput')
      

    input.addEventListener('keydown',events)
 
      function events(e){
          document.getElementById('text').innerHTML ='Code : ' + e.keyCode +' Karakter : ' +  String.fromCharCode( e.keyCode) //+'  ' +Number(e.keyCode);
        }

    </script>
</body>
</html>
