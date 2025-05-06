//Filp on click
document.getElementById("flip-card").addEventListener("click", () =>{
    document.getElementById("flip-card").classList.toggle("flip");
});
//Typewriter Effect
const text = "Web Developer | UX Enthusiast";
let index = 0;

function typeWriter(){
    if (index <text.length){
        document.getElementById("typed-text").innerHTML +=text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();
//Theme toggle
document.getElementById("toggle-theme").addEventListener("click", () =>{
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark")? "dark" : "light");
});

//Persist theme
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}
//DownLoad vCard
document.getElementById("download-vcard").addEventListener("click", () =>{
    const link = document.createElement('a');
    link.href = 'assets/nhiem.vcf';
    link.download = 'nhiem-nguyen-business-card.vcf';
    link.click();
})
//QR code generator
new QRCode(document.getElementById("qrcode"), {
    text: "https://my-portfolio-blog-pied.vercel.app/",
    width: 100,
    height: 100,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
  //Show tips
  // Show reminder after 3 seconds
  const flipReminder = document.getElementById("flip-reminder");
  const qrReminder = document.getElementById("qr-reminder");
  const card = document.getElementById("flip-card");
  
  // Show the first tip after 3 seconds
  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      flipReminder.classList.add("visible");
    }, 3000);
  });
  
  // When the card is clicked
  card.addEventListener("click", () => {
    flipReminder.classList.remove("visible");
  
    // Show the second tip after a short delay (for smooth transition)
    setTimeout(() => {
      qrReminder.classList.add("visible");
    }, 600); // match the transition duration
  });
  