import data from '../data/questions.json'

export async function POST(req: Request, res: Response) {
    const body = await req.json()
    if(!body) {
        return new Response('body is missing', {
            status: 200
        });
    }

    if(!body.answer) {
        return new Response('answer is required', {
            status: 400
        });
    }

    if(!body.id) {
        return new Response('id is required', {
            status: 400
        });
    }

    const question = data.questions.find(q => q.id === body.id)

    if(!question) {
        return new Response('question not found', {
            status: 404
        });
    }

    if(question.antwort == body.answer) {
        return new Response(JSON.stringify({correct: true}), {
            status: 200,
            headers: {
                'content-type': 'application/json'
            }
        });
    } else {
        return new Response(JSON.stringify({correct: false}), {
            status: 200,
            headers: {
                'content-type': 'application/json'
            }
        });
    }
}