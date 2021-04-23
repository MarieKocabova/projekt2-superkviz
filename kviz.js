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
    },
    {
        cisloOtazky: 4,
        foto: 'snehurka.jpg',
        otazkaText: 'Kdo je na obrázku?',
        moznosti: ['Matěj', 'Filip', 'Sněhurka'],
        spravnaOdpoved: 1,
        zvolenaOdpoved:"",
        zvolenaOdpovedText:""
    }
]

let indexAktualniOtazky = 0;  //tady udržuju index aktuální otázky
let pocetSpravnych = 0; //tady počet správných odpovědí


//vygeneruj otázku
function getQuestion(indexAktualniOtazky) {
    //červený text - na které otázce z kolika jsem
    document.querySelector('#poradi').innerHTML = 'Otázka ' + poleOtazek[indexAktualniOtazky].cisloOtazky + '/' + poleOtazek.length;

    //text otázky
    document.querySelector('#otazka').innerHTML = poleOtazek[indexAktualniOtazky].otazkaText;

    //obrázek
    document.querySelector('.foto').src = 'obrazky/' + poleOtazek[indexAktualniOtazky].foto;

    //div s možnostmi viz readme, pomůže asi tohle: https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_data 
    for (let i = 0; i < poleOtazek[indexAktualniOtazky].moznosti.length; i++) {
        const odpovedi = document.createElement('ul');
        odpovedi.setAttribute("id", "odpovedi");

        const moznost = document.createElement('li');
        moznost.setAttribute("data-odpoved", i);
        moznost.setAttribute("onclick", "choice(this)");
        moznost.setAttribute("id", "moznost")
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
    
    // ulož do proměnné zvolenou odpověď
    poleOtazek[indexAktualniOtazky].zvolenaOdpoved = indexOdpovedi;
    poleOtazek[indexAktualniOtazky].zvolenaOdpovedText = textOdpovedi;

    // smaž možnosti předchozí otázky 
    document.querySelector('#moznosti').innerHTML = "";

    // posuň se na další otázku nebo vyhodnocení
    indexAktualniOtazky = indexAktualniOtazky + 1;
    if (indexAktualniOtazky < poleOtazek.length) {
        getQuestion(indexAktualniOtazky);
    } else {
        result();
    } 
    
}


//vyhodnocení
function result() {
    //schovej kviz
    document.querySelector('.kviz').style.display = 'none';

    //ukaž výsledek
    document.querySelector('.vysledek').style.display = 'block';

    // cyklus pro každou otázku - vygeneruj samostatný div
    for (let i = 0; i < poleOtazek.length; i++) {
        let vypisVysledky = document.createElement('div');
        vypisVysledky.setAttribute("id", "vypisVysledky");

        // pořadí + text otázky do h3
        let vypisOtazky = document.createElement('h3');
        vypisOtazky.innerHTML = poleOtazek[i].cisloOtazky + '. ' + poleOtazek[i].otazkaText;
        
        //tvoje odpověď: zvolená odpověď
        let volba = document.createElement('p');
        volba.setAttribute("id", "volba1")
        volba.innerHTML = "Tvoje odpověď: " + poleOtazek[i].zvolenaOdpovedText;  

        //zkontroluj správnost
        let vyhodnoceni = document.createElement('p');
        if (poleOtazek[i].zvolenaOdpoved == poleOtazek[i].spravnaOdpoved) {
            vyhodnoceni.innerHTML = "To je SPRÁVNĚ.";
            pocetSpravnych = pocetSpravnych + 1;
        } else {
            vyhodnoceni.innerHTML = "Správná odpověď: " + poleOtazek[i].moznosti[poleOtazek[i].spravnaOdpoved];        
        }

        vypisVysledky.appendChild(vypisOtazky);
        vypisVysledky.appendChild(volba);
        vypisVysledky.appendChild(vyhodnoceni);
        document.querySelector('.vysledek').appendChild(vypisVysledky);
    }
    
    //text 'Správně je.... Úspěšnost....%.'
    let uspesnost = document.createElement('h2');
    let procentSpravnych = Math.floor((pocetSpravnych/poleOtazek.length) * 100);
    uspesnost.innerHTML = "Správně " + pocetSpravnych + " ze " + poleOtazek.length + " otázek. Úspěšnost " + procentSpravnych + " %.";
    document.querySelector('.vysledek').appendChild(uspesnost);

} 




    
    
    
