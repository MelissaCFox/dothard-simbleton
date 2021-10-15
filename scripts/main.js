import { BusinessList } from "./BusinessList.js"
import { getBusinesses } from "./database.js"
import { getNewYorkBusinesses } from "./database.js"
import { getManufacturingBusinesses } from "./database.js"
import { getAgents } from "./database.js"
import { agentDetails } from "./AgentDetails.js"
import { agentNameList } from "./AgentDetails.js"
import { agentDetailsList } from "./AgentDetails.js"
import { Agent } from "./AgentDetails.js"
import { BusinessWithOrderTotal } from "./Business.js"
import { Business } from "./Business.js"

const businessArray = getBusinesses()
const newYorkArray = getNewYorkBusinesses()
const manufacturingArray = getManufacturingBusinesses()

const contentTarget = document.querySelector(".business-list")
const containerHTML = BusinessList(businessArray)
contentTarget.innerHTML = containerHTML


const newYorkSection = document.querySelector(".new-york-business-list")
const newYorkHTML = BusinessList(newYorkArray)
newYorkSection.innerHTML = newYorkHTML

const manufacturingSection = document.querySelector(".manufacturing-list")
const manufacturingHTML = BusinessList(manufacturingArray)
manufacturingSection.innerHTML = manufacturingHTML

//Display Agent Names
// console.log(getAgents())
// const agentNamesArray = getAgents()
// const agentNameSection = document.querySelector(".agent-names")
// agentNameSection.innerHTML = agentNameList(agentNamesArray)

//Display Agent Info
console.log(agentDetails())
const agentDetailsArray = agentDetails()
const agentDetailsSection = document.querySelector(".agent-details")
agentDetailsSection.innerHTML = agentDetailsList(agentDetailsArray)

//Search Bar Key Press Event
const businesses = getBusinesses()
const agents = agentDetails()

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {

                    // Find Business When Searched By Company Name
                        const foundBusiness = businesses.find(businessObj => businessObj.companyName.includes(keyPressEvent.target.value) )
                        // companySearchResultArticle.innerHTML = Business(foundBusiness);
                        companySearchResultArticle.innerHTML = BusinessWithOrderTotal(foundBusiness)
                    
                    //Find Agent By First Name or Last Name
                    // const foundAgent = agents.find(agentObj => agentObj.fullName.includes(keyPressEvent.target.value) )
                    // companySearchResultArticle.innerHTML = Agent(foundAgent);

                }
        });
