import { useState } from "react";
import { api } from "../../services/Api";
import { AsideStyled } from "./AsideStyled";

export default function Aside() {
    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await api.post("/notes",
            title,
            notes
        )
        setTitle("");
        setNotes("");
    }

    return (
        <>
            <AsideStyled>
                <strong>Caderno de Notas</strong>
                <form onSubmit={handleSubmit}>
                    <div className="input-block">
                        <label htmlFor="title">Título da Anotação</label>
                        <input
                            required
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="notes">Anotações</label>
                        <textarea
                            required
                            value={notes}
                            onChange={e => setNotes(e.target.value)}
                        />
                    </div>
                    <button type="submit">Salvar</button>
                </form>
            </AsideStyled>
        </>
    )
};