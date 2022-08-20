import { useState } from 'react';

import ActionBar from './components/ActionBar';
import Header from './components/Header';
import BillionDollar from './sections/BillionDollar';
import BlockchainTechnology from './sections/BlockchainTechnology';
import BudboApp from './sections/BudboApp';
import BudboConnect from './sections/BudboConnect';
import BudboTeam from './sections/BudboTeam';
import BudboTrax from './sections/BudboTrax';
import BudboUnique from './sections/BudboUnique';
import BudboWork from './sections/BudboWork';
import Buildings from './sections/Buildings';
import Footer from './sections/Footer';
import Legalization from './sections/Legalization';
import Main from './sections/main';
import Reasons from './sections/Reasons';
import WhatChanged from './sections/WhatChanged';
import { GlobalStyles, StyledWhiteWrapper } from './shared';

function App() {
  const [currentLink, setCurrentLink] = useState(null);

  return (
    <div className="App">
      <GlobalStyles />
      <Header currentLink={currentLink} />
      <Main />
      <div className='position-relative'>
        <div className='d-none d-xxl-block'>
          <ActionBar />
        </div>

          <StyledWhiteWrapper>
                <div className='width-wrapper video'>
                    <div className='video-container d-flex justify-content-between'>
                        <iframe width="100%" height="620px" src="https://www.youtube.com/watch?v=YKveT6ofEQU"
                                title="YouTube video player" frameBorder="{0}"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                        />
                    </div>
                </div>
                <div className='d-md-none'>

                    <ActionBar />
                </div>
                <Reasons setCurrentLink={setCurrentLink} />

                <BillionDollar setCurrentLink={setCurrentLink} />
                <WhatChanged />
                <BudboWork />

            </StyledWhiteWrapper>


        <Buildings setCurrentLink={setCurrentLink} />

        <StyledWhiteWrapper>
          <BudboApp />
          <BudboConnect />
          <BudboTrax />
        </StyledWhiteWrapper>

        <BlockchainTechnology setCurrentLink={setCurrentLink} />


        <StyledWhiteWrapper>
          <BudboUnique setCurrentLink={setCurrentLink} />
        </StyledWhiteWrapper>


        <Legalization setCurrentLink={setCurrentLink} />


        <StyledWhiteWrapper className='exception-mobile'>
          <div className="container">
            <BudboTeam setCurrentLink={setCurrentLink} />
          </div>
        </StyledWhiteWrapper>

      </div>

      <Footer />

    </div>
  );
}

export default App;
