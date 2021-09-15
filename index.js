 function userName(e){
     e.preventDefualt()
     let username = document.getElementById('name').value
     console.log(username)
     let nameFeild = document.getElementById('nameFeild')
     console.log(nameFeild)

     nameFeild.innerHTML = username
 }
 