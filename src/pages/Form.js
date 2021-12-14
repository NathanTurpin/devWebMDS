import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../style/Form.css";
export default function Form() {
  const [comments, setComments] = useState([
    {
      id: 0,
      pseudo: "Kirikou",
      message: "Je ne suis pas grand mais je suis vaillant",
    },
    {
      id: 1,
      pseudo: "Jean-Claude",
      message: "Oublies que t'as aucune chance, vas-y fonce!",
    },
  ]);
  const [pseudo, setPseudo] = useState("");
  const [message, setMessage] = useState("");

  function handlePseudo(event) {
    // console.log(event.target.value);
    setPseudo(event.target.value);
  }
  function handleMessage(event) {
    // console.log(event.target.value);
    setMessage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("J'ai soumis le formulaire");

    const newComment = {
      id: uuidv4(),
      pseudo: pseudo,
      message: message,
    };
    console.log(newComment);

    setComments([...comments, newComment]);
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {pseudo === "" ? (
          <h2>Pas d'ajout en cours!</h2>
        ) : (
          <h2>Ajouter en cours : </h2>
        )}
        <label htmlFor="">Pseudo :</label>
        <input type="text" value={pseudo} onChange={handlePseudo} />
        <label htmlFor="">Message :</label>

        <textarea rows="5" value={message} onChange={handleMessage} />

        <button class="btn btn-dark" type="submit">
          OK
        </button>
      </form>
      <ul>
        {comments.map((comment) => (
          <li>
            <p>{comment.pseudo}</p>
            <p>{comment.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
