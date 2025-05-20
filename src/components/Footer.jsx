import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 464px;
  padding: 104px 160px;
  background-color: #000;
  color: #fff;
  font-size: 14px;

  p {
    margin: 0;
  }
`
const TextContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
`
const Info = styled.div`
  color: #cfcfcf;
  line-height: 171%;

  img {
    margin-bottom: 24px;
  }
`
const SocialIcons = styled.div`
  display: flex;
  width: 173px;
  justify-content: space-between;

  img {
    cursor: pointer;
  }
`
const FooterNav = styled.div`
  width: 623px;
  display: flex;
  gap: 32px;

  nav {
    flex: 1;

    p {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 16px;
    }

    li {
      margin-bottom: 16px;
      font-size: 14px;
      font-weight: 300;
      color: #cfcfcf;
      transition: color .3s ease;

      &:hover {
        color: #fff;
        cursor: pointer;
      }
    }
  }
`

function Footer() {
  return (
    <FooterContainer>
      <TextContainer>
        <Info>
          <img src="/imgs/logo-white.png" alt="logo" />
          <p>We are a residential interior design firm located in Portland. <br/>
            Our boutique-studio offers more than</p>
        </Info>
        <FooterNav>
          <nav>
            <p>Services</p>
            <ul>
              <li>Bonus program</li>
              <li>Gift cards</li>
              <li>Credit and payment</li>
              <li>Service contracts</li>
              <li>Non-cash account</li>
              <li>Payment</li>
            </ul>
          </nav>
          <nav>
            <p>Assistance to the buyer</p>
            <ul>
              <li>Find an order</li>
              <li>Terms of delivery</li>
              <li>Exchange and return of good</li>
              <li>Guarantee</li>
              <li>Frequently asked questions</li>
              <li>Terms of use of the site</li>
            </ul>
          </nav>
        </FooterNav>
      </TextContainer>
      <SocialIcons>
        <img src="/imgs/sns/Twitter.png" alt="Twitter" />
        <img src="/imgs/sns/Facebook.png" alt="Facebook" />
        <img src="/imgs/sns/Tiktok.png" alt="Tiktok" />
        <img src="/imgs/sns/Instagram.png" alt="Instagram" />
      </SocialIcons>
    </FooterContainer>
  );
}

export default Footer;