import React, { useState } from 'react';
import NumericPad from './NumericPad';
import Wheel from './Wheel';
import '../css/TicketGenerator.css';

function TicketGenerator() {
    const initialTickets = [
        {
            id: 1,
            number: 800030
        },
        {
            id: 2,
            number: 645248
        }
    ]
    const [tickets, setTickets] = useState(initialTickets);

    const addTicket = ticketNumber => {
        if (tickets.length < 5) {
            if (!tickets.find((item) => item.number === ticketNumber)) {
                const ticketObject = {
                    id: "id" + Math.random().toString().slice(2),
                    number: ticketNumber
                }
                setTickets([...tickets, ticketObject]);
            }
            else {
                alert("Duplicate tickets are not allowed");
            }
        }
        else {
            alert("Cannot add more tickets");
        }
    }

    const deleteTicket = id => {
        const newListOfTicket = tickets.filter((item) => item.id !== id);
        setTickets(newListOfTicket);
    }

    return (
        <div className="TicketPage">
            <div className="Generator">
                <div className="Numpad"><NumericPad addTicket={addTicket} /></div>
                <div className="Wheel"><Wheel addTicket={addTicket}/></div>
            </div>
            <div className="Display">
                Your Selected Tickets:
                   <ul> {tickets.map((item) => {
                    return (<li key={item.id}>{item.number} &nbsp;  <input type="button" className="btn" value="delete" onClick={() => deleteTicket(item.id)} /> </li>)
                })}</ul>
            </div>
        </div>
    );
}

export default TicketGenerator;