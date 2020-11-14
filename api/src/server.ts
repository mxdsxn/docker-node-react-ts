import express from 'express'

const app = express()

app.get('/', (req, res) => {
 return res.json({ message: 'Ola Docker' })
})

app.listen(3000, () => console.log('Rodando container'))