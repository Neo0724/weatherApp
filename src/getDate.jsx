export default function getDate(timezone, setCountryDate) {
    let getDay = ["Sunday", "Saturday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",]
    const currentDate = new Date()
    const utcTime = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000)
    const countryTime = new Date(utcTime + (1000 * timezone))
    setCountryDate(() => {
        return {date: countryTime.getDate(), 
            month: countryTime.getMonth() + 1, 
            year: countryTime.getFullYear(), day: 
            getDay[countryTime.getDay()]
        }
    })
}
