
//Дещо перевіряв у чаті гпт але не списував УСЕ :)



// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = '';

for (let i = 0; i < friends.length; i += 1){
string += friends[i]

if(i < friends.length - 1){
    string += ','
 }
}

console.log(string);


 const friendss = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

 const result = friendss.join(',')
 console.log(result);
 


// 2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)

const cards = [
    'карточка-1',
    'карточка-2',
    'карточка-3',
    'карточка-4',
    'карточка-5',
];
console.log(cards);


// 3. Видалити

const cardToRemove = 'карточка-3';
const remove = cards.indexOf(cardToRemove)

cards.splice(remove, 1); //видаляє 1 елемент з масиву

console.log(remove);


// 4. Додати

const cardToInsert = 'карточка-6';
const insertIndex = 4;
 cards.splice(insertIndex, 0, cardToInsert) //Не чат гпт 0 значить нічого не видаляти це я розумію, а insertIndex сам індекс який я замінюю, cardToInsert на що заманію
 console.log(insertIndex);
 

// 5. Оновити

const cardToUpdate = 'карточка-4';
const toUpdate = cards.indexOf(cardToUpdate);

cards.splice(toUpdate, 1, 'Updated') //тут ставлячи 1 я видаляю єлемент та заміняю на новий
console.log(toUpdate);
