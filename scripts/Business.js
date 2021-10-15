
export const Business = (businessObj) => {
    return `
        <section class="business">
            <h2 class="business__companyName">${businessObj.companyName}</h2>
            <div class="business__companyStreetAddress">${businessObj.addressFullStreet}</div>
            <div class="business__companyCityState">${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</div>
        </section>
    `
}



export const BusinessWithOrderTotal = (businessObj) => {
    const orderTotal = (businessObj) => {
        let total = 0
        debugger
        for (let i=0; i<businessObj.orders.length; i++) {
            total += businessObj.orders[i]
        } 
        return total
    }
    return `
    <section class="business">
        <h2 class="business__companyName">${businessObj.companyName} (${orderTotal(businessObj).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })})</h2>
        <div class="business__companyStreetAddress">${businessObj.addressFullStreet}</div>
        <div class="business__companyCityState">${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</div>
    </section>
`
}