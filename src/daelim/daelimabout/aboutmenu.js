import React from 'react';
import styled from "styled-components"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import KakaoMap from './kakaomap'
const AboutMenuLayout = styled.div
`
width: 250px;
height : 800px; 
float : left;
position: fixed;
`

const AboutMenu1 = styled.div
`
width: 200px;
height : 100px; 
background :#38cbae;
`

const AboutMenu2 = styled.div
`
width: 200px;
height : 100px; 
background :#38cbae;
`

const AboutMenuText1 = styled.div
`
font-size: 16px;
font-weight: 600;
color:#ffffff;
text-align:center;
line-height:100px;
`


const AboutMenuText2 = styled.p
`
font-size: 16px;
font-weight: 600;
color:#ffffff;
text-align: center;
line-height:100px;
`

const AboutDiv1 = styled.div
`
width: 875px;
height : 500px; 
border : 1px solid ;
margin-left: 205px;
text-align: center;
`

const AboutDiv2 = styled.div
`
width: 875px;
height : 500px; 
border : 1px solid ;
margin-top:4px;
margin-left: 205px;
text-align: center;
`




class AboutMenu extends React.Component {

  constructor(props) {
    super(props)
    this.scrollToTop = this.scrollToTop.bind(this);
  }


  componentDidMount() {

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
  }


  render() {

    return (
      <div>
        <AboutMenuLayout>
          <AboutMenu1>
            <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} style={{height:'100px'}}>
              <AboutMenuText1>회사소개</AboutMenuText1>
            </Link>
          </AboutMenu1>
          <AboutMenu2>
            <Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500} width='200px'>
              <AboutMenuText2>오시는길</AboutMenuText2>
            </Link>
          </AboutMenu2>
        </AboutMenuLayout>

        <AboutDiv1 name="test1" className="element" >
          test 1
        </AboutDiv1>
        <AboutDiv2 name="test2" className="element" >
          <KakaoMap />
        </AboutDiv2>

      </div>
    )
  }
}

export default AboutMenu;