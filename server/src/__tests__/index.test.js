const request = require('supertest')
const generateApp = require('../application')

describe('Weather', () => {
  let app
  beforeAll(() => {
    app = generateApp()
  })
  test('GET / error route', async () => {
    await request(app)
      .get('/')
      .expect(404)
  })
  test('GET /v1/weather no query city', async () => {
    await request(app)
      .get('/v1/weather')
      .expect(422)
  })

  test('GET /v1/weather?city=Vanvouer', async () => {
    await request(app)
      .get('/v1/weather?city=Vancouver')
      .expect(200)
  })

  test('GET /v1/weather error city not found', async () => {
    await request(app)
      .get('/v1/weather?city=ca')
      .expect(404, { cod: '404', message: 'city not found' })
  })
})
