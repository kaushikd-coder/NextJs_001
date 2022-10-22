import User from "../components/user";

const Users = ({ user }) => {
    return (
        <>
            <h1> Welcome to User_Page </h1>{" "}
            {user.map((usr) => {
                return (
                    <div key={usr.id}>
                        <User user={usr} />
                    </div>
                    
                );
            })}{" "}
        </>
    );
};

export default Users;

//used for Prerender page
export const getStaticProps = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();

    return {
        props: {
            user: users,
        },
    };
};
