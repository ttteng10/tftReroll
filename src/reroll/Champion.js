import Ambessa from "../assets/lolchessImg/cost4/Ambessa.png";
import Corki from "../assets/lolchessImg/cost4/Corki.png";
import DrMundo from "../assets/lolchessImg/cost4/DrMundo.png";
import Ekko from "../assets/lolchessImg/cost4/Ekko.png";
import Elise from "../assets/lolchessImg/cost4/Elise.png";
import Garen from "../assets/lolchessImg/cost4/Garen.png";
import Heimerdinger from "../assets/lolchessImg/cost4/Heimerdinger.png";
import Illaoi from "../assets/lolchessImg/cost4/Illaoi.png";
import Silco from "../assets/lolchessImg/cost4/Silco.jpg";
import Twitch from "../assets/lolchessImg/cost4/Twitch.png";
import Vi from "../assets/lolchessImg/cost4/Vi.png";
import Zoe from "../assets/lolchessImg/cost4/Zoe.png";

export default function Main4costImg() {
  const cost4 = [
    {
      id: "Ambessa",
      name: "암베사",
      src: Ambessa,
    },
    {
      id: "Corki",
      name: "코르키",
      src: Corki,
    },
    {
      id: "DrMundo",
      name: "문도",
      src: DrMundo,
    },
    {
      id: "Ekko",
      name: "에코",
      src: Ekko,
    },
    {
      id: "Elise",
      name: "엘리스",
      src: Elise,
    },
    {
      id: "Garen",
      name: "가렌",
      src: Garen,
    },
    {
      id: "Heimerdinger",
      name: "하이머딩거",
      src: Heimerdinger,
    },
    {
      id: "Illaoi",
      name: "일라오이",
      src: Illaoi,
    },
    {
      id: "Silco",
      name: "실코",
      src: Silco,
    },
    {
      id: "Twitch",
      name: "트위치",
      src: Twitch,
    },
    {
      id: "Vi",
      name: "바이",
      src: Vi,
    },
    {
      id: "Zoe",
      name: "조이",
      src: Zoe,
    },
  ];
  let randomNum = Math.floor(Math.random() * 12) + 1;
  return cost4[randomNum];
}
