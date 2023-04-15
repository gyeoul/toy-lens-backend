import express, {Request, Response} from "express";

const app = express()
const PORT = process.env.PORT ?? 8000
app.use(express.json());

app.get('/save', (req: Request, res: Response) => {
    res.json({message: 'Save api called!'})
})

app.post('/portals', (req: Request, res: Response) => {
    console.log(req)
    res.json({message: 'success'})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})