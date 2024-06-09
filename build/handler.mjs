import express from "express";
const questions = [
  {
    id: 1,
    frage: "Was ist das Hauptziel von Kanban?",
    optionen: [
      {
        id: "op_1",
        text: "Die Geschwindigkeit der Produktion zu erhöhen"
      },
      {
        id: "op_2",
        text: "Die Effizienz der Produktion zu verbessern"
      },
      {
        id: "op_3",
        text: "Den Produktionsprozess zu visualisieren und kontinuierlich zu verbessern"
      },
      {
        id: "op_4",
        text: "Die Anzahl der Mitarbeiter zu reduzieren"
      }
    ],
    antwort: "op_3"
  },
  {
    id: 2,
    frage: "Welche der folgenden Elemente gehört nicht zu den grundlegenden Prinzipien von Kanban?",
    optionen: [
      {
        id: "op_1",
        text: "Visualisierung der Arbeit"
      },
      {
        id: "op_2",
        text: "Begrenzung der laufenden Arbeiten (Work in Progress, WIP)"
      },
      {
        id: "op_3",
        text: "Festlegung fester Rollen und Verantwortlichkeiten"
      },
      {
        id: "op_4",
        text: "Kontinuierliche Verbesserung (Kaizen)"
      }
    ],
    antwort: "op_3"
  },
  {
    id: 3,
    frage: "In welcher Branche wurde Kanban ursprünglich entwickelt?",
    optionen: [
      {
        id: "op_1",
        text: "Softwareentwicklung"
      },
      {
        id: "op_2",
        text: "Automobilindustrie"
      },
      {
        id: "op_3",
        text: "Gesundheitswesen"
      },
      {
        id: "op_4",
        text: "Bauwesen"
      }
    ],
    antwort: "op_2"
  },
  {
    id: 4,
    frage: 'Was versteht man unter einem "Pull-System" in Kanban?',
    optionen: [
      {
        id: "op_1",
        text: "Aufgaben werden von einem zentralen Manager zugewiesen"
      },
      {
        id: "op_2",
        text: "Aufgaben werden von den Teammitgliedern basierend auf ihrer Kapazität gezogen"
      },
      {
        id: "op_3",
        text: "Aufgaben werden nach einem festen Zeitplan zugewiesen"
      },
      {
        id: "op_4",
        text: "Aufgaben werden automatisch durch ein Computerprogramm zugewiesen"
      }
    ],
    antwort: "op_2"
  },
  {
    id: 5,
    frage: "Welches Werkzeug wird häufig verwendet, um den Workflow in einem Kanban-System zu visualisieren?",
    optionen: [
      {
        id: "op_1",
        text: "Gantt-Diagramm"
      },
      {
        id: "op_2",
        text: "Burn-Down-Chart"
      },
      {
        id: "op_3",
        text: "Kanban-Board"
      },
      {
        id: "op_4",
        text: "PERT-Diagramm"
      }
    ],
    antwort: "op_3"
  }
];
const data = {
  questions
};
const app = express();
app.use(express.json());
app.get("/api/questions", (req, res) => {
  const questions2 = data.questions.map((q) => {
    return {
      id: q.id,
      frage: q.frage,
      optionen: q.optionen
    };
  });
  res.json(questions2);
});
app.post("/api/answer", (req, res) => {
  if (!req.body.answer) {
    return res.status(400).json({ error: "answer is required" });
  }
  if (!req.body.id) {
    return res.status(400).json({ error: "id is required" });
  }
  const question = data.questions.find((q) => q.id === req.body.id);
  if (!question) {
    return res.status(404).json({ error: "question not found" });
  }
  if (question.antwort == req.body.answer) {
    return res.status(200).json({ correct: true });
  } else {
    return res.status(200).json({ correct: false });
  }
});
const handler = app;
export {
  handler
};
