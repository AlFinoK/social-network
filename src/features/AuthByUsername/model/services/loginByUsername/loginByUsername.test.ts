import { loginByUsername } from './index'

describe('loginByUsername', () => {
    it('should return user from api', async () => {
        const user = await loginByUsername({ username: 'test', password: 'test' })
        expect(user).toHaveProperty('id')
    })
})
