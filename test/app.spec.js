// describe('trier la liste des utilisateurs', function() {
//
//   it('trie la liste en ordre alphabétique par défaut', function() {
//     // code des vérifications
//   });
//
// });

describe('home', function() {
  it('should add a animal', function() {

    element(by.id('input-name')).sendKeys('Prune');
    element(by.id('input-species')).sendKeys('Chat');
    element(by.id('input-race')).sendKeys('Siamois');
    element(by.id('input-age')).sendKeys(8);
    element(by.id('input-photo')).sendKeys('https://static.wamiz.fr/images/news/facebook/article/siamois1-fb-58527a52d57bb.jpg')

    element(by.id('add-button')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});