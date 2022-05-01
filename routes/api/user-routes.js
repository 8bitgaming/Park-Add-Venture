const router = require('express').Router();

const {
    getAllUsers,
    getUserbyID,
    createUser,
    deleteUser,
    updateUser
}
    = require('../../controllers/user-controller')

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/:Id')
    .get(getUserbyID)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router