describe('form should', () => {
  it('add a animal', () => {

    browser.get('http://localhost:8080/')

    element(by.id('input-name')).sendKeys('Prune');
    element(by.id('input-species')).sendKeys('Chat');
    element(by.id('input-race')).sendKeys('Siamois');
    element(by.id('input-age')).sendKeys(8);
    element(by.id('input-photo')).sendKeys('https://static.wamiz.fr/images/news/facebook/article/siamois1-fb-58527a52d57bb.jpg')

    element(by.id('add-button')).click();
    const animals = element.all(by.css('.animal'));

    expect(animals.count()).toEqual(1)

    element(by.id('input-name')).sendKeys('Sancho');
    element(by.id('add-button')).click();
    expect(animals.count()).toEqual(2)

  });

});