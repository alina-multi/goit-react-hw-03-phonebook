import React from "react";

const Filter = ({filter, onChange}) => {
   return  <div>
        <h4>Contacts</h4>
        <label> Find contacts by name
           <input type="text" name="filter" value={filter}onChange={onChange}/>
        </label>

</div>
}

export default Filter;