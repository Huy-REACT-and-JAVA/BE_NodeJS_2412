import express, { Request, Response } from 'express'
const bookRouter = express.Router()
bookRouter.get('/', (req: Request, res: Response)=>{
    res.json({
        message:'lay danh sach sach'
    })
})
bookRouter.post('/', (req: Request, res: Response)=>{
    res.json({
        message:'them sach'
    })
})
bookRouter.put('/:id', (req: Request, res: Response)=>{
    res.json({
        message:'cap nhat sach'
    })
})
bookRouter.delete('/:id', (req: Request, res: Response)=>{
    res.json({
        message:'xoa sach'
    })
})
export default bookRouter