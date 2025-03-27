import { useState } from "react";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password != rePassword) {
            alert(`Passwords do not match!`);
            return;
        }
        alert(`The username is ${username}`);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                </label>
                <label htmlFor="password">
                    Password
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </label>
                <label htmlFor="rePassword">
                    Re-type Password
                    <input
                        id="rePassword"
                        type="password"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                    ></input>
                </label>
                <button type="submit">submit</button>
            </form>
        </>
    );
}

export default SignUp;
