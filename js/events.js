console.log('DOM Events');

//option 2 to handle click events

 function makeYellow()
    {
        document.body.style.backgroundColor = "yellow";
    }
    function makeRed()
    {
        document.body.style.backgroundColor = "red";
    }

// option 3 : get element by id and then set onclick

    const btnMakeBlue = document.getElementById('btn-make-blue');
   btnMakeBlue.onclick= function makeBlue() {
        document.body.style.backgroundColor = "blue";
    }


    // option 4 : different version

    const btnMakePurple = document.getElementById('btn-make-purple');
btnMakePurple.onclick = makePurple;

   function makePurple() {
    document.body.style.backgroundColor = "purple";
}