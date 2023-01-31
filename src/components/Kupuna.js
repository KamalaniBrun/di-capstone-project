import { Navbar } from "./Navbar";
import henryAuwae from "../images/kupuna/pictures/Auwae.jpg";
import auntyMargaret from "../images/kupuna/pictures/Aunty-Margaret-Machado.jpg";
import craver from "../images/kupuna/pictures/Craver.jpg";
import ilei from "../images/kupuna/pict/Ilei.jpg";
import wong from "../images/kupuna/Wong.jpg";
import ohai from "../images/kupuna/pict/Ohai.jpg";
import papaTom from "../images/kupuna/pict/Papa Tom.jpg";
import { Footer } from "./Footer";
import kupunaBanner from "../images/kupuna/kupuna-banner.png";

export const Kupuna = () => {
  return (
    <div>
      <Navbar />
      <header className="page-header">Our Kupuna</header>

      <img className="about-pic" src={kupunaBanner} alt="kupuna-banner" />

      <div className="kupuna-intro">
        Hali`a Aloha, a fond remembrance of the kupuna that we cherished and
        loved. We honor them by carrying on the traditions that they have passed
        down to us.
      </div>

      <div className="kupuna">
        <div className="kupuna-section">
          <div className="kupuna-body">
            Papa Henry Auwae (1906-2000) a kahuna lā‘au lapa‘au from Hawai`i
            Island was instrumental behind the organization of kupuna healers in
            the 1980s and po‘o in the 1990s. He has many haumana throughout the
            islands.
          </div>
          <div className="kupuna-img-container">
            <img className="kupuna-img" src={henryAuwae} alt="henry-auwae" />
          </div>
        </div>

        <div className="kupuna-section">
          <div className="kupuna-body">
            Aunty Margaret Machado (1916-2009) was a well known lomilomi
            practitioner from Hawai`i Island. Many people from around the world
            sought out her healing, and to be taught her style of lomilomi.
          </div>
          <div className="kupuna-img-container">
            <img
              className="kupuna-img"
              src={auntyMargaret}
              alt="margaret-machado"
            />
          </div>
        </div>

        <div className="kupuna-section">
          <div className="kupuna-body">
            Aunty Malia Craver (1927-2009) was a well known ho`oponopono
            practitioner that has taught many student through The Queen
            Lili`uokalani Children’s Center.
          </div>
          <div className="kupuna-img-container">
            <img className="kupuna-img" src={craver} alt="craver" />
          </div>
        </div>

        <div className="kupuna-section">
          <div className="kupuna-body">
            Aunty Ilei Beniamina (1956-2020) was a cultural practitioner from
            Ni`ihau that advocated for the education and health of her people.
            She was a Hoku Hanohano award winner, and helped establish `Aha
            Punana Leo and the Native Hawaiian Health System here on Kaua`i.
          </div>
          <div className="kupuna-img-container">
            <img className="kupuna-img" src={ilei} alt="ilei" />
          </div>
        </div>

        <div className="kupuna-section">
          <div className="kupuna-body">
            Papa Francis “Wongie” Wong was a prolific martial arts practitioner
            that included lua, lim lama, and kung fu. He also practiced lomilomi
            and ho`oponopono.
          </div>
          <div className="kupuna-img-container">
            <img className="kupuna-img" src={wong} alt="papa-wongie" />
          </div>
        </div>

        <div className="kupuna-section">
          <div className="kupuna-body">
            Kumu Levon Ohai (1942-2012) was a renown practitioner of la`au
            lapa`au from Kaua`i. He has taught numerous students throughout
            Hawai`i as a Kumu at The University of Hawai`i, Manoa. He was very
            influential in the present day revival of la`au lapa`au.{" "}
          </div>
          <div className="kupuna-img-container">
            <img className="kupuna-img" src={ohai} alt="ohai" />
          </div>
        </div>

        <div className="kupuna-section">
          <div className="kupuna-body">
            Papa Tom Takahashi (1928-2019) was Kaua`i’s kupuna healer. He was a
            well-known practitioner of pule from Ni`ihau that resided on the
            west side of Kaua`i.
          </div>
          <div className="kupuna-img-container">
            <img className="kupuna-img" src={papaTom} alt="papa-tom" />
          </div>
        </div>

        {/* <div className="kupuna-body">
          Aunty Mahi Poepoe practiced the lomilomi form of kualua as well as
          la`au lapa`au. She lived on Maui and spent time on Kaua`i to share her
          knowledge about healing.
        </div>

        <div className="kupuna-body">
          Dr. William “Pila” Kikuchi (1935-2003) was a professor of anthropology
          and was known as, “Kaua`i’s Archaeologist.” Besides archaeology, he
          had collected many mo`olelo about Kaua`i’s history, culture, and the
          supernatural.
        </div>
        <div className="kupuna-body">
          Papa Kalua Kaiahua (1936-2000) was a Hawaiian spiritual practitioner
          that included la`au lapa`au and lomilomi. He lived and practiced on
          the island of Maui and O`ahu.
        </div>

        <div className="kupuna-body">
          Braddah Charlie Naihe (1956-2022) was a cultural practitioner from the
          island of Kaua`i. He practiced various arts such as oli, pule, and
          lua.{" "}
        </div>
        <div className="kupuna-body">
          Kumu Dane Kaohelani Silva (D. 2022) was a chiropractor residing on the
          island of Hawai`i. He was very active in the community and taught
          la`au lapa`au, lomilomi, and martial arts.
        </div>
        <div className="kupuna-body">
          Merrell Cardejon (1947-2017) was a member of the Kaua`i Kupuna Board
          of Traditional Healing, and the late husband of Gwen Cardejon. He
          resided in Kekaha, Kaua`i.
        </div> */}
      </div>
      <Footer />
    </div>
  );
};
