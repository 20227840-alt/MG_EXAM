import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';



function BookRequest() {
    const [requests,setRequest] = useState({
        StudentName:"",
        StudentID:"",
        BookTitle:"",
        Author:"",
        Reason:""

    });

    const [requestLists,setRequestLists] = useState<typeof requests[]>([]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const AcquiredInput = e.currentTarget;
        const {name,value} = AcquiredInput;
        setRequest( (prev)=>({...prev,[name]:value}) )
    }
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!requests.StudentName || !requests.StudentID || !requests.BookTitle || !requests.Author || !requests.Reason) {
            alert("All Fields are required")
        }else{
            alert(`${requests.StudentName}'s Request was successfully Submitted`);
            setRequestLists( (prev)=>[...prev,requests] )
            setRequest({
                StudentName:"",
                StudentID:"",
                BookTitle:"",
                Author:"",
                Reason:""
            })
        }
    }
  return (
    <>
    <br/>
    <h1>Book Request Form (Controlled ) </h1>
    <br/>
       <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={handleInput} name="StudentName" value={requests.StudentName} type="text" placeholder="Student Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={handleInput} name="StudentID" value={requests.StudentID} type="number" placeholder="student ID" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control  onChange={handleInput} name="BookTitle" value={requests.BookTitle} type="text" placeholder="Book Title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={handleInput} name="Author" value={requests.Author} type="text" placeholder="Author" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
                <Form.Control onChange={handleInput} name="Reason" value={requests.Reason} as="textarea" rows={3} placeholder='Reason'/>
            </Form.Group>
            <Button variant="success" type="submit">Submit Request</Button>
        </Form>

        <br/>
        <h1>Submitted Requests:</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Student Name</th>
                <th>student ID</th>
                <th>Book Title</th>
                <th>Author</th>
                <th>Reason</th>
                </tr>
            </thead>
            <tbody>
                {requestLists.map(  (eachRequest, index) => {
                    return(
                        <tr key={index}>
                            <td>{eachRequest.StudentName}</td>
                            <td>{eachRequest.StudentID}</td>
                            <td>{eachRequest.BookTitle}</td>
                            <td>{eachRequest.Author}</td>
                            <td>{eachRequest.Reason}</td>
                        </tr>
                    )
                } )}
            </tbody>
        </Table>
        
    </>
  );
}

export default BookRequest;