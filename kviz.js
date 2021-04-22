let poleOtazek = [
    {
        cisloOtazky: 1, 
        foto: 'moncicak.jpg',
        otazkaText: 'Co je ikonická hračka z 80. let?', 
        moznosti: ['Kočičák', 'Mončičák', 'Opičák'],
        spravnaOdpoved: 1,
        zvolenaOdpoved: "",
        zvolenaOdpovedText: ""
    },
    {
        cisloOtazky: 2,
        foto: 'ovoce.jpg',
        otazkaText: 'Jaké je Matějovo nejoblíbenější ovoce?',
        moznosti: ['Kokos', 'Melounek', 'Jahoda', 'Ani jedna z možností'],
        spravnaOdpoved: 2,
        zvolenaOdpoved:"",
        zvolenaOdpovedText: ""
    },
    {
        cisloOtazky: 3,
        foto: 'pivo.jpg',
        otazkaText: 'Pro úspěšné absolvování kurzu je potřeba...',
        moznosti: ['Umět JavaScript', 'Chodit po kurzu do hospody'],
        spravnaOdpoved: 0,
        zvolenaOdpoved:"",
        zvolenaOdpovedText:""
    }
]

//let kviz = document.querySelector('.kviz');
//let obsah = document.querySelector('.obsah');
//let mozneOdpovedi = document.querySelector('#odpovedi');
let indexAktualniOtazky = 0;  //tady udržuju index aktuální otázky

console.log(poleOtazek[0].zvolenaOdpoved)



//fce vygeneruj otázku

function getQuestion(indexAktualniOtazky) {
    //1. červený text - na které otázce z kolika jsem
    document.querySelector('#poradi').innerHTML = 'Otázka ' + poleOtazek[indexAktualniOtazky].cisloOtazky + '/' + poleOtazek.length;
    //2. text otázky
    document.querySelector('#otazka').innerHTML = poleOtazek[indexAktualniOtazky].otazkaText;
    //3. obrázek
    document.querySelector('.foto').src = 'obrazky/' + poleOtazek[indexAktualniOtazky].foto;
    //4. div s možnostmi viz readme foreach moznosti, pomůže asi tohle: https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_data 
    for (let i = 0; i < poleOtazek[indexAktualniOtazky].moznosti.length; i++) {
        const odpovedi = document.createElement('ul');
        odpovedi.setAttribute("id", "odpovedi");

        const moznost = document.createElement('li');
        moznost.setAttribute("data-odpoved", i);
        moznost.setAttribute("onclick", "choice(this)");
        moznost.innerHTML = poleOtazek[indexAktualniOtazky].moznosti[i];

        odpovedi.appendChild(moznost);
        document.querySelector('#moznosti').appendChild(odpovedi);
    }
}

//init - vygeneruj otázku[0]
getQuestion(indexAktualniOtazky);


//onclick na odpověď

function choice(answer) {
    let indexOdpovedi = answer.getAttribute("data-odpoved");
    let textOdpovedi = answer.innerHTML
    alert ('zkouska - '+ answer.innerHTML + ' , index odpovedi: '+ indexOdpovedi);
    // ulož do proměnné zvolenou odpověď
    poleOtazek[indexAktualniOtazky].zvolenaOdpoved = indexOdpovedi;
    poleOtazek[indexAktualniOtazky].zvolenaOdpovedText = textOdpovedi;
    
    console.log(poleOtazek[indexAktualniOtazky].zvolenaOdpoved); 
    console.log(poleOtazek[indexAktualniOtazky].zvolenaOdpovedText);

    indexAktualniOtazky = indexAktualniOtazky + 1;
    getQuestion(indexAktualniOtazky);
}

//3. smaž možnosti

//4. if je nějaká další otázka (tj. aktuální index otázky + 1 !=null nebo undefined) -> vygeneruj otázku [aktuální+1], else -> nastav kviz: display none a vysledek: display "" ->  vygeneruj vyhodnocení

//vyhodnocení
function vyhodnoceni() {
    //schovej kviz
    //ukaž výsledek
} 
//2. cyklus foreach otázku - asi vygeneruj samostatný div, kde bude:
    //2.1. pořadí + text otázky
    //2.2. tvoje odpověď: zvolená odpověď (poleOtazek[].moznosti[zvolená])
    //2.3. zkontroluj správnost: if zvolená==správná -> vypiš "To je Správně", else -> Správná odpověď: poleOtazek[].spravnaOdpoved
//3. text 'Správně je spravneOdpovedi.length z poleOtazek.lenght.... Úspěšnost....%.'