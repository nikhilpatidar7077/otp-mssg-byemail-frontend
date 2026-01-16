import { useState } from "react"
import { Form, Row, Col, Label, Input, Button, FormGroup } from "reactstrap"
import API from "../api/api"

const SendMessage = () => {
    const [data, setData] = useState({ email: '', message: '' })
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = API.post("/send-message", data)
            console.log(response.data)
            setData({ email: '', message: '' })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Form onSubmit={formSubmit}>
                <FormGroup>
                    <Label for="exampleEmail">
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Enter Email"
                        type="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">
                        Message
                    </Label>
                    <Input
                        id="exampleText"
                        name="message"
                        type="textarea"
                        placeholder="Enter Message"
                        value={data.message}
                        onChange={handleChange}
                    />
                </FormGroup>
                <Button color="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}
export default SendMessage