import { useEffect,useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom"
import Card from 'react-bootstrap/Card';

function ProductDetail(){

    const params=useParams()
    console.log(params)

    const [product,setProduct]=useState(null)

    useEffect(()=>{
        console.log(params.productId)
        for (let index = 0; index < productsArr.length; index++) {
            const element = productsArr[index];
            if(element.id==params.productId){
                setProduct(element)
            }
        }
    },[])

    const productsArr = [
        {
        id:1,
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
        id:2,
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
        id:3,
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
        id:4,
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
        ]

    return(
        <>
        <h1>Product Detail</h1>
        <img src={product.imageUrl}/>
        <p>{product && product.title}</p>
        </>
    )
}

export default ProductDetail