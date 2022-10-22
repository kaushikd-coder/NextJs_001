

const NewsPage = ({article}) => {

    return(
        <>
            <h1>
                Welcome to News_Page
            </h1>
            {
                article?.map((news) => {
                    return(
                        <div key={news.id}>
                            <h2>{news.title}</h2>
                            <p>{news.description} | {news.category}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default NewsPage;

export const getServerSideProps = async() => {

    const response = await fetch('http://localhost:4000/news');
    const data = await response.json();

    return{
        props:{
            article:data
        }
    }

}