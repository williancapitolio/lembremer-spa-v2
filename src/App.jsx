import { GlobalStyled } from "./GlobalStyled";
import Aside from "./components/Aside/Aside";
import Card from "./components/Card/Card";

export default function App() {
    return (
        <>
            <GlobalStyled />
            <div id="app">
                <Aside />
                <main>
                    <ul>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </ul>
                </main>
            </div>
        </>

    )
};