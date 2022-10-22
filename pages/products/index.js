import Link from "next/link";

const Products = ({productId = 100}) => {
    return (
        <>
            <Link href="/"><a> Home </a></Link>
            <h1>
                <Link href="/products/1"><a> Product_1 </a></Link>
            </h1>
            <h1> Product_2 </h1> 
            <h1> Product_3 </h1>{" "}
            <h1>
                <Link href={`/products/${productId}`}><a> product_{productId} </a></Link>
            </h1>
        </>
    );
};

export default Products;



