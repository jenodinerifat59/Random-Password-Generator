let input = document.getElementById('input');

let btn = document.querySelector('button');



btn.addEventListener('click', () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";


    let passwordLength = 12;

    let password = '';

    for (let i = 1; i <= passwordLength; i++) {
        let randomnumber = Math.floor(Math.random() * chars.length);
        //    password += chars.charAt(randomnumber);
        password += chars[randomnumber];
    }
    input.value = password;

});
