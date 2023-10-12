document.addEventListener("DOMContentLoaded", function() {
    const formularContact = document.getElementById("formular-contact");
    
    formularContact.addEventListener("submit", function(event) {
        event.preventDefault(); // Preveniți trimiterea formularului la server
        
        // Obțineți valorile introduse în formular
        const nume = document.getElementById("nume").value;
        const email = document.getElementById("email").value;
        const mesaj = document.getElementById("mesaj").value;
        
        // Aici puteți adăuga logica pentru a trimite datele la server sau pentru a le prelucra în alt fel
        // De exemplu, puteți utiliza funcția fetch() pentru a trimite datele la un server
        
        // După trimiterea cu succes, puteți afișa un mesaj de confirmare
        alert("Mesajul a fost trimis cu succes!");
        
        // Ștergeți valorile din formular pentru a permite utilizatorului să introducă noi date
        formularContact.reset();
    });
});
