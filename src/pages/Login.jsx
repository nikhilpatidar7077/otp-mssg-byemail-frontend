import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { Form, Row, Col, Label, Input, Button } from "reactstrap"
import API from "../api/api"

const Login = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post("/send-otp", { email })
            navigate("/verifyotp", {state:response?.data?.email})
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Form onSubmit={formSubmit} >
                <Row className="align-items-center mt-3">
                    <Col md={4}>
                        <Label
                            className="visually-hidden"
                        >
                            Email
                        </Label>
                        <Input
                            name="email"
                            placeholder="something@idk.cool"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Button color="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
export default Login