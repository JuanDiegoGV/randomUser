const age = document.querySelector(".age")
const locationO = document.querySelector(".location")
const email = document.querySelector(".email")
const country = document.querySelector(".country")
const textContainer = document.querySelector(".textContainer")
const userName = document.querySelector(".userName")
const userage = document.querySelector(".userAge")
const userlocation = document.querySelector(".userLocation")
const useremail = document.querySelector(".userEmail")
const usercountry = document.querySelector(".userCountry")



let ageIsSelected = false
let locationOIsSelected = false
let emailIsSelected = false
let countryIsSelected = false

function seles(isSelected, component) {
    if (isSelected) {
        component.style.color = "white"
        component.style.backgroundColor = "#FC4800"
        if (component == age) {
            userage.style.display = "block"
        }else if(component == locationO){
            userlocation.style.display = "block"
        }else if(component == email){
            useremail.style.display = "block"
        }else if(component == country){
            usercountry.style.display = "block"
        }
        userName.style.display = "none"
        isSelected = !isSelected
    } else {
        component.style.color = "black"
        component.style.backgroundColor = "#fff"
        if (component == age) {
            userage.style.display = "none"
        }else if(component == locationO){
            userlocation.style.display = "none"
        }else if(component == email){
            useremail.style.display = "none"
        }else if(component == country){
            usercountry.style.display = "none"
        }
        userName.style.display = "block"
        isSelected = !isSelected
    }
}

age.addEventListener("click", () => {
    locationOIsSelected = false
    seles(locationOIsSelected, locationO)
    emailIsSelected = false
    seles(emailIsSelected, email)
    countryIsSelected = false
    seles(countryIsSelected, country)
    ageIsSelected = !ageIsSelected
    seles(ageIsSelected, age)
})

locationO.addEventListener("click", () => {
    ageIsSelected = false
    seles(ageIsSelected, age)
    emailIsSelected = false
    seles(emailIsSelected, email)
    countryIsSelected = false
    seles(countryIsSelected, country)
    locationOIsSelected = !locationOIsSelected
    seles(locationOIsSelected, locationO)
})

email.addEventListener("click", () => {
    locationOIsSelected = false
    seles(locationOIsSelected, locationO)
    ageIsSelected = false
    seles(ageIsSelected, age)
    countryIsSelected = false
    seles(countryIsSelected, country)
    emailIsSelected = !emailIsSelected
    seles(emailIsSelected, email)
})

country.addEventListener("click", () => {
    locationOIsSelected = false
    seles(locationOIsSelected, locationO)
    emailIsSelected = false
    seles(emailIsSelected, email)
    ageIsSelected = false
    seles(ageIsSelected, age)
    countryIsSelected = !countryIsSelected
    seles(countryIsSelected, country)
})