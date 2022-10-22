import { useRouter } from "next/router";


const DocsPage = () => {

    const router = useRouter();
    const { params = [] } = router.query;

    console.log(params)

    if (params.length === 2) {
        return <h1>Viewing docs for {params[0]} and {params[1]}</h1>
    } else if (params.length === 1) {
        return <h1>Viewing docs only for {params[0]}</h1>
    }

    return (
        <>
            <h1>Welcome to Docs_Page</h1>
        </>
    )
}

export default DocsPage;