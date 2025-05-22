import styled from "styled-components";
import ShopNow from "./buttons/ShopNow";

const Banner = styled.section`
  background-image: url('/imgs/ad-banner.png');
  background-size: cover;
  background-position: center;
  height: 448px;
  color: #fff;
  position: relative;

  &>div {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .title {
    font-size: 72px;
    font-weight: 100;
    line-height: 72px;
    letter-spacing: -1%;
  }
  .content {
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
    color: #787878;
    margin-bottom: 40px;
  }
`

function AdBanner() {
  return (
    <Banner>
      <div>
        <p className="title">Big Summer <b>Sale</b></p>
        <p className="content">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        <ShopNow color={'#fff'} />
      </div>
    </Banner>
  );
}

export default AdBanner;