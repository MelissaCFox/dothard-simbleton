import { getAgents } from "./database.js"
import { getBusinesses } from "./database.js"

// const agentNameList = getAgents()
const businessList = getBusinesses()

export const agentDetails = () => {
    const mappedBusinessList = businessList.map(business => {
        const newObject = {
            fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
            company: business.companyName,
            phoneNumber: business.phoneWork
        }
        return newObject
    })
    return mappedBusinessList
}


export const agentNameList = (agentArray) => {
    let innerHTML = ""

    agentArray.forEach(
        (agentObj) => {
            innerHTML += `<section class="agent-fullName">${agentObj.nameFirst} ${agentObj.nameLast}</section>`
        }
    );
    return innerHTML
}

export const agentDetailsList = (agentArray) => {
    let innerHTML = ""
    agentArray.forEach(
        (agentObj) => {
            innerHTML += `
            <section class="agentObj-info">
            <h3 class="agentFullName">${agentObj.fullName}</h3>
            <section class="agentFullName">${agentObj.company}</section>
            <section class="agentFullName">${agentObj.phoneNumber}</section>
            </section>
            `
        }
    ); return innerHTML
}

export const Agent = (agentObj) => {
    return `
        <section class="business">
            <h2 class="agent__fullName">${agentObj.fullName}</h2>
            <div class="agent__company">${agentObj.company}</div>
            <div class="agent__phoneNumber">${agentObj.phoneNumber}</div>
        </section>
    `
}