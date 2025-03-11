const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const url = require('./env.json').url;

// Positive test 1
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

// Positive test 2
test('get url', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet(url).reply(200);
    const res = await axios.get(url);
    expect(res.status).toBe(200);
    mock.reset();
});

// Negative test 1
test('get unexisting url', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet(url).reply(404);
    try {
        await axios.get(url);
    } catch (error) {
        expect(error.response.status).toBe(404);
    }
    mock.reset();
});

// Negative test 2
test('server error request', async () => {
    const mock = new MockAdapter(axios);
    mock.onPost(url).reply(503);
    try {
        await axios.post(url, {
            params: {
                someParam: 'someValue'
            }
        });
    } catch (error) {
        expect(error.response.status).toBe(503);
    }
    mock.reset();
});