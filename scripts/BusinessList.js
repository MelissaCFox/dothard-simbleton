import { getBusinesses } from "./database.js"
import { Business } from "./Business.js"
// import { getAgents } from "./database.js"
import { Agent, agentDetails } from "./AgentDetails.js"

// const businesses = getBusinesses()
// const agents = agentDetails()

// const companySearchResultArticle = document.querySelector(".foundCompanies")

// document
//     .querySelector("#companySearch")
//         .addEventListener(
//             "keypress",
//             keyPressEvent => {
//                 if (keyPressEvent.charCode === 13) {

//                     // Find Business When Searched By Company Name
//                         // const foundBusiness = businesses.find(businessObj => businessObj.companyName.includes(keyPressEvent.target.value) )
//                         // companySearchResultArticle.innerHTML = Business(foundBusiness);
                    
//                     //Find Agent By First Name or Last Name
//                     const foundAgent = agents.find(agentObj => agentObj.fullName.includes(keyPressEvent.target.value) )
//                     companySearchResultArticle.innerHTML = Agent(foundAgent);

//                 }
//         });



export const BusinessList = (array) => {
    let innerHTML = ""
    array.forEach(
        (businessObj) => {
            innerHTML += Business(businessObj)
        }
    )
    return innerHTML
}

