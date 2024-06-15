import React, { useEffect } from 'react';
import './MainContent.css';
import gsap from 'gsap';
import slidingPanda from '/slidingPanda.png';
import pandaSquare from '/PandaSquare.png';

const MainContent = () => {
  useEffect(() => {
    // Animate the cat name
    gsap.to('.cat-name', {
      x: 100,
      duration: 2,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    });

    gsap.to('.michi-image', {
      scale: 1,
      duration: 2,
      ease: 'power1.inOut',
      repeat: -1,
    });

    // Animate each sliding panda
    const pandas = gsap.utils.toArray('.sliding-panda');
    pandas.forEach((panda, index) => {
      gsap.fromTo(
        panda,
        { y: '-100vh', x: `random(-1000px, ${window.innerWidth})` },
        {
          y: window.innerHeight + 100,
          duration: 5,
          ease: 'linear',
          repeat: -1,
          delay: index * 0.2, // Stagger the start times
        }
      );
    });
  }, []);

  // Create multiple sliding panda elements
  const pandaElements = Array.from({ length: 20 }).map((_, index) => (
    <img
      key={index}
      src={slidingPanda}
      alt="Sliding Panda"
      className="sliding-panda"
    />
  ));

  return (
    <main className="main-content">
      <h1 className="cat-name">$Sliding Panda</h1>
      <img src={pandaSquare} alt="Michi" className="michi-image" />
      <p className="cat-description">The Cutest Panda on the internet</p>
      <p className="cat-address">CA: ?????</p>
      <div className="buttons-container">
        <button className="buy-button">BUY HERE</button>
      </div>
      <div className="icons-container">
        <a href='#'><img src='./telegram.png' alt="X" className="icon" ></img></a>
        <img src='./x.png' alt="Telegram" className="icon" />
        {/* Add other icons similarly */}
      </div>
      <h2 className="meme-title">Panda</h2>
      <div className="memes-gallery">
        <img src='./glasses.jpeg' alt="Meme 1" className="meme-image" />
        <img src='./hat.jpeg' alt="Meme 2" className="meme-image" />
        <img src='./candle.gif' alt="Meme 3" className="meme-image" />
        <img src='./square.jpeg' alt="Meme 4" className="meme-image" />
      </div>
      {pandaElements}

      {/* Tokenomics Section
      <section className="tokenomics">
        <h2>Tokenomics</h2>
        <div className="tokenomics-container">
          <div className="tokenomics-item">
            <img src={pandaSquare} alt="Token" className="tokenomics-image" />
            <p>Total Supply</p>
            <p>559,343,847</p>
          </div>
          <div className="tokenomics-item">
            <img src={pandaSquare} alt="Token" className="tokenomics-image" />
            <p>LP Burned</p>
            <p>100%</p>
          </div>
          <div className="tokenomics-item">
            <img src={pandaSquare} alt="Token" className="tokenomics-image" />
            <p>Tax</p>
            <p>0%</p>
          </div>
        </div>
      </section> */}

      {/* More Michi Memes Section */}
      {/* <section className="more-memes">
        <h2>more michi memes</h2>
        <div className="memes-container">
          <img src='./square.jpeg' alt="Meme" className="meme-image" />
          <img src={pandaSquare} alt="Meme" className="meme-image" />
          <img src={pandaSquare} alt="Meme" className="meme-image" />
          <img src={pandaSquare} alt="Meme" className="meme-image" />
          <img src={pandaSquare} alt="Meme" className="meme-image" />
          <img src={pandaSquare} alt="Meme" className="meme-image" />
          <img src={pandaSquare} alt="Meme" className="meme-image" />
          <img src={pandaSquare} alt="Meme" className="meme-image" />
        </div>
      </section> */}
    </main>
  );
};

export default MainContent;