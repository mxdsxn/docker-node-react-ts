import express from 'express'
import {
  testFunc, 
} from '@services'

const app = express()

app.get('/', (req, res) => {
  return res.json({
    message: 'Ola Docker', 
  })
})

testFunc('le')

app.listen(3000, () => console.log('Rodando container'))