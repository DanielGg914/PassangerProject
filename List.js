class User{
    constructor(firstName, lastName, dateOfBirth, departCity, arriveCity, dateLeave, dateReturn, bagNum, meal, extra){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.departCity = departCity;
        this.arriveCity = arriveCity;
        this.dateLeave = dateLeave;
        this.dateReturn = dateReturn;
        this.bagNum = bagNum;
        this.meal = meal;
        this.extra = extra;
    }
}

let Userlist = [];
let UserId = 1001;
let extraCostB = 0;
let extraCostT = 0;

function addToList(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    let departCity = document.getElementById("departCity").value;
    let arriveCity = document.getElementById("arriveCity").value;
    let dateLeave = document.getElementById("dateLeave").value;
    let dateReturn = document.getElementById("dateReturn").value;
    let bagNum = document.getElementById("bagNum").value;
    let meal = document.getElementById("meal").value;
    let extra = document.getElementById("extra").value;
    if(firstName != "" && LastName != "" && dateOfBirth != "" && departCity != "" && arriveCity != "" && dateLeave != "" && dateReturn != "" && bagNum != "" && meal != "" && extra != ""){
        let user = new User (firstName, lastName, dateOfBirth, departCity, arriveCity, dateLeave, dateReturn, bagNum, meal, extra);
        userId++;
        userlist.push(user);
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("dateOfBirth").value = "";
        document.getElementById("departCity").value = "";
        document.getElementById("arriveCity").value = "";
        document.getElementById("dateLeave").value = "";
        document.getElementById("dateReturn").value = "";
        document.getElementById("bagNum").value = "";
        document.getElementById("meal").value = "";
        document.getElementById("extra").value = "";
    }
}

function print(){
    printSpace = document.getElementById("printSpace");

    printSpace.innerHTML = "";
    for (let i = 0; i < Userlist.length; i++) {
        printSpace.innerHTML += `<div>${userList[i].firstName}${userlist[i].lastName}${userlist.dateOfBirth}${userList[i].departCity}${userList[i].arriveCity}${userList[i].dateLeave}${userList[i].dateReturn}${userList[i].bagNum}${userList[i].meal}
        ${userList[i].extra}</div>`
    }
}







