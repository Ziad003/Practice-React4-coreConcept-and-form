
import { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    const [products,setProduct]=useState([]);
    const handleProduct=(pr)=>{
        const newProduct=[...products,pr]
        setProduct(newProduct);
    }
    return (        
        <div>
            <ProductForm handleProduct={handleProduct}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;