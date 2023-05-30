// var inp1 = document.getElementById("inp1");
// var btn1 = document.getElementById("btn1");
// var icon1 = document.getElementById("icon1");

// var questionss = [
//     {
//         question:"Full Form of HTML",
//         answer:"Hyper Text Markup Language",
//     },

//     {
//         question:"Full Form of CSS",
//         answer:"Cascadian Style Sheet",
//     },

//     {
//         question : "What does GPT stands for in ChatGPT?",
//         answer : "Generative Pre-Trained Transformer",
//     },

//     {
//         question : "What is C?",
//         answer : "C Is Basic Programming Language",
//     },

//     {
//         question : "Describe AI in one line",
//         answer: "Artificial Intelligence",
//     },

//     {
//         question: "What are the uses of chatbot?",
//         answer: "Chatbot is used for multiple purposes : It gives us the information required to our needs, It also useful for automating appointments ; booking or making personalized offers based on our interests and searches ; voice inputs and outputs (this is accessibility function) ;",
//     },

//     {
//         question: "Does all chatbots require AIto function?",
//         answer: "No, Depending on the company's requirement these may change on the"
//     },
// ];

// btn1.addEventListener("click",() => {
//     var a = inp1.value;
//     for(i=0 ; i<questionss.length ; i++) {
//         if(a == " ") {
//             console.log("please enter a question");
//         }
//         if(a == questionss[i].question){
//             console.log(questionss[i].answer);
//         }
//     }
// })







var register = document.getElementById("register");

var url = "https://students.codex.today/createAccount";


register.addEventListener("submit" ,(event) => {
    event.preventDefault();
    
    const regform = {
        name : register.name.value,
        email : register.email.value,
        password : register.password.value,
    }

    fetch(url, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            // Authentication : "Bearer " + token,
        },
        body : JSON.stringify(regform),
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))

})

// LOGIN //
var loginForm = document.getElementById("login");

var loginUrl = "https://students.codex.today/login";

loginForm.addEventListener("submit", async(event)=>
{
    try
    {
        event.preventDefault();
        var loginUser = {
            email : loginForm.email.value,
            password : loginForm.password.value,
        }
        var res = await fetch(loginUrl, {
            method:"POST",
            headers : {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(loginUser)
        })
        var data = await res.json();
        // localStorage.setItem("access",data.access); [for limited objects] ,, we use this method;
        const keys=Object.keys(data);
        keys.forEach((e)=> localStorage.setItem(e,data[e]));
        window.location.assign("/html/chatbot2.html");
    }
    catch(error)
    {
        console.log(error);
    }
});