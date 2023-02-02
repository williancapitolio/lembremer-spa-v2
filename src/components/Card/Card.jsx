import { CardStyled } from "./CardStyled";

export default function Card() {
    return (
        <>
            <CardStyled>
                <div>
                    <strong>Fazer Compras</strong>
                    <span>x</span>
                </div>
                <textarea defaultValue="Lorem ipsum dolor, sit amet consectetur adipisicing elit."></textarea>
                <span>!</span>
            </CardStyled>
        </>
    )
};