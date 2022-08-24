import React,{useEffect} from 'react'
import { GetApi } from '../Api/function'
const Checkout = () => {

  const ApiData = async () => {
    const result = await GetApi(`product/getallproducts`)
    const response = 
                  result?.data?.
                  filter((item) => item && item?.status === true ? item :null )
                  .map((data) => data)
                  console.log(response)
  }

    useEffect(() => {
      ApiData()
    },[])

  return (
    <div>Checkout</div>
  )
}

export default Checkout