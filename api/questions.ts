import data from '../data/questions.json'

export function GET(request: Request, res: Response) {
    const questions = data.questions.map(q => {
        return {
            id: q.id,
            frage: q.frage,
            optionen: q.optionen
        }
    });

    return new Response(JSON.stringify(questions), {
		status: 200,
		headers: {
			'content-type': 'application/json'
		}
	});
}