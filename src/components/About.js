import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import aboutPic from "../images/about-banner.png";
import seanLomi from "../images/practitioners/sean-lomi.jpeg";
import macoLomi from "../images/practitioners/maco-lomi.jpeg";
import ginger from "../images/practitioners/Ginger.jpg";
import gwen from "../images/practitioners/gwen.jpeg";
import kauilani from "../images/practitioners/kauilani.jpeg";

export const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <header className="page-header">ABOUT US</header>

      {/* Group picture */}
      <img className="about-pic" src={aboutPic} alt="aboutPic" />

      <h3 className="section-header-2">Our Practitioners</h3>

      <div className="practitioners">
        <div className="practitioner-section">
          <div className="practitioner-left">
            <h4 className="board-section-header">
              Sean Chun (Board President)
            </h4>
            <p className="practitioner-body">
              Sean A. Chun lives in Wailua and is currently employed by Ho`ola
              Lahui Hawai`i as the Native Hawaiian Traditional Healing
              Practitioner. He is also the <em>po`o</em> of the Kaua`i Kupuna
              Council of Traditional Hawaiian Healing Arts and sits on the `Aha
              Kukakuka Ho`oponopono Board as well as the Board of Kahuna La`au
              Lapa`au o Hawai`i. He has learned various arts and cultural
              practices. He credits his mentors and teachers such as Pila
              Kikuchi, Ilei Beniamina, Kumu Levon Ohai, Ken “Coach” Kamakea,
              Papa Francis Wong, Papa Tom Takahashi, Aunty Mahi Poepoe, Aunty
              Daisy Nash, Sensei Paul Yamaguchi, `Olohe Jerry Walker, and Sensei
              Bruce Keaulani.
            </p>
          </div>
          <div className="practitioner-img-containter">
            <img className="practitioner-img" src={seanLomi} alt="sean-lomi" />
          </div>
        </div>

        <div className="practitioner-section-2">
          <div className="practitioner-left">
            <h4 className="board-section-header">
              Maco Wai`ale`ale (Board Vice President)
            </h4>
            <p className="practitioner-body">
              Maco Wai`ale`ale has owned and operated her massage clinic for
              more than 40 years. Maco is the vice president of Pihana ka
              `Ikena. She was a student of Aunty Margaret Machado, Papa Henry
              Auwae, Kumu Levon Ohai, Papa Kalua kaiahua, Aunty Malia Craver,
              and Aunty Daisy Nash.
            </p>
          </div>
          <div className="practitioner-img-containter">
            <img
              className="practitioner-img-2"
              src={macoLomi}
              alt="maco-lomi"
            />
          </div>
        </div>

        <div className="practitioner-section">
          <div className="practitioner-left">
            <h4 className="board-section-header">Gwen Cardejon</h4>
            <p className="practitioner-body">
              Gwen Cardejon was a student of Aunty Mahi Poepoe and carries on
              the tradition of <em> lomilomi kua lua</em>. She was also a
              student of Papa Tom Takahashi.
            </p>
          </div>
          <div className="practitioner-img-containter">
            <img className="practitioner-img" src={gwen} alt="gwen" />
          </div>
        </div>

        <div className="practitioner-section-2">
          <div className="practitioner-left">
            <h4 className="board-section-header">Ginger Saiki</h4>
            <p className="practitioner-body">
              Ginger Saiki lives in Wailua and has been a practitioner of
              <em> ho`oponopono</em> with Aunty Malia Craver and{" "}
              <em>la`au lapa`au</em> under Levon Ohai. Ginger is also on the
              board of Ho`ola Lahui as well as the Kaua`i Kupuna Council of
              Traditional Hawaiian Healing Arts. She is a very active member and
              instructor with Halau Kahelahela.
            </p>
          </div>
          <div className="practitioner-img-containter">
            <img className="practitioner-img-2" src={ginger} alt="ginger" />
          </div>
        </div>

        <div className="practitioner-section">
          <div className="practitioner-left">
            <h4 className="board-section-header">Kau`ilani Kahalewai</h4>
            <p className="practitioner-body">
              Kau`ilani Kahalewai has been a Hawaiian Practitioner specializing
              in <em> Ho’oponopono</em> since 1997. She began studying under her
              teachers, Norma Takeshita and Miriam Kaohi-Joseah and worked
              alongside mentors such as Kahuna Morna Simiona. Kau`ilani also
              studied Theta Healing since the early 2000’s and has since become
              an instructor. In addition to the Kaua’i Kupuna Council, she sits
              on the Kaua’i Burial Council and the Kaneioluma Heiau Council in
              Po’ipu.
            </p>
          </div>
          <div className="practitioner-img-containter">
            <img className="practitioner-img" src={kauilani} alt="kauilani" />
          </div>
        </div>
      </div>

      {/* <h3 className="section-header-2">Our Board</h3>

      <div className="board">
        <div className="board-section">
          <img />
          <div className="board-section-1">
            <h4>President</h4>
            <p>Sean Chun</p>
          </div>
        </div>

        <div className="board-section">
          <img />
          <div className="board-section-1">
            <h4>Vice President</h4>
            <p>Maco Wai`ale`ale</p>
          </div>
        </div>

        <div className="board-section">
          <img />
          <div className="board-section-1">
            <h4>Treasurer</h4>
            <p>Anna Peters</p>
          </div>
        </div>

        <div className="board-section">
          <img />
          <div className="board-section-1">
            <h4>Secretary</h4>
            <p>Susan Oshiro-Taogoshi</p>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};
