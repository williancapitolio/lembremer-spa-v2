import { useState, useEffect } from "react";
import { api } from "./services/Api";
import { GlobalStyled } from "./GlobalStyled";
import Aside from "./components/Aside/Aside";
import Card from "./components/Card/Card";

export default function App() {
    const [allNotes, setAllNotes] = useState([]);

    useEffect(() => {
        async function getAllNotes() {
            const response = await api.get("/notes");
            setAllNotes(response.data);
        }
        getAllNotes()
    }, [])

    return (
        <>
            <GlobalStyled />
            <div id="app">
                <Aside />
                <main>
                    <ul>
                        {allNotes.map(data => (
                            <Card data={data} />
                        ))}
                    </ul>
                </main>
            </div>
        </>
    )
};