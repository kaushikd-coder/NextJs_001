import Link from "next/link";

const Post_Page = ({ posts }) => {

    return (
        <>
            <h1>Welcome to Post_Page</h1>
            {
                posts?.map((post) => {
                    return (
                        <div key={post.id}>
                            <Link href={`posts/${post.id}`} passHref><h2>{post.id} {post.title}</h2></Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Post_Page;

export const getStaticProps = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    

    return {
        props: {
            posts: data
        }
    }
}