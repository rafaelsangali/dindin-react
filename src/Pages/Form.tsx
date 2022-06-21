import Footer from "../components/Footer";
import Header from "../components/Header";
import "../assets/styles/form.css";
import { useState } from "react";

export default function Form(){
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [text, setText] = useState<string>("")

    function buttonSubmit(event: React.MouseEvent<HTMLInputElement, MouseEvent>){
        event.preventDefault()
        let form = {
            name: name,
            email: email,
            text: text,
        }
        alert("Enviado com sucesso")
        console.log(form);
    }

return (
    <>
    <Header />
    <main>
         <div className="form-background">

            <form action="" method="post">
                <fieldset>
                    <legend>Contato</legend>
                    <div>
                        <input 
                        type="text" 
                        name="nome" 
                        placeholder="nome" 
                        value={name} 
                        onChange={(event) => setName(event.target.value)}
                        required />
                    </div>
                    <div>
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="email"
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)} 
                        required />
                    </div>
                    <div>
                        <textarea 
                        name="mensagem" 
                        cols={30} 
                        rows={10} 
                        placeholder="mensagem"
                        value={text} 
                        onChange={(event) => setText(event.target.value)} 
                        required>
                        </textarea>
                    </div>
                    <div>
                        <input 
                        type="submit" 
                        value="Entrar"
                        onClick={(event)=> buttonSubmit(event)} 
                        />
                    </div>
                </fieldset>
            </form>
        </div>
    </main>
    <Footer />
    </>
)
}