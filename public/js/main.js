const userList  = document.getElementById('bookingList');

async function getAllUsers(){
    try {
        const userList = document.getElementById('bookingList');
        const response = await axios.get('http://localhost:3000/users');
        console.log(response.data);
        response.data.forEach((user) => {
            const li = document.createElement('li');
            li.appendChild(
                document.createTextNode(`${user.userName} ${user.contact} ${user.email}`)
            )
            const editBtn = document.createElement('button');
            const deleteBtn = document.createElement('button');
            editBtn.innerHTML = 'Edit';
            deleteBtn.innerHTML = 'Delete';
            deleteBtn.className = 'delete';
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
            userList.appendChild(li);
        })
    } catch (error) {
        console.log(error);
    }
}

async function deleteUser(e){
    try {
        if(e.target.classList.contains('delete')){
            let id;
            let userData = e.target.parentNode.firstChild.wholeText.split(" ");
            const contact = userData[userData.length - 2];
            const email = userData[userData.length-1];
            // console.log(contact , email); 
            const res = await axios.get("http://localhost:3000/users");
            res.data.forEach((user) => {
                if(user.contact == contact && user.email == email){
                    console.log(user.id);
                    id = user.id;
                }
            });
            await axios.get(`http://localhost:3000/deleteUser/${id}`);
            window.location.reload();
        }
    } catch (error) {
        console.log(error);
    }
}



document.addEventListener('DOMContentLoaded' , getAllUsers);

userList.addEventListener('click' , (e) => {
    deleteUser(e);
})