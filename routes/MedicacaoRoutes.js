import express from 'express'
import MedicacaoController from '../controllers/MedicacaoController.js'

const MedicacaoRouter = express.Router()

MedicacaoRouter.get('/',MedicacaoController.list)
MedicacaoRouter.post('/',MedicacaoController.createMedicacao)
MedicacaoRouter.get('/:id', MedicacaoController.getMedicacaoById)
MedicacaoRouter.delete('/:id', MedicacaoController.destroyMedicacao)
MedicacaoRouter.put('/:id', MedicacaoController.updateMedicacao)

export default MedicacaoRouter
