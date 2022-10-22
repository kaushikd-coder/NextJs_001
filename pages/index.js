import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { useSession } from "next-auth/react"

const HomePage = () => {
    const { data: session } = useSession()
    console.log(session)
    const router = useRouter();

    const navigateOrder = () => {
        router.push('/products')
    }

    const usersNavigate = () => {
        router.push('/users')
    }

    const postNavigate = () => {
        router.push('/posts');
    }
    

    return(
        <>
        <Head>
            <title>Home</title>
            <meta name="description" content="Home page" />
        </Head>
            <h1>Welcome to Home_Page</h1>
            <Link href= '/products'>
                <a>Product</a>
            </Link>
            <h1>
                {session ? `Welcome to ${session.user.name}` : "Not Welcome"}
            </h1>
            <button onClick={navigateOrder} style={{cursor:'pointer'}}>Products</button>
            <br/><br/>
            <button onClick={usersNavigate} style={{cursor:'pointer'}}>USERS</button>
            <button onClick={postNavigate} style={{cursor:'pointer'}}>POSTS</button>
        </>
    )

}

export default HomePage;