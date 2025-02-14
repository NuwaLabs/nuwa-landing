import React from "react";
import { Helmet } from "react-helmet";
import CommonHeader from "../../components/CommonHeader";
import './index.css'

export default function PageThree() {
  return (
    <>
      <Helmet>
        <title>Nuwa Digital Life Labs</title>
        <meta
          name="description"
          content="Discover Digital Life Game Builder for seamless integration of digital life into your games. Simplify your game development with our APIs."
        />
      </Helmet>

      {/* main layout section */}
      <div className="relative h-[100vh] w-full page4 overflow-hidden object-cover ">
        {/*<CommonHeader />*/}
        <div></div>

        <div>
          <div className="absolute !font-pangmenzhengdao title4">
            Nuwa Digital
            Life Labs
          </div>
          <div className="absolute info4">
            <span>—</span>
            <p>
              Dedicate into the global open source community.
              Progressive decentralization practitioner.
            </p>
            <p>
              /Open Source
            </p>
            <p>
              Committed to transparency, openness, modularity,
              and community ownership.
            </p>
          </div>

          {/*absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2*/}

          <div className="content4 absolute top-0 right-[20px] h-full flex justify-center items-center">
            <div className="contentBg4 w-full h-full absolute top-0 right-0"></div>
            <img src="images/page4/img8.png" alt="nuwa" />
          </div>

        </div>

      </div>
    </>
  );
}
