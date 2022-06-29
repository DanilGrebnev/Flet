document.addEventListener('click', e => {

    if (e.target.classList.contains('sub-btn')) {
        e.preventDefault()
        const form = e.target.closest('form');
        let name = form.name.value,
            phone = form.phone.value,
            email = form.email.value;
        const b = {
            name,
            phone,
            email,
        }

        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers,
            body: JSON.stringify(b),
            redirect: 'follow'
        };

        fetch("http://192.168.1.38:3050/fb", requestOptions)
            .then(res => res.json())
            .then(r => {
                console.log(r)
                if (r.result) {
                    alert("Ваша завка успешно отправлена!")
                    name = '';
                    phone = '';
                    email = '';
                }
                else alert("Не удалось отправить заявку обратитесь к администратору")
            })
            .catch(error => {
                console.log('error', error)
                alert("Не удалось отправить заявку обратитесь к администратору")
            });

    }

})







