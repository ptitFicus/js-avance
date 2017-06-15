var fetchMock = require('fetch-mock');

describe('Fake tests', () => {
  it('1 should equal 1', () => {
    expect(1).toBe(1)
  })
})

describe('async call', ()  => {
  it('should work with async', (done) => {
    fetchMock.get('*', {hello: 'world'});
    fetch('http://foo.bar')
      .then(res => res.json())
      .then(json => expect(json.hello).toBe('world'))
      .then(done)
  })
})