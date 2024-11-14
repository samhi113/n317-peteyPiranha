"use client"

import { useState } from "react"
import styles from "./faq.module.css"
import LRButtons from "@/components/LRButtons";



export default function Faq() {
    const [questions, setQuestions] = useState([]);
    const [newQuestions, setNewQuestion] = useState("");

    function handleInputChange(e) {
        setNewQuestion(e.target.value);
    }

    function handleAddQuestion(e) {
        e.preventDefault(); 
        if (newQuestions.trim() !== "") { 
            setQuestions([...questions, newQuestions]);
            setNewQuestion(""); 
        }
    }


    return(
        <main>
            <h1 className={styles.title}>FAQ</h1>
            <LRButtons pageBack="rankings" pageNext="faq" />
            <section>
                <form className={styles.formLayout}>
                    <div className={styles.variable}>
                    <label>Name:</label>
                    <input type="text" placeholder="name..."></input>
                    </div>
                    <div className={styles.variable}>
                    <label>Email:</label>
                    <input type="text" placeholder="email..."></input>
                    </div>
                    <div className={styles.variable}>
                    <label>Questions:</label>
                    <input 
                    type="text"
                    className={styles.shortInput}
                    placeholder="Question..."
                    value={newQuestions}
                    onChange={handleInputChange}
                    /> 
                    </div>
                    <button 
                    type="button" 
                    className={styles.button}
                    onClick={handleAddQuestion}
                    >
                        Add Question
                    </button>
                </form>
            </section>
            <section>
                <h2 className={styles.title}>Submitted Questions here</h2>
                <ul className="questionList">
                    {questions.map((questions, index) => (
                        <li className="list" key={index}>{questions}</li>
                    ))}
                </ul>
            </section>
        </main>

    )
}