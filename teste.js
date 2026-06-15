import { Xtream } from "@iptv/xtream-api";


const config = {
    url: "http://inoveflix.xyz",
    user: "19993080087",
    password: "val993080087"
};

const iptv = new Xtream(config)


const canais = iptv.getChannels();

console.log(canais);

