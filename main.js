function check()

  {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    makerequest();
  }



  function compare(){

    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");

    let x = document.getElementById("mail").value;
    let y = document.getElementById("pw").value;

    if(email===x && password===y){
      alert("You are Signed in");
    } else{
      alert("Wrong email and password");
    }


    let a = document.getElementById("div2");
    let b = document.getElementById("div1");
    let c = document.getElementById("div3");
  
    a.style.display="none";
    b.style.display="none";
    c.style.display = "block";
    axios
    .get("http://localhost:3000/users")
    .then((res) => {
      let u = res.data;
      let temp = "";
      for (let i = 0; i < u.length; i++) {
        temp += "<tr>";
        temp += "<td>" + u[i].id + "</td>";
        temp += "<td>" + u[i].name + "</td>";
        temp += "<td>" + u[i].email + "</td>";
        temp += "<td>" + u[i].password + "</td>";
        temp += "</tr>";
      }
      document.getElementById("table-content").innerHTML += temp;
    })
    .catch((err) => {
      console.log(err);
    }); 

}

function requestt()
{
  let y = document.getElementById("div2");
  let x = document.getElementById("div1");
  let z = document.getElementById("div3");

  x.style.display="none";
  y.style.display="none";
  z.style.display = "block";
  axios
  .get("http://localhost:3000/users")
  .then((res) => {
    let u = res.data;
    let temp = "";
    for (let i = 0; i < u.length; i++) {
      temp += "<tr>";
      temp += "<td>" + u[i].id + "</td>";
      temp += "<td>" + u[i].name + "</td>";
      temp += "<td>" + u[i].email + "</td>";
      temp += "<td>" + u[i].password + "</td>";
      temp += "</tr>";
    }
    document.getElementById("table-content").innerHTML += temp;
  })
  .catch((err) => {
    console.log(err);
  });
 
}



function myFunction() 

  {
    let y = document.getElementById("div2");
    let x = document.getElementById("div1");
    let z = document.getElementById("div3");


    x.style.display="none";
    y.style.display="block";
    z.style.display="none";

  }

  function myFunction1()
  
  {
    let x = document.getElementById("div1");
    let y = document.getElementById("div2");
    let z = document.getElementById("div3");

  
    x.style.display="block";
    y.style.display="none";
    z.style.display="none";
  }

  function filterById(jsonObject, id) 
  {return jsonObject.filter(function(jsonObject)
     {return (jsonObject['id'] == id);
    })
     [0];
    }



  function makerequest()
   {

    let name = localStorage.getItem("username");
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");

    axios.post
    (
      "http://localhost:3000/users",
      
      { 
        "name": name, 
        "email": email,
         "password": password },
      "Content-Type : application/json"
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

    
   }

   function editdata(){

    let rowno = document.getElementById('data-edit').value;
    let fname = document.getElementById('text-edit').value;
    let mail = document.getElementById('email-edit').value;
    let pass = document.getElementById('pw-edit').value;

    axios.patch(`http://localhost:3000/users/${rowno}`,
    {
      "name":fname,
      "email": mail,
      "password":pass
    },
    "Content-Type : application/json"
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
    alert("update successfull");

   }
   
   

  

