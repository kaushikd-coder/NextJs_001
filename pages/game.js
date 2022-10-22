import { getSession, signIn } from "next-auth/react";

const Game = ({data}) => {

    return(
        <>
            <h1>Game Page {data}</h1>
        </>
    )

}

export default Game

export const getServerSideProps = async(context) => {
    const session = await getSession(context);

    if(!session){
        return{
            redirect: {
                destination: `/api/auth/signin?callbackUrl=http://localhost:3000/game`,
                permanent: false
            }
        }
    }

    return{
        props: {
            session,
            data: session ? 'Welcome to the Gaming World' : 'Your not Welcome '
        }
    }
}