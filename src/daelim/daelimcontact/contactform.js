import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { init, send } from 'emailjs-com';
import styled, { css } from "styled-components"
init("user_HAgUXtKyQHr630h7a4gCQ");


const ContectBody = styled.div
    `
margin-top : 60px;

margin-left:auto;
margin-right:auto;
z-index: 0;

@media only screen and (max-width: 600px) {
    width: 100%;
  
  }
  
  @media only screen and (min-width: 600px) {
    width:  100%;
   
  }
  
  @media only screen and (min-width: 768px) {
    width:  100%;
    
  }
  
  @media only screen and (min-width: 992px) {
    width:100%;
   
  }
  
  @media only screen and (min-width: 1200px) {
    width: 1080px;
    
  }
`

const FormBody = styled.div
    `
margin-top : 2px;

margin-left:auto;
margin-right:auto;

@media only screen and (max-width: 600px) {
    width: 50%;
  
  }
  
  @media only screen and (min-width: 600px) {
    width:  50%;
   
  }
  
  @media only screen and (min-width: 768px) {
    width:  50%;
    
  }
  
  @media only screen and (min-width: 992px) {
    width: 50%;
   
  }
  
  @media only screen and (min-width: 1200px) {
    width: 50%;
    
  }
`


class FromEmail extends React.Component {

    constructor(props) {
        super(props)
        this.sendEmail = this.sendEmail.bind(this);
        this.wrapper = React.createRef();
        this.inputSetState= this.inputSetState.bind(this);
        this.state = { name: null, phone: null, email: null, text: null }
    }


    sendEmail() {
        var templateParams = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            text: this.state.text
        };

        send('service_fhrvqm9', 'template_ritos2b', templateParams)
            .then((result) => {
                console.log(result.text);
                alert("문의사항이 접수되었습니다")
            }, (error) => {
                console.log(error.text);
            });
    }

    inputSetState=(e,num)=>{
        switch (num) {
            default:
                this.setState({text:e.target.value});
                break;
            case 0:
                this.setState({name:e.target.value});
                break;
            case 1:
                this.setState({phone:e.target.value});
                break;
            case 2:
                this.setState({email:e.target.value});
                break;
        }
        console.log(num)
        console.log(e.target.value)
    }

    componentDidMount() {
    }

    render() {

        return (
            <ContectBody>
                <FormBody ref={this.wrapper}>
                    <Form>
                        <Form.Group>
                            <Form.Input label='이름' placeholder='이름' width={16} onChange={(e)=>this.inputSetState(e,0)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Input label='전화번호' placeholder='전화번호' width={16} onChange={(e)=>this.inputSetState(e,1)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Input label='이메일주소' placeholder='이메일주소' width={16} onChange={(e)=>this.inputSetState(e,2)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.TextArea label='문의 내용' placeholder='문의 내용' width={16} style={{ minHeight: 200 }} onChange={(e)=>this.inputSetState(e,3)} />
                        </Form.Group>

                        <Button onClick={this.sendEmail}>문의하기</Button>
                    </Form>
                </FormBody>


            </ContectBody>
        )
    }
}

export default FromEmail;


