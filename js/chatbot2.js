var updateUrl = "https://students.codex.today/updateUser";
var token = localStorage.getItem("token");
var questionss = [
    {
        question:"Full Form of HTML",
        answer:"Hyper Text Markup Language",
    },
    
    {
        question:"Full Form of CSS",
        answer:"Cascadian Style Sheet",
    },
        
    {
        question : "What does GPT stands for in ChatGPT?",
        answer : "Generative Pre-Trained Transformer",
    },
        
    {
        question : "What is C?",
        answer : "C Is Basic Programming Language",
    },
        
    {
        question : "Describe AI in one line",
        answer: "Artificial Intelligence",
    },
        
    {
        question: "What are the uses of chatbot?",
        answer: "Chatbot is used for multiple purposes : It gives us the information required to our needs, It also useful for automating appointments ; booking or making personalized offers based on our interests and searches ; voice inputs and outputs (this is accessibility function) ;",
    },
        
    {
        question: "Does all chatbots require AIto function?",
        answer: "No, Depending on the company's requirement these may change on the"
    },
];


window.onload = ()=>{
    const token = localStorage.getItem("token");
    if(!token){
        window.location.assign("/html/chatbot.html");
    }


   
    const renderHtml = (data) => {
        bodyText =
        `<div>
            question:"Full Form of HTML",
            answer:"Hyper Text Markup Language",
        </div>
        <div>
            question:"Full Form of CSS",
            answer:"Cascadian Style Sheet",
        </div>
        <div>
            question : "What does GPT stands for in ChatGPT?",
            answer : "Generative Pre-Trained Transformer",
        </div>
        <div>
            question : "What is C?",
            answer : "C Is Basic Programming Language",
        </div>
        <div>
            question : "Describe AI in one line",
            answer: "Artificial Intelligence",
        </div>
        <div>
           question: "What are the uses of chatbot?",
           answer: "Chatbot is used for multiple purposes : It gives us the information required to our needs, It also useful for automating appointments ; booking or making personalized offers based on our interests and searches ; voice inputs and outputs (this is accessibility function) ;",
        </div>
        <div>
           question: "Does all chatbots require AI to function?",
           answer: "No, Depending on the company's requirement these may change on the"
        </div>`
    }

    loginForm.addEventListener("submit",() => {
        var updating = {
        email : updating.email.value,
        questionss : updating.question.value,
        }
    })
}

    const fetchData = async(data1)=> {
        const res = await fetch(updateUrl,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                Authorization : "Bearer " + token,
            }, 
            body: JSON.stringify({
                email: "gowtham123@gmail.com",
                questionss
            })
        })
        const data1 = await res.json()
        console.log(data1);
    }

fetchData(questionss);