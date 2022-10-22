import Image from "next/image";
import Head from "next/head";

const ImgComp = () => {

    return(
        <>
         <Head>
            <title>Images</title>
            <meta
                name="description"
                content="Know more about images" />
        </Head>
            <h1>Welcome to Image Component</h1>
            <Image src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='Normal' layout='fill' objectFit="contain" priority/>
        </>
    )

}

export default ImgComp;