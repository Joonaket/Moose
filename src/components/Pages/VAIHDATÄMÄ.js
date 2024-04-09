let paikallinenIP;

const baseIP = "http://localhost";

let sinunIP = "moosebackend-js7ux2g4rq-lz.a.run.app";        //Laita tämän muuttujan arvoksi oman koneen IP-osoite jos halut kokeilla sivua mobiililla, ilman tätä API-kutsut ei toimi kuin localhostilla

let vaihdettavaIP = "http://"+sinunIP;

if (vaihdettavaIP === "http://") {
    paikallinenIP = baseIP;
}
else{
    paikallinenIP = vaihdettavaIP;
}


export { paikallinenIP };
