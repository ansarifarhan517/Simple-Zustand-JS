import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'
import { UsersHandler } from './users'
const handlers = [
    http.get('https://localhost:5173/api/v1/getTasks', () => {
        return HttpResponse.json({
            status: 200,
            data: [
                { id: 1, title: "Learn HTML", completed: true },
                { id: 2, title: "Learn CSS", completed: false },
                { id: 3, title: "Learn JS", completed: false }
            ],
        })
    }),
    ...UsersHandler
]

const server = setupWorker(...handlers)
export {
    server
}