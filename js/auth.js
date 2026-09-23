async function signup() {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const { data, error } =
        await db.auth.signUp({
            email,
            password
        });

    if (error) {
        alert(error.message);
        return;
    }

    alert("회원가입이 완료되었습니다.");
}
