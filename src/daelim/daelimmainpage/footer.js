import React from 'react'
import styled, { css } from "styled-components"


const FooterMainDiv = styled.div
`
height:160px;
background: #F3F3F3;
`
const FooterLine = styled.div
`
height : 1px;
background: #A2A2A2;
margin-top :10px;
`

const FooterContent = styled.div
`
height : 140px;
width:660px;
margin : 0 auto;
margin-top:10px;
`

const LogoSide =styled.div
`
width: 160px;
height:120px;
float:left;
margin:0;
padding:0;

`

// const Logo =styled.img
// `
// width: 120px;
// height: 120px;
// object-fit: cover;
// `

const LogoTop = styled.div
`
width: 120px;
height: 8px;
`
const Logo = styled.p
`
width: 120px;
height: 50px;
object-fit: cover;
font-size: 35px;
line-height: 35px;
color:#a0a0a0;
`

const ContentSide = styled.div
`
width: 500px;
height:120px;
float:left;
margin:0;
padding:0;

`

const FooterP0 = styled.p
`
margin:0;
padding:0;
`

const FooterP = styled.p
`
width:200px;
margin-top:8px;
margin-bottom:0;
padding:0;
float:left;
color:#a0a0a0;
`

const FooterPFloatClear = styled.p
`
width:200px;
clear:both;
margin-left:20px;
margin-top:8px;
margin-bottom:0;
padding:0;
float:left;
color:#a0a0a0;
`
const FooterPFloatClearEnd = styled.p
`
width:400px;
clear:both;
margin-left:20px;
margin-top:8px;
margin-bottom:0;
padding:0;
float:left;
color:#a0a0a0;
`

class DaelimcMainFooter extends React.Component {

  constructor(props) {
    super(props)

  }


  componentDidMount() {
  }

  render() {

    return (


      <FooterMainDiv>
        <FooterLine />
        <FooterContent>
          <LogoSide>
            <LogoTop/>
            <Logo>DAELIM CONTROL</Logo>
          </LogoSide>
          <ContentSide>
            <FooterP0/>
            <FooterPFloatClear>회사명 : 대림컨트롤</FooterPFloatClear> 
            
            <FooterP>대표자 : 임현수</FooterP> 
            <div/>
            <FooterPFloatClear>사업자번호 : 143-35-00726</FooterPFloatClear>
            
            <FooterP>E메일 : daelimc12@gmail.com</FooterP> 
            <div/>
            <FooterPFloatClear>전화번호 : 02-2636-3659</FooterPFloatClear> 
           
            <FooterP>휴대폰 : 010-3127-9823</FooterP> 
            <div/>
            <FooterPFloatClearEnd>주소 : 서울시 영등포구 버드나루로12가길 12 205호</FooterPFloatClearEnd>
            <FooterPFloatClearEnd>©Daelimc Corp. All Rights Reserved.</FooterPFloatClearEnd>
          </ContentSide>

        </FooterContent>
      </FooterMainDiv>

    )
  }
}

export default DaelimcMainFooter;