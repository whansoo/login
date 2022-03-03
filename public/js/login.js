"use strict"


const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

   /* console.log(id);   콘솔로그가 위의id가 실행하기 전에 먼저 실행이 되서 null값이 나옴 */
                       /*따라서 login.ejs파일에 가서 defer를 추가한다.*/
loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
 
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(req),
    })
       .then((res) => res.json())
       .then((res) =>  {
        if (res.success) {
            location.href = "/";
        }   else {
            alert(res.msg);
        }
       })
       .catch((err) => {
         console.error(new Error("로그인 중 에러 발생"));
       });
}