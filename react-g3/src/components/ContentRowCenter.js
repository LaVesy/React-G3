import React from 'react';
import LastProduct from './LastProduct';
import SaleProduct from './SaleProduct';

function ContentRowCenter(){
   
    
    return (
        <div className="row">            
            {/*<!-- Last product in DB -->*/}
            <LastProduct />
            {/*<!-- Sale product in DB-->*/}
            <SaleProduct />           
           
        </div>
    )
}

export default ContentRowCenter;