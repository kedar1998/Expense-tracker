let balance = 0;
let income = 0;
let expense = 0;

// {/* <div class="item flex items-center justify-between bg-white shadow-xl p-2 my-2">
// <p class="text bg-white">Salary</p>
// <div class="flex items-center space-x-3 bg-white">
//     <p class="amount bg-white">+100000</p>
//     <button class="bg-white text-red-600 font-bold">X</button>
// </div>
// </div> */}

function item(text,amount){
    let div = document.createElement("div");
    div.classList.add("item", "flex", "items-center", "justify-between", "bg-white", "shadow-xl", "p-2", "my-2");

    let p = document.createElement("p");
    p.classList.add("text", "bg-white");
    p.textContent = `${text}`;

    let div2 = document.createElement("div");
    div2.classList.add("flex", "items-center", "space-x-3", "bg-white");

    let p2 = document.createElement("p");
    p2.classList.add("amount", "bg-white");
    p2.textContent = `${amount}`;

    let btn = document.createElement("button");
    btn.classList.add("bg-white", "text-red-600", "font-bold", "delete");
    btn.textContent = "X";

    div.append(p);
    div.append(div2);

    div2.append(p2);
    div2.append(btn);

    document.querySelector(".history-items").append(div);
}


document.querySelector("#btn").addEventListener("click", function(e){
    e.preventDefault();
    
    
    let txt = document.querySelector("#text").value;
    let amt = document.querySelector("#amount").value;

    if(amt[0] == "+" || amt[0] == "-"){
        
        
        if(txt && amt){
            item(txt,amt);
        }
    
        if(amt[0] == "+"){
            income = income + Number.parseInt(amt);
            document.querySelector(".income").textContent = `$${income}`
            
            balance = balance + income;
            document.querySelector(".balance").textContent = balance;
        }
        else if(amt[0] == "-"){
            expense = expense + Math.abs(Number.parseInt(amt));
            document.querySelector(".expense").textContent = `$${expense}`
            
            balance = balance - expense;
            document.querySelector(".balance").textContent = balance;
        }
        
        document.querySelector("#text").value = "";
        document.querySelector("#amount").value = "";
    }

    let del = document.querySelectorAll(".delete");
    del.forEach((ele) =>{
        ele.addEventListener("click", function(e){
            e.target.parentElement.parentElement.remove();
        })
    })
});


