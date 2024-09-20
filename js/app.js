let text1 = ["В Монголию муссоны приносят влагу летом", "а зимой над степью располагается центр", "огромного антициклона зимой стоят ясные солнечные", "дни и тихая безветренная погода слабые", "ветры наблюдаются только по окраинам антициклона"] // 30 слов
let text2 = ["Глаза лорда Джона вспыхнули на мгновение", "затем он с видимым усилием сдержал", "себя и с горькой усмешкою откинулся", "на спинку сиденья скрестив руки на", "груди весь этот выпад произвел на"] // 30 слов
let text3 = ["Но тем не менее эти черты", "не могли возникнуть самостоятельно они должны", "были быть принесены из того места", "где европеоидность была нормой а не", "исключением ближе всех к монголам располагались"] // 30 слова
let text4 = ["В руке он держал трубку шланга", "из которого поливал автомобиль в углу", "двора росли низкорослые платаны и под", "ними лежало несколько пушистых птичек задравших", "вверх свои крохотные лапки и производивших"] // 30 слова
let text5 = ["Мысль всей книги часто лежит в", "стороне от того что в ней", "описывается и говорится она обусловлена главным", "образом личными авторскими ассоциациями и поэтому", "ее трудно ухватить тем более если"] // 30 слов

let i
let text
let slovo
let slovoIndex = []
let numberText, numberSlovo

function selectionText () {
  numberText = Math.ceil( Math.random() * 5 )
}

function selectionSlovo () {
  numberSlovo = Math.ceil( Math.random() * 29 )
}

selectionText()
selectionSlovo()

if ( numberText === 1 ) {
  text = text1

  for ( i = 0; i < 1; i++ ) {
    slovo = numberSlovo
    text.splice( slovo, slovo )

    console.log( text )
  }

}

if ( numberText === 2 ) {
  text = text2

  for ( i = 0; i < 1; i++ ) {
    slovo = numberSlovo
    text.splice( slovo, slovo )

    console.log( text )
  }
}

if ( numberText === 3 ) {
  text = text3

  for ( i = 0; i < 1; i++ ) {
    slovo = numberSlovo
    text.splice( slovo, slovo )

    console.log( text )
  }
}

if ( numberText === 4 ) {
  text = text4

  for ( i = 0; i < 1; i++ ) {
    slovo = numberSlovo
    text.splice( slovo, slovo )

    console.log( text )
  }
}

if ( numberText === 5 ) {
  text = text5

  for ( i = 0; i < 1; i++ ) {
    slovo = numberSlovo
    text.splice( slovo, slovo )

    console.log( text )
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  text
  randomize = text[Math.floor( Math.random() * text.length )];
  document.querySelector('.quote_item').innerHTML = randomize;
});