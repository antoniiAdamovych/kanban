import data from './data.mjs'

export function GET(request, res) {
    console.log("test")

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