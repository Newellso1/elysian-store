import { ParallaxBanner } from "react-scroll-parallax";
import Background from "../Assets/Images/Other/Background2.jpg";
import LogoWhite from "../Assets/Images/Logo/LogoWhite.png";

export default function Banner() {
  return (
    <div>
      <ParallaxBanner
        layers={[
          { image: Background, speed: -12 },
          {
            speed: -10,
            children: (
              <div className="banner-child">
                <img src={LogoWhite} alt="Logo" />
              </div>
            ),
          },
        ]}
        className="parallax-banner"
      />
    </div>
  );
}
