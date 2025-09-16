
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const reviddRef = useRef(null);
  const creatorChartRef = useRef(null);
  const bespocutRef = useRef(null);
  const yourbookRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [
      reviddRef.current,
      creatorChartRef.current,
      bespocutRef.current,
      yourbookRef.current
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={reviddRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/Revidd.png" alt="Revidd Streaming Platform" />
            </div>
            <div className="text-content">
              <h2>
                Revidd - Launch Your Own Video Streaming Platform in Minutes
              </h2>
              <p className="text-white-50 md:text-xl">
                AI-powered no-code OTT platform enabling businesses to create custom streaming services with live streaming & monetization features.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={creatorChartRef}>
              <div className="image-wrapper bg-[#F0F8E8]">
                <img src="/images/CC.png" alt="Creator Chart Platform" />
              </div>
              <h2>Creator Chart - Professional Content Creation</h2>
              <p className="text-white-50">
                3-month creator coaching program helping CXOs and professionals build social media presence and thought leadership.
              </p>
            </div>

            <div className="project" ref={bespocutRef}>
              <div className="image-wrapper bg-[#FFF0E6]">
                <img src="/images/Bespo.png" alt="BESPOCUT Virtual Studio" />
              </div>
              <h2>BESPOCUT - Virtual Studio for Bespoke Clothing</h2>
              <p className="text-white-50">
                Cloud-based platform revolutionizing bespoke clothing design with zero inventory model and global fabric access.
              </p>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
