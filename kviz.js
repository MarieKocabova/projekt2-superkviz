let poleOtazek = [
    {
        cisloOtazky: 1, 
        foto: 'moncicak.jpg',
        otazkaText: 'Co je ikonická hračka z 80. let?', 
        moznosti: ['Kočičák', 'Mončičák', 'Opičák'],
        spravnaOdpoved: 1,
    },
    {
        cisloOtazky: 2,
        foto: 'ovoce.jpg',
        otazkaText: 'Jaké je Matějovo nejoblíbenější ovoce?',
        moznosti: ['Kokos', 'Melounek', 'Jahoda', 'Ani jedna z možností'],
        spravnaOdpoved: 2
    },
    {
        cisloOtazky: 3,
        foto: 'pivo.jpg',
        otazkaText: 'Pro úspěšné absolvování kurzu je potřeba...',
        moznosti: ['Umět JavaScript', 'Chodit po kurzu do hospody'],
        spravnaOdpoved: 0
    }
]

let mozneOdpovedi = document.querySelector('#odpovedi');
//let spravneOdpovedi = [];  //tady info o správných odpovědích
let indexAktualniOtazky;  //tady udržuju index aktuální otázky

console.log(poleOtazek[0].moznosti[0])

//fce vygeneruj otázku

function getQuestion(indexAktualniOtazky) {
    //1. červený text - na které otázce z kolika jsem
    document.querySelector('#poradi').innerHTML = 'Otázka ' + poleOtazek[indexAktualniOtazky].cisloOtazky + '/' + poleOtazek.length;
    //2. text otázky
    document.querySelector('#otazka').innerHTML = poleOtazek[indexAktualniOtazky].otazkaText;
    //3. obrázek
    document.querySelector('.foto').src = 'obrazky/' + poleOtazek[indexAktualniOtazky].foto;
    //4. div s možnostmi viz readme foreach moznosti
    for (let i = 0; i < poleOtazek[indexAktualniOtazky].moznosti.length; i++) {
        const odpovedi = document.createElement('ul');
        odpovedi.setAttribute("id", "odpovedi");

        const moznost = document.createElement('li');
        moznost.setAttribute("data-odpoved", i);
        moznost.innerHTML = poleOtazek[indexAktualniOtazky].moznosti[i];

        odpovedi.appendChild(moznost);
        document.querySelector('#moznosti').appendChild(odpovedi);

    }

}
getQuestion(0);




//init - vygeneruj otázku[0]


//onclick na odpověď
//1.1. zkontroluj správnost - pomůže asi tohle: https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_data 

//2. ulož do proměnné odpověď (pole spravneOdpovedi)
//3. smaž veškerý obsah stránky
//4. if je nějaká další otázka (tj. aktuální index otázky + 1 !=null nebo undefined) -> vygeneruj otázku [aktuální+1], else -> vygeneruj vyhodnocení

//vyhodnocení
//1. text 'Tvoje hodnocení'
//2. cyklus foreach otázku - asi vygeneruj samostatný div, kde bude:
    //2.1. pořadí + text otázky
    //2.2. tvoje odpověď: zvolená odpověď (poleOtazek[].moznosti[zvolená])
    //2.3. if zvolená==správná -> vypiš "To je Správně", else -> Správná odpověď: poleOtazek[].spravnaOdpoved
//3. text 'Správně je spravneOdpovedi.length z poleOtazek.lenght.... Úspěšnost....%.'