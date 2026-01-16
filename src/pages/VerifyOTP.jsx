import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Row, Col, Label, Input, Button } from "reactstrap"
import API from "../api/api";


const VerifyOTP = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const email = location.state;
    const [otp, setOtp] = useState('')
    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post("/verify-otp", { email, otp })
            console.log(response.data)
            navigate("/home")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Form onSubmit={formSubmit} >
                <Row className="align-items-center mt-3">
                    <Col md={2}>
                        <Label
                            className="visually-hidden"
                        >
                            OTP
                        </Label>
                        <Input
                            name="otp"
                            placeholder="Enter OTP"
                            type="number"
                            onChange={(e) => setOtp(e.target.value)}
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
export default VerifyOTP