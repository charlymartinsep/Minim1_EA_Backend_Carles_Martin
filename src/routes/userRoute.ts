import express from 'express'
import { createUser, deleteUser, findAllUsers, findUser, logIn, toggleHabilitacion, updateUser } from '../controllers/userControllers'

//import toNewUser from '../extras/utils'

const router = express.Router()

router.route('/')
    .post(createUser)

router.route('/:id')
    .get(findUser)
    .put(updateUser)
    .delete(deleteUser)

router.route('/all')
    .post(findAllUsers)

router.route('/logIn')
    .post(logIn)

router.route('/:id/habilitacion')
  .patch(toggleHabilitacion)
    
export default router