async function getData()
{
    fetch('https://reqres.in/api/users')
    .then(response=>
        {
            console.log(response);
            if(!response.ok)
            {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data=>{
            console.log(data.data);
            const html=data.data
            .map(user=>
                {
                    return `
                    <div class="user">
                    <p> Id: ${user.id}</p>
                    <p> Name: ${user.first_name}</p>
                    <p> Email: ${user.email}</p>
                    </div>
                    `;
                }).join("");
            document.querySelector('#Display').
            insertAdjacentHTML("afterbegin",html);
        }).catch(error=>
            {
                console.log(error);
            });
}
getData();