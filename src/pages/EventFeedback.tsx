
import { useRef } from "react";
import { Button, Form } from "react-bootstrap";

export default function EventFeedback() {
    interface FeedbackData {
        name:string,
        email:string,
        feedback:string
    }
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const feedbackRef = useRef<HTMLTextAreaElement>(null);

    const HadleSubmit = (e: React.SubmitEvent<HTMLFormElement | HTMLTextAreaElement>)=> {
        e.preventDefault();
        if (nameRef.current && emailRef.current && feedbackRef.current) {
            if (nameRef.current.value && emailRef.current.value && feedbackRef.current.value) {
                const data: FeedbackData = {
                    name:nameRef.current.value,
                    email:emailRef.current.value,
                    feedback:feedbackRef.current.value
                }
                console.log(data)
                alert("Check the console for submitted Data")  
                nameRef.current.value = "";
            emailRef.current.value = "";
            feedbackRef.current.value = ""      
            }else{
                alert("all fields required")
            }  
            
        }
        

        
    }
    
    return(
        <>
            <br/>
            <h1>Event Feedback Form (Uncontrolled) </h1>
            <br/>
            <h6>Submit your feedback about university event</h6>
            <Form onSubmit={HadleSubmit}>
                <Form.Control size="lg" type="text" placeholder="Name" ref={nameRef} /><br/>
                <Form.Control size="lg" type="text" placeholder="Email" ref={emailRef}/><br/>
                <Form.Control size="lg"  as="textarea" placeholder="Feedback" ref={feedbackRef} /><br/>
                <Button variant="success" type="submit">Submit Request</Button>
                
            </Form>
        </>
    )
};
