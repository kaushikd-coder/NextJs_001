import {useRouter} from 'next/router';

function productDetails () {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const {productId} = router.query;

    return(
        <>
            <h1>Details About the Recent product {productId}</h1>
        </>
    )
}

export default productDetails;