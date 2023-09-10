
function sayHello(){ // 선언식 - 호출문이 선언식보다 먼저 나와도 됨 = 호이스트 가능하다
    let hello ="문자열 헬로우"
    console.log(hello)
}

const sayBye = function(){ //표현식
    console.log("good bye~~")
}

sayHello()
console.log(hello)