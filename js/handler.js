 document.getElementById('btn-update-title').addEventListener('click', function() {
        // console.log('btn');
const pageTitle = document.getElementById('page-title');
pageTitle.innerText = 'Title Updated';
    });


 document.getElementById('btn-login').addEventListener('click', function() {
    const userInfo = document.getElementById('user-info');
    userInfo.innerText = 'User Logged in Successfully';
   });