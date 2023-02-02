import { AsideStyled } from "./AsideStyled";

export default function Aside() {
    return (
        <>
            <AsideStyled>
                <strong>Caderno de Notas</strong>
                <form>
                    <div className="input-block">
                        <label htmlFor="title">Título da Anotação</label>
                        <input />
                    </div>
                    <div className="input-block">
                        <label htmlFor="nota">Anotações</label>
                        <textarea></textarea>
                    </div>
                    <button type="submit">Salvar</button>
                </form>
            </AsideStyled>
        </>
    )
};