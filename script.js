const body = document.getElementById("root")
const inmod = document.getElementById("inmod")
const outmod = document.getElementById("outmod")
const c_button = document.getElementById("c-button")
const contact = document.getElementById("contact")
const contactBox = document.getElementById("contact-box");
const h_contact = document.getElementById("h-contact")
const hero = document.getElementById("hero")


function uhide(){
    contact.classList.remove("opacity-0", "sm:scale-95", "pointer-events-none");
    contact.classList.add("opacity-100", "sm:scale-100");
    hero.classList.add("opacity-50")
}

function hide(){
    contact.classList.remove("opacity-100", "sm:scale-100");
    contact.classList.add("opacity-0", "sm:scale-95", "pointer-events-none");
    hero.classList.remove("opacity-50")
}
c_button.addEventListener("click", uhide)


h_contact.addEventListener("click", hide)


document.addEventListener("click", function (e) {
    
    const isVisible = contact.classList.contains("opacity-100");
    const isInsideModal = contactBox.contains(e.target);
    const isTrigger = c_button.contains(e.target);

    if (isVisible && !isInsideModal && !isTrigger) {
        hide();
        
    }
});

document.addEventListener("keydown", function (e) {
    const isVisible = contact.classList.contains("opacity-100");
    if (e.key === "Escape" && isVisible) {
        hide();
    }
});



function change(){
    body.classList.toggle("bg-white")
    body.classList.toggle("text-white")
    body.classList.toggle("text-gray-800")
    inmod.classList.toggle("bg-black")
    inmod.classList.toggle("bg-white")
    outmod.classList.toggle("bg-[#111111]")
    outmod.classList.toggle("bg-white")
    outmod.classList.toggle("translate-x-5")
    contact.classList.toggle("text-black")
    contactBox.classList.toggle("bg-gray-300")
    contactBox.classList.toggle("bg-gray-800")
    document.getElementById("name").classList.toggle("placeholder:text-black")
    document.getElementById("email").classList.toggle("placeholder:text-black")
    document.getElementById("subject").classList.toggle("placeholder:text-black")
    document.getElementById("message").classList.toggle("placeholder:text-black")
}

inmod.addEventListener("click", change)


function sendEmail(e) {
    e.preventDefault(); 

 

    let details = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_4685285", "template_sgosnsp", details)
        .then(() => alert("Your message has been sent"))
        .catch((err) => alert("Failed to send message. Please try again."));

    contact.classList.remove("opacity-100", "sm:scale-100");
    contact.classList.add("opacity-0", "sm:scale-95", "pointer-events-none");
    hero.classList.remove("opacity-50")
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}
