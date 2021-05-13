import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { init, send } from 'emailjs-com';
import styled, { css } from "styled-components"
init("user_HAgUXtKyQHr630h7a4gCQ");


const ContectBody = styled.div
`
width: 1080px;
margin-left:auto;
margin-right:auto;
z-index: 0;
padding:300px;
border : 1px solid;
`


class FromEmail extends React.Component {

    constructor(props) {
        super(props)
        this.sendEmail = this.sendEmail.bind(this);
        this.wrapper = React.createRef();
    }


    sendEmail() {
        var templateParams = {
            name: 'James',
            notes: 'Check this out!'
        };

        send('service_fhrvqm9', 'template_ritos2b', templateParams)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }



    componentDidMount() {
    }

    render() {

        return (
            <ContectBody ref={this.wrapper}>
                <Form>
                    <Form.Group>
                        <Form.Input label='성함' placeholder='성함' width={6} />
                    </Form.Group>

                    <Form.Group>
                       
                       <Form.Input label='전화번호' placeholder='전화번호' width={6} />
                   </Form.Group>
                    <Form.Group>
                        <Form.TextArea label='문의 내용' placeholder='문의 내용' width={8} />
                    </Form.Group>
                   
                    <Button onClick={this.sendEmail}>문의하기</Button>
                </Form>



            </ContectBody>
        )
    }
}

export default FromEmail;


