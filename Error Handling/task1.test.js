const axios = require('axios');
const url = require('./env.json').url;

test('wrong url request', async () => {
    try {
        await axios.get(`${url}/posts/1000000`);
    } catch (error) {
        expect(error.response.status).toBe(404);
        expect(error.message).toContain('');
    }
});
