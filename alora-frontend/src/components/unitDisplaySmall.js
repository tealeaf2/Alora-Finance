import React from 'react';

function UnitDisplaySmall ({unit}) {
    return(
        <div 
            className="grid py-8 px-4 h-10 w-30 place-content-center border-4 rounded-3xl text-lg App-header-sections-button3"
            onClick = {() => null}>
            {unit.name}
        </div>
  
    )
}

export default UnitDisplaySmall
