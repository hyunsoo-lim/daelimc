import React from 'react';
import styled from "styled-components"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import KakaoMap from './kakaomap'
import Fade from 'react-reveal/Fade';

const AboutMenuLayout = styled.div
  `
margin-top:-1px;
width: 1080px;
height : 40px; 
background :#6CC0FF;
postion:fixed;
`

const AboutMenu1 = styled.div
  `
width: 120px;
height : 40px; 
float:right;
`

const AboutMenu2 = styled.div
  `
width: 120px;
height : 40px; 
float:right;
margin-right:235px;
`

const AboutMenuText1 = styled.div
  `
font-size: 14px;
font-weight: 400;
color:#ffffff;
text-align:center;
line-height:40px;
`


const AboutMenuText2 = styled.p
  `
font-size: 14px;
font-weight: 400;
color:#ffffff;
text-align: center;
line-height:40px;
`

const AboutDiv1 = styled.div
  `
width: 1080px;
height : 300px; 
text-align: left;
margin-top:50px;
`
const AboutDiv1Top = styled.div
  `
width: 1080px;
height : 50px; 
`
const AboutDiv1TopText = styled.p
`
font-size:20px;
font-weight:600;
color:#5a5a5a;
`
const AboutDiv1TextDiv = styled.div
`
margin-top:60px;
width: 1080px;
height : 400px; 
text-align:center
`

const AboutDiv2 = styled.div
  `
width: 1080px;
height : 800px; 
margin-top:4px;
text-align: left;
`
const AboutDiv2Top = styled.div
  `
width: 1080px;
height : 150px; 
display: table-cell;
vertical-align: bottom;
`
const AboutDiv2TopText = styled.p
  `
font-size:20px;
font-weight:600;
color:#5a5a5a;
`

const AboutText1P = styled.p
  `
font-size:15px;
font-weight:400;
color:#5a5a5a;
`


class AboutMenu extends React.Component {

  constructor(props) {
    super(props)
    this.state = { show: true };
    this.scrollToTop = this.scrollToTop.bind(this);

  }



  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = (e) => {
    // 스크롤 할때마다 state에 scroll한 만큼 scrollTop 값 증가하므로 이를 업데이트해줌, 
    //따라서 스크롤 시점에 따라 특정액션을 추후에 state를 활용하여 구현 가능
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    // this.setState({ scrollTop });
    console.log(scrollTop);
    if (scrollTop > 195) {

      document.getElementById("submenu").style.top = 0;
      document.getElementById("submenu").style.position = "fixed";
      // document.getElementById("submenu").style.opacity = 1;

    } else {
      document.getElementById("submenu").style.position = "relative";

    }
  };


  render() {

    return (
      <div>
        <Fade opposite when={this.state.show}>
          <AboutMenuLayout id='submenu'>
            <AboutMenu2>
              <Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500} width='200px'>
                <AboutMenuText2>오시는길</AboutMenuText2>
              </Link>
            </AboutMenu2>
            <AboutMenu1>
              <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} style={{ height: '100px' }}>
                <AboutMenuText1>회사소개</AboutMenuText1>
              </Link>
            </AboutMenu1>
          </AboutMenuLayout>
        </Fade>

        <AboutDiv1 name="test1" className="element" >
          <AboutDiv1Top />
          <AboutDiv1TopText>회사소개</AboutDiv1TopText>
          <AboutDiv1TextDiv>
            <AboutText1P>저희 대림컨트롤은 유압장비 엔진 시스템, 발전기 엔진 시스템 및 다양한 장비의 시스템을 제작 판매하고있습니다</AboutText1P>
            <AboutText1P>저희 대림컨트롤은 유압장비 엔진 시스템, 발전기 엔진 시스템 및 다양한 장비의 시스템을 제작 판매하고있습니다</AboutText1P>
            <AboutText1P>저희 대림컨트롤은 유압장비 엔진 시스템, 발전기 엔진 시스템 및 다양한 장비의 시스템을 제작 판매하고있습니다</AboutText1P>
            <AboutText1P>저희 대림컨트롤은 유압장비 엔진 시스템, 발전기 엔진 시스템 및 다양한 장비의 시스템을 제작 판매하고있습니다</AboutText1P>
          </AboutDiv1TextDiv>

        </AboutDiv1>
        <AboutDiv2 name="test2" className="element" >
          <AboutDiv2Top/>
            <AboutDiv2TopText>오시는길</AboutDiv2TopText>
        
          <KakaoMap />
        </AboutDiv2>

      </div>
    )
  }
}

export default AboutMenu;