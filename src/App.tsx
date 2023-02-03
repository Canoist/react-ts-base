import { Container } from "components/Container";
import { Header } from "components/Header";
import { Search } from "components/Search";
import { UserCard } from "components/UserCard";
import { userMock } from "mock";
import React from "react";
import "./App.css";

const mockError = {
    message: "Not Found",
    documentation_url:
        "https://docs.github.com/rest/reference/users#get-a-user",
};

function App() {
    return (
        <>
            <Container>
                <Header />
                <Search error={mockError} onSubmit={() => {}} />
                <UserCard
                    following={userMock.following}
                    followers={userMock.followers}
                    public_repos={userMock.public_repos}
                    created_at={userMock.created_at}
                    login={userMock.login}
                    name={userMock.name}
                />
            </Container>
        </>
    );
}

export default App;
