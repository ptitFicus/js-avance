describe('form should', () => {
  it('add a animal', () => {
    browser.get('http://localhost:8080/')
    element(by.id('input-name')).sendKeys('Prune');
    element(by.id('input-species')).sendKeys('Chat');
    element(by.id('input-race')).sendKeys('Siamois');
    element(by.id('input-age')).sendKeys(8);
    element(by.id('add-button')).click();

    const animals = element.all(by.css('.animal'));
    expect(animals.count()).toEqual(1)
  })
})
