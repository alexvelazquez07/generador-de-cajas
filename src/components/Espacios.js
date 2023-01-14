import React, { useState, useEffect} from 'react';



const Espacios = (props) => {
    const {cajas, setCajas} = props;
    const [caja , setCaja] = useState({
        color: '',
        height: 0,
        width: 0,
    })

    const onSubmit = (e) =>{
        e.preventDefault();
        setCajas([...cajas,caja])
    }
    useEffect(()=>{

    },[caja]);
    
    const handlerForm = (target) =>{
        setCaja({...caja,[target.name]: target.value});
        
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='forms'>
                    <label htmlFor="box">Color: </label>
                    <input type="color" name='color' onChange={(e) => handlerForm(e.target)} /> <br />
                    <label>Altura : </label>
                    <input type="number" name='height' onChange={(e) => handlerForm(e.target)} /><br />
                    <label>Ancho : </label>
                    <input type="number" name='width' onChange={(e) => handlerForm(e.target)} /><br />
                </div>    
                <div className='forms'>
                    <input className='btn' type="submit" value='Agregar' />
                </div>
            </form>
        </div>
    );
}

export default Espacios;