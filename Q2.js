async function getUsers()
{
    let url = 'https://reqres.in/api/users'
    try{
        const response = await fetch(url);
        console.log('status code: ', response.status);
        if(!response.ok){
            console.log(response);
            throw new Error(`Error! status: ${response.status}`);
        }
        return await response.json();
    } catch(error){
        console.log(error);
    }
}   
async function renderUsers(){
    let users = await getUsers();
    users = users.data;
    console.log(users);
    let html ='';
    users.forEach(user =>{
        let htmlSegment = `<div class="user">
            <p> Id: ${user.id}</p>
            <p> Name: ${user.first_name}</p>
            <p> Email: ${user.email}</p>
            </div>`;
        html += htmlSegment;
    });
    let var_users = document.querySelector('.users');
    var_users.innerHTML = html;
}



renderUsers();