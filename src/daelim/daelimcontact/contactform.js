import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { init, send } from 'emailjs-com';
import styled, { css } from "styled-components"
init("user_HAgUXtKyQHr630h7a4gCQ");


const ContectBody = styled.div
    `
margin-top : 20px;
width: 1080px;
margin-left:auto;
margin-right:auto;
z-index: 0;
`

const FormBody = styled.div
    `
margin-top : 2px;
width: 500px;
margin-left:auto;
margin-right:auto;
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
            <ContectBody>
                <FormBody ref={this.wrapper}>
                    <Form>
                        <Form.Group>
                            <Form.Input label='이름' placeholder='이름' width={16} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Input label='전화번호' placeholder='전화번호' width={16} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Input label='이메일주소' placeholder='이메일주소' width={16} />
                        </Form.Group>

                        <Form.Group>
                            <Form.TextArea label='문의 내용' placeholder='문의 내용' width={16} style={{ minHeight: 200 }} />
                        </Form.Group>

                        <Button onClick={this.sendEmail}>문의하기</Button>
                    </Form>
                </FormBody>


            </ContectBody>
        )
    }
}

export default FromEmail;


