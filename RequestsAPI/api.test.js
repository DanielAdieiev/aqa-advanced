const axios = require('axios');
const jsonData = require('./env.json');
const fs = require('fs');
const { title } = require('process');

// GET requests
test ('Validating values of the post 1', async () => {
    let response = await axios.get(`${jsonData.URL}/posts/1`);
    expect(response.data.userId).toBe(1);
    expect(response.data.id).toBe(1);
    expect(response.data.title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
    expect(response.data.body).toBe("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")
});

test ('Get 1st post request\`s status validation', async () => {
    let response = await axios.get(`${jsonData.URL}/posts/1`);
    expect(response.status).toBe(200);
});

test ('All posts objects are defined', async () => {
    let response = await axios.get(`${jsonData.URL}/posts`);
    expect(response.data).not.toBeUndefined();
});

test ('All posts objects are defined', async () => {
    let response = await axios.get(`${jsonData.URL}/posts`);
    expect(response.data).not.toBeUndefined();
});

test ('List of posts consist of this post', async () => {
    let response = await axios.get(`${jsonData.URL}/posts`);
    expect(response.data).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
              "userId": 1,
              "id": 7,
              "title": "magnam facilis autem",
              "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"})
        ])
    );
});

// POST requests

test ('Adding a new photo', async () => {
    let response = await axios.post(`${jsonData.URL}/photos`, {
        albumId: 1,
        title: "test",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
    });
    expect(response.status).toBe(201);
});

test ('Adding a photo with invalid data does not affects an error', async () => {
    let response = await axios.post(`${jsonData.URL}/photos`, {
        albumId: Infinity,
        title: 5,
        url: undefined,
        thumbnailUrl: NaN
    });
    expect(response.status).toBe(201);
});

test ('User is able to POST the todos with existing ID', async () => {
    let response = await axios.post(`${jsonData.URL}/todos`, {
        userId: 1,
        id: 1,
        title: "test",
        completed: false
    });
    expect(response.status).toBe(201);
});

test ('Unexisting user is able to POST new album', async () => {
    let response = await axios.post(`${jsonData.URL}/albums`, {
        userId: 999,
        title: "test"
    });
    expect(response.status).toBe(201);
});

test ('Album data is correct in the response', async () => {
    let response = await axios.post(`${jsonData.URL}/users`, {
        userId: "test",
        title: "test"
    });
    expect(response.data).toEqual(
        expect.objectContaining({
            "userId": "test",
            "title": "test"
        }));
    }
);