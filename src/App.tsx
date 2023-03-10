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
                <UserCard {...userMock} />
            </Container>
        </>
    );
}

export default App;
