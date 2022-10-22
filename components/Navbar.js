import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
const Navbar = () => {

    const { data: session } = useSession()
    console.log(session)

    const sgnIn = (e) => {
        e.preventDefault();
        signIn();
    }

    const sgnOut = () => {
        signOut();
    }

    return(
        <>
            <Link href='/'><a>Home</a></Link>
            <Link href='/dashboard'><a>Dashboard</a></Link>
            <Link href='/game'><a>Games</a></Link>
            <hr />
         
            {
                 !session && (
                    <Link href='/api/auth/signin'><a onClick={sgnIn}>SignIn</a></Link>
                )
            }
            {
                session && (
                    <Link href='/api/auth/signout'><a onClick={sgnOut}>SignOut</a></Link>
                )
            }
           
        </>
    )
}

export default Navbar