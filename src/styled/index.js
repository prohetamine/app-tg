import styled from 'styled-components'
import lineIcon from './../assets/line-icon.png'
import angleIcon from './../assets/angle-icon.png'
import pixelBackground from './../assets/pixel-background.png'

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Header = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
`

const Button = styled.div`
  height: 40px;
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 20px;
  margin-right: 10px;
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #121214;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
  color: #E5E5EA;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;
`

const GameMainOverflow = styled.div`
  display: inline-flex;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  font-size: 0px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 820px) {
    border-radius: 0px;
  }
`

const GameContainer = styled.div`
  position: relative;
`

const GameOpacityLayer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  width: 480px;
  height: 576px;
  background: #dadadaff;

  @media (max-width: 1000px) {
    width: 50vw;
    height: calc(50vw * 1.2);
  }

  @media (max-width: 820px) {
    width: 100vw;
    height: calc(100vw * 1.2);
  }
`

const GameLayer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  width: 480px;
  height: 576px;
  position: absolute;
  left: 0px;
  top: 0px;

  @media (max-width: 1000px) {
    width: 50vw;
    height: calc(50vw * 1.2);
  }

  @media (max-width: 820px) {
    width: 100vw;
    height: calc(100vw * 1.2);
  }
`

const OverflowGameBlock = styled.div`
  width: calc(480px / 5);
  height: calc(576px / 6);
  position: relative;
  cursor: url(${props => props.cursor}) 0 0, default;

  @media (max-width: 1000px) {
    width: calc(50vw / 5);
    height: calc(50vw * 1.2 / 6);
  }

  @media (max-width: 820px) {
    width: calc(100vw / 5);
    height: calc(100vw * 1.2 / 6);
  }
`

const GameBlock = styled.div`
  width: calc(480px / 5);
  height: calc(576px / 6);
  transform: rotate(${props => props.rotate}deg);
  background-image: url(${props => props.src});
  background-size: cover;

  @media (max-width: 1000px) {
    width: calc(50vw / 5);
    height: calc(50vw * 1.2 / 6);
  }

  @media (max-width: 820px) {
    width: calc(100vw / 5);
    height: calc(100vw * 1.2 / 6);
  }
`

const GamePlaceBidBlock = styled.div`
  width: calc(480px / 5);
  height: calc(576px / 6);
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 8;

  &:hover {
    box-shadow: ${props => props.active === 'true' ? `inset 0px 0px 10px 10px #514526` : `inset 0px 0px 10px 10px #51452600`};
  }

  @media (max-width: 1000px) {
    width: calc(50vw / 5);
    height: calc(50vw * 1.2 / 6);
  }

  @media (max-width: 820px) {
    width: calc(100vw / 5);
    height: calc(100vw * 1.2 / 6);
  }
`

const GamePlayer = styled.div`
  width: calc(480px / 5);
  height: calc(480px / 5);
  background-image: url(${props => props.src});
  background-size: cover;
  position: absolute;
  left: 0; 
  top: 0;

  @media (max-width: 1000px) {
    width: calc(50vw / 5);
    height: calc(50vw / 5);
    left: 0; 
    top: 0;
  }

  @media (max-width: 820px) {
    width: calc(100vw / 5);
    height: calc(100vw / 5);
    left: 0; 
    top: 0;
  }
`

const GameBonus = styled.div`
  width: calc(480px / 5);
  height: calc(480px / 5);
  background-image: url(${props => props.src});
  background-size: cover;
  position: absolute;
  left: 0; 
  top: 0;

  @media (max-width: 1000px) {
    width: calc(50vw / 5);
    height: calc(50vw / 5);
    left: 0; 
    top: 0;
  }

  @media (max-width: 820px) {
    width: calc(100vw / 5);
    height: calc(100vw / 5);
    left: 0; 
    top: 0;
  }
`

const GameNavigation = styled.div`
  min-width: 420px;
  height: 576px;
  background: #333;
  box-sizing: border-box;
  background-image: linear-gradient(180deg, rgba(56, 56, 56, 1) 0%,rgba(72, 134, 51, 1) 100%);
  padding: 30px;
  position: relative;

  @media (max-width: 1000px) {
    min-width: 50vw;
    max-width: auto;
    width: auto;
  }

  @media (max-width: 820px) {
    min-width: 100vw;
    max-width: auto;
    width: auto;
  }
`

const GamePixelBackground = styled.div`
  width: 100%;
  height: 273px;
  background-image: url(${pixelBackground});
  background-size: cover;
  position: absolute;
  left: 0px;
  bottom: 0px;
`

const GameEmptyBackground = styled.div`
  width: 100%;
  height: 576px;
  box-sizing: border-box;
  padding: 30px;
  position: absolute;
  top: 0px;
  left: 0px;
`

const NavigationTopOverflow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const WrapperNavigationBlockButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 39px;
`

const NavigationBlockButton = styled.img`
  width: 16.13px;
  height: 17.7px;
  cursor: pointer;
  background-color: #ffffff00;
  border: none;
  box-sizing: border-box;
`

const NatigationBlockTitle = styled.div`
  color: #ADFF2F
  height: 24.00px;
  color: rgba(148, 255, 96, 1.00);
  font-family: Inter;
  font-weight: 700;
  padding: 0px 0px 0px 0px;
  text-align: left;
  font-size: 30px;
`

const NavigationOverflow = styled.div`
  margin-top: 19px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const NavigationBlockMiddleTitle = styled.div`
  font-family: Inter;
  font-weight: 600;
  padding: 0px 0px 0px 0px;
  text-align: left;
  font-size: 21px;
  color: #fff;
`

const RowText = styled.div`
  width: 130px;
  color: rgba(255, 255, 255, 1.00);
  font-family: Inter;
  font-weight: 600;
  padding: 0px 0px 0px 0px;
  text-align: left;
  font-size: 15px;
`

const RowLink = styled.a`
  width: 130px;
  color: rgba(255, 255, 255, 1.00);
  font-family: Inter;
  font-weight: 600;
  padding: 0px 0px 0px 0px;
  text-align: left;
  font-size: 15px;
  text-decoration: none;
`

const AngleIcon = styled.div`
  width: 21px;
  height: 21px;
  background-image: url(${props => props.line === 'true' ? lineIcon : angleIcon});
  transform: rotate(${props => props.rotate}deg);
  background-size: cover;
  background-color: ${props => props.color};
  border-radius: 2px;
`

const NavigationBidsTitleOverflow = styled.div`
  width: 100%;
  background-color: rgba(126, 126, 126, 1);
  height: 33px;
  padding: 0px 21px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  margin-top: 9px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`

const NavigationLeftDealOverflow = styled.div`
`

const NavigationDealOverflow = styled.div`
  display: flex;
  width: 100%;
  margin-top: 9px;
`

const NavigationLeftDealContainer = styled.div`
  width: 210px;
  height: 40.5px;
  padding: 0px 21px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`

const NavigationRightDealContainer = styled.div`
  margin-left: 15px;
  padding: 0px 21px;
  width: 100%;
  height: 81px;
  border-radius: 9px;
  box-sizing: border-box;
  display: flex;
  background: #772791ff;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const NavigationBidsRowsOverflow = styled.div`
  width: 100%;
  height: 163px;
  background-color: #6A6A6A;
  padding: 0px 21px;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
`

const NavigationRowOverflow = styled.div`
  height: 33px;
  min-height: 33px;
  background-color: rgba(106, 106, 106, 1.00);
  display: flex;
  align-items: center;
  box-sizing: border-box;
`

const ButtonPlaceBid = styled.button`
  width: 100%;
  height: 67.5px;
  background-color: rgba(148, 255, 96, 1.00);
  padding: 0px 0px 0px 0px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-left-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(58, 58, 57, 1.00);
  font-family: Inter;
  font-weight: 700;
  padding: 0px 0px 0px 0px;
  text-align: left;
  font-size: 27px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 32px;
`

const SelectBody = styled.div`
  position: relative;
  z-index: 99999999999;
`

const SelectMenu = styled.div`
  position: absolute;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  top: 50px;
`

export {
  Body,
  Header,
  Button,
  SelectBody,
  SelectMenu,
  GameMainOverflow,
  GameContainer,
  GameOpacityLayer,
  GameLayer,
  OverflowGameBlock,
  GameBlock,
  GamePlaceBidBlock,
  GamePlayer,
  GameBonus,
  GameNavigation,
  GamePixelBackground,
  GameEmptyBackground,
  NavigationTopOverflow,
  WrapperNavigationBlockButton,
  NavigationBlockButton,
  NatigationBlockTitle,
  NavigationOverflow,
  NavigationBlockMiddleTitle,
  NavigationBidsTitleOverflow,
  NavigationLeftDealOverflow,
  NavigationDealOverflow,
  NavigationLeftDealContainer,
  NavigationRightDealContainer,
  NavigationBidsRowsOverflow,
  NavigationRowOverflow,
  ButtonPlaceBid,
  RowText,
  RowLink,
  AngleIcon
}