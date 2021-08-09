import React, {useState} from 'react'

const UseSelect = (initialState, options) => {

    const [state, setState] = useState(initialState)
    
    function Select() {
        return (
            <select 
                className="browser-default"
                value={state}
                onChange={(e)=>setState(e.target.value)}
            >    
                {
                    options.map((option)=>{
                       return <option value={option.value} key={option.value} >{option.label}</option>
                    })
                }
            </select>
        )
    }
    return [state, Select]
}

export default UseSelect;
