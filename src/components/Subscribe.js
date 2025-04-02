'use client';
import { useRef, useState } from "react";
import styles from "./Subscribe.module.css"
import LoadingdBtn from "@/components/LoadingBtn"

const Subscribe = () => {
    const formRef = useRef(null);
    const [message, setMessage] = useState('Subscribe');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const  handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        try {
            setLoading(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/subscribe/`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data)
            });
          
            const result = await response.json();
            
            if (!response.ok) {
              if (response.status === 400) {
                setMessage('You are already subscribed');
              } else {
                setMessage('Subscription failed');
              }
              setSuccess(false);
            } else {
              setMessage('Thank you for subscribing!');
              setSuccess(true);
              formRef.current.reset();
            }
          } catch (error) {
            console.error('Network error:', error);
            setMessage('Network error. Please try again.');
            setSuccess(false);
          }finally {
            setLoading(false);
          }
      };
    
    const [valid, setValid] = useState(false);
    function validate(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
    const checkEmail = (email) => {
        setValid(validate(email));
        // console.log(valid)
    }
    
      
    return(
        <>

            <button type="button" className={`${styles.color} border-0 bg-transparent ps-0 `} data-bs-toggle="modal" data-bs-target="#subscribeModal">
            Subscribe
            </button>

            <div className="modal fade" id="subscribeModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-white">
                <div className="modal-header border-0">
                    <h5 className="modal-title text-dark">Subscribe to Newsletter</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label text-dark">Name</label>
                        <input type="text" name="name" className={`${styles.input} form-control bg-light border-dark`} id="name" placeholder="Your name" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label text-dark">Email address</label>
                        <input type="email" name="email"  className={`${styles.input} ${valid ? `text-success` : `text-danger` } form-control bg-light border-dark`} id="email" placeholder="name@example.com" onKeyUp={(e) => checkEmail(e.target.value)} required/>
                    </div>
                    <div className="d-grid">
                        { loading ? <LoadingdBtn /> :
                        <button 
                            type="submit" 
                            className={`btn text-white ${valid ? (message === "Thank you for subscribing!" ? "btn-success" : "btn-dark") : "btn-dark text-white disabled"}`}
                            >
                            {message}
                        </button> 
                        }
                    </div>
                    </form>
                </div> 
                <div className="modal-footer border-0">
                    <small className="text-muted">We'll never share your information.</small>
                </div>
                </div>
            </div>
            </div>
        
        </>
    )
}

export default Subscribe;