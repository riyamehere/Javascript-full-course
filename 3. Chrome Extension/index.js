let myLeads = []
const textEl = document.getElementById('input-el')  //const cant be reassigned
const inputBtn = document.getElementById('input-btn')
const unList = document.getElementById('un-list')
const deleteBtn = document.getElementById('delete-btn')
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById('savetab-btn')

 
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        renderLeads(myLeads)
    })
})

function renderLeads(leads){
    let listItem=""
    for(let i =0;i<leads.length;i++){ 
    listItem += `<li> 
                    <a target='_blank' href='${leads[i]}'> 
                    ${leads[i]}
                    </a>
                  </li>` //template strings
    }
    unList.innerHTML=listItem
}

inputBtn.addEventListener("click", function(){
    myLeads.push(textEl.value)
    textEl.value="" 
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads(myLeads)
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})


// JSON.parse() -> converts strings to Array
// JSON.stringify() ->converts array to strings
