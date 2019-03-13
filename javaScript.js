


let reponse = prompt("Hey mon ami ! Tu aimes ça les patates ?");

switch (reponse) {
    case 'non':
        alert('c est bien dommage');
        break;
    case 'oui':
        let message = "#"
        console.log(message);
        for (let i = 0; i < 7; i++) {
            message = message +"#"
            console.log(message)
        }
        break;
    // cas ou l'internaute repond ni oui ni non.
    default:
        alert('Je vous sens comme tiraillé');
}



