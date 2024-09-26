
document.addEventListener('DOMContentLoaded', async function() {
    const users = await fetch('/api/users')
    const data = await users.json();
    console.log(data);

    const $tableUsers = document.getElementById('table-users');

    for (let user of data) {
        const $tr = document.createElement('tr');
        const $tdId = document.createElement('td');
        const $tdName = document.createElement('td');
        const $tdEmail = document.createElement('td');
        const $tdActions = document.createElement('td');

        $tdId.textContent = user.id;
        $tdName.textContent = user.name;
        $tdEmail.textContent = user.email;

        const $btnEdit = document.createElement('button');
        $btnEdit.textContent = 'Edit';
        $btnEdit.addEventListener('click', async () => {
            const user = await fetch(`/api/users/${user.id}`);
            const data = await user.json();
            console.log(data);
        });

        const $btnDelete = document.createElement('button');
        $btnDelete.textContent = 'Delete';
        $btnDelete.addEventListener('click', async () => {
            const user = await fetch(`/api/users/${user.id}`, {
                method: 'DELETE'
            });
            const data = await user.json();
            console.log(data);
        });

        $tdActions.appendChild($btnEdit);
        $tdActions.appendChild($btnDelete);

        $tr.appendChild($tdId);
        $tr.appendChild($tdName);
        $tr.appendChild($tdEmail);
        $tr.appendChild($tdActions);

        $tableUsers.appendChild($tr);
    }

})