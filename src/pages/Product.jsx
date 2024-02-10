import React from 'react'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'
import Modal from '../components/Modal';


function Product() {
  const {modal} = useSelector(state => state.modal);
  console.log(modal, "modal");
  const buttonFunction = ()=>{

  }
  return (
    <>
    
     <ProductCard/>
     {modal && <Modal title={"Ürün Ekleyiniz"} btnText={"Oluştur"} btnFunction={buttonFunction}/>}
    </>
  )
}

export default Product
