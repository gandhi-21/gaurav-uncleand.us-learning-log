const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('tiny'))

let phonebook = [
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        id: 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        id: 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        id: 4
      },
      {
        "name": "gandhi",
        "number": "435343534",
        id: 5
      }
]

app.get('/api/persons', (request, response) => {
    response.json(phonebook)
})

app.get('/info', (request, response) => {
    const total = phonebook.length
    response.send(`<p>Phonebook has info for ${total} people</p> <br> ${new Date()}`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = phonebook.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(400).json({
            error: 'Id not found'
        })
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = phonebook.find(person => person.id === id)

    if (!person) {
        response.status(400).json({
            error: 'Id does not exist'
        })
    } else {
        phonebook = phonebook.filter(n => n.id !== id)
        response.status(204).end()
    }
})

const generateId = () => {
    const maxId = phonebook.length > 0 ? Math.max(...phonebook.map(p => p.id)) : 0
    return maxId + 1
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    if(!body || !body.number || !body.name) {
        response.status(400).json({
            error: 'No content in the body!'
        })
    } else {
        const check = phonebook.find(n => n.name === body.name)
        if(check) {
            response.status(400).json({
                error: 'name must be unique'
            })
        } else {
            const person = {
                "name": body.name,
                "number": body.number,
                id: generateId()
            }
            phonebook = phonebook.concat(person)
            response.json(person)
        }
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})