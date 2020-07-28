import React,{useState} from 'react';
import '../css/TicketGenerator.css';

function NumericPad(props) {

    const [value,setValue]=useState('');
   
    function calculate(e){        
        if (e.target.value === 'X'){
            setValue('')
        }
        else if (e.target.value === 'del'){
           setValue(value.substr(0,value.length-1));
        }
        else if (value.length > 5 ){
            return 
        }
        else{
            setValue(value + e.target.value)
        }
    }

    function add(){
        if(value > 100000){
            props.addTicket(value);
            setValue('')
        }
    }

    return (
        <div className="numeric ">
            <form>
                <div className="Textbox">
                    <input type="text" id="num" placeholder="Enter 6 digits" value={value} readOnly />
                </div>
                <div className="keypad" id="keypad">
                    <input type="button" className="btn" value="7" onClick={calculate} />
                    <input type="button" className="btn" value="8" onClick={calculate}  />
                    <input type="button" className="btn" value="9" onClick={calculate}  /><br />
                    <input type="button" className="btn" value="4" onClick={calculate}  />
                    <input type="button" className="btn" value="5" onClick={calculate}  />
                    <input type="button" className="btn" value="6" onClick={calculate}  /><br />
                    <input type="button" className="btn" value="1" onClick={calculate}  />
                    <input type="button" className="btn" value="2" onClick={calculate}  />
                    <input type="button" className="btn" value="3" onClick={calculate}  /><br />
                    <input type="button" className="btn del" value="del" onClick={calculate} />
                    <input type="button" className="btn" value="0" onClick={calculate}  />
                    <input type="button" className="btn" value="X" onClick={calculate}  />
                </div>
                <input type="button" className="addbtn" value="Add Ticket" onClick={add}/>
            </form>
        </div>
    );
}

export default NumericPad;
