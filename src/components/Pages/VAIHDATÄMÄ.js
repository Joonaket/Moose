let paikallinenIP;

const baseIP = "https://localhost";

let sinunIP = "moosebackend-js7ux2g4rq-lz.a.run.app";        //Laita tämän muuttujan arvoksi oman koneen IP-osoite jos halut kokeilla sivua mobiililla, ilman tätä API-kutsut ei toimi kuin localhostilla

let vaihdettavaIP = "https://"+sinunIP;

if (vaihdettavaIP === "https://") {
    paikallinenIP = baseIP;
}
else{
    paikallinenIP = vaihdettavaIP;
}


export { paikallinenIP };
