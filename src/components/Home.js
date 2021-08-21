import React from 'react';
import './Home.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";

const Home = () => {
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    useEffect(() => {
        if (loading) return;
        if (user) history.push("/dashboard");
    }, [loading, user]);
    return (
        <div className="home">
            <div className="home__container">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png"
                    alt="Google Classroom Image"
                    className="home__image"
                />
                <button className="home__login" onClick={signInWithGoogle}>
                    Login with Google
                </button>
            </div>
        </div>
    );
}

export default Home;