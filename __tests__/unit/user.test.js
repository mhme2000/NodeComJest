
const bcryptjs = require('bcryptjs')

const { User } = require('../../src/app/models')
const truncate = require('../utils/truncate')

describe('User', () => {
    beforeEach(async() => {
        await truncate()
    })
    it('password', async () => {
        const user = await User.create({name: 'Marcos', email: 'marcos.eckart@aluno.ic.ufmt.br'})

        const hash = await bcryptjs.hash('123456', 8)

        expect(await bcrypt.compare('123456', user.password_hash)).toBe(true)

    })
})
