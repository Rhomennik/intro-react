'use strict'
 
import React from 'react'



const AppContent = ({full, handleInputChange, submit, listen, listar, inputValue, edit, deleted}) => (

    <div className='app'>
        <h1>Message is: {full}</h1>
        <div className="input">
        <form onSubmit={submit}>
            <input type='text' placeholder='Send Message' name="fullname" value={inputValue} onChange={handleInputChange}/><button type="submit">Enviar</button>
        </form>
        <form>
        <h3>Messages list</h3>
         {listen.map((liste, index) => (
             <li key={index}>
             <a>{liste.fullmessage}            - </a>
             <button onClick={edit} className="editButton">edit</button>
             <button onClick={deleted} className="deleteButton">delete</button>
             </li>
             ))}
        </form>
        </div>
    </div>
)



export default AppContent
