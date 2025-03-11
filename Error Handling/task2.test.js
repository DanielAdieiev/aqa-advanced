const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const url = require('./env.json').url;

test('custom params request', async () => {
    const mock = new MockAdapter(axios);
    mock.onPost(url, {
        headers: {
            someHead: 'set=UTF-8'
        },
        params: {
            someParam: 'someValue'
        }
    }).reply(200, {
        headers: {
            someHead: 'set=UTF-8'
        },
        args: {
            someParam: 'someValue'
        }
    });

    const res = await axios.post(url, {
        headers: {
            someHead: 'set=UTF-8'
        },
        params: {
            someParam: 'someValue'
        }
    });

    const customHeaders = {
        someHead: 'set=UTF-8'
    };
    const queryParams = {
        someParam: 'someValue'
    };

    expect(res.status).toBe(200);
    expect(res.data.headers).toMatchObject(customHeaders);
    expect(res.data.args).toMatchObject(queryParams);

    mock.reset();
});