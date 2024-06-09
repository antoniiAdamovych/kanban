import express from 'express';
import data from './data/questions.json'

const app = express();

app.use(express.json());

app.get("/api/questions", (req, res) => {

    const questions = data.questions.map(q => {
        return {
            id: q.id,
            frage: q.frage,
            optionen: q.optionen
        }
    })

    res.json(questions);

});

app.post("/api/answer", (req, res) => {

    if(!req.body.answer) {
        return res.status(400).json({error: 'answer is required'})
    }

    if(!req.body.id) {
        return res.status(400).json({error: 'id is required'})
    }

    const question = data.questions.find(q => q.id === req.body.id)

    if(!question) {
        return res.status(404).json({error: 'question not found'})
    }

    if(question.antwort == req.body.answer) {
        return res.status(200).json({correct: true})
    } else {
        return res.status(200).json({correct: false})
    }
});

export const handler = app;