import {useRouter} from 'next/router';

function ReviewDetails () {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const {reviewId, productId} = router.query;

    return(
        <>
            <h1>Reviewed {reviewId} product {productId} </h1>
            
        </>
    )
}

export default ReviewDetails;