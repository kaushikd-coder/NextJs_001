
const Category = ({articles, category}) => {

    return(
        <>
            <h1>Welcome to the {category} Page</h1>
            {
                articles?.map((news) => {
                    return(
                        <div key={news.id}>
                            <p>{news.title} {news.category}</p>
                        </div>
                    )
                })
            }
        </>
    )

}

export default Category;

export const getServerSideProps = async(context) => {

    const {params} = context;
    const {category} = params;

    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json();
    console.log(data)

    return{
        props:{
            articles: data,
            category,
        }
    }

}