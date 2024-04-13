import React, { useState } from 'react'

export const Contact = () => {
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
        email, message, timestamp: new Date(Date.now())        
    }
    console.log(formData)}

  return (
    <div className='container shadow p-5' style={{maxWidth: "50%"}}>
        <h1>Lépj velünk kapcsolatba</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label><br />
            <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} style={{width: "100%"}} /> <br />
            <label htmlFor="message">Üzenet: </label><br />
            <textarea name="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} style={{width: "100%"}}></textarea><br />
            <button type='submit' className='btn btn-primary'>Küldés</button>
        </form>
    </div>
  )
}
