import React from 'react';
import '../css/TicketGenerator.css';

function Wheel(props) {
   
    function generate(){
        const value = 100000 + Math.floor(Math.random() * 900000);
        props.addTicket(value);        
    }

    return (
        <div className="WheelGenerator">
            <form>
                <label className="Header" >Click the wheel to generate random tickets</label>
                <div>
                    <input type="button" className="WheelButton" onClick={generate} />
                </div>
              <label className="Footer">Ticket Number Range: 100000 to 999999</label>
            </form>
        </div>
    );
}

export default Wheel;
