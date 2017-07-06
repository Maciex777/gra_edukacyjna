var liczbaPunktow = 0;
var liczbaPunktowDod = 0;
//zmienne z polskimi opisami = "i", angielskimi słowami = "k", zdaniami angielskimi, podpowiedziami słów.    Aby dodać słowo, zdanie i podpowiedź: dodaj je odpowiednio do czterech poniższych zmiennych, dodaj odpowiednio po 1 else if w funkcji sprawdz(), skopiuj zmienną "i" do funkcji zagraj() i do funkcji koniec() 
var i = ["w dziedzinie/ obszarze", "ukończyć (np. uniwersytet)", "współpracować z", "jak do tej pory", "rozwijać umiejętności", "udowodnić", "zdobyć doświadczenie", "poczucie odpowiedzialności", "samorealizacja", "przyjąć na siebie", "obowiązki", "poszerzać swoje horyzonty", "kompetencje", "ostateczny termin", "porażka", "w moim przypadku", "uwielbiać", "trudny", "nagroda", "dobre relacje", "mocne strony", "słabe strony", "cechy (zalety, walory)", "potrafiący się przystosować", "oddany", "umiejętność radzenia sobie w trudnych sytuacjach", "mieć dobre stosunki z kimś", "pracować pod presją", "jeśli chodzi o …", "wada", "ulepszać, poprawiać", "współpracownik", "uprzejmy", "osiągnięcie", "dokonanie", "poprzedni", "kiedyś", "odnieść sukces", "zarabiać", "mimo", "przeszkoda", "zdołać", "wyznaczać cele", "trzymać się czegoś", "gwarancja stałego zatrudnienia", "uczestniczyć", "rozmaity", "mnóstwo", "zatrudnić", "korzyści", "radzić sobie z", "solidna wiedza", "szkolenie", "istotne zadania", "jestem przekonany/a", "wdrażać", "dostać zapłatę", "uczciwie", "otrzymać", "pensja", "w przedziale", "brutto"];
var k= ["in the field of", "graduate from", "cooperate with", "so far", "develop skills", "prove", "gain experience", "sense of responsibility", "self-actualization", "take on", "duties", "broaden my horizons", "competencies", "deadline", "failure", "in my case", "adore", "tough", "reward", "rapport", "strengths", "weaknesses", "qualities", "adaptable", "dedicated", "problem-solving", "get on with", "work under pressure", "when it comes to", "fault", "improve", "co-worker", "polite", "accomplishment", "achievement", "previous", "once", "succeed", "earn", "despite", "obstacle", "manage", "set goals", "stick to", "job security", "participate", "various", "a load of", "hire", "benefits", "deal with", "firm knowledge", "training", "relevant tasks", "I’m convinced that", "implement", "get paid", "fairly", "receive", "salary", "in the range of", "gross"];
var zdaniaang = ["I have been working in the field of computer science for over 5 years", "I graduated from the University of Warsaw with a diploma in Information Technology", "I have cooperated with many companies", "there is one issue that has not been debated so far", "I love developing my skills", "I believe I will have a chance to prove it", "that would be great to gain experience and more qualifications", "I wish to have a sense of responsibility", "I wish to have a sense of self-actualization", "you have to take on new duties", "you have to take on new duties", "I wish to broaden my horizons", "I’m sure that can result in dynamic development of my competencies", "very strict deadlines have been imposed", "many people are afraid of failure", "it works differently in my case", "I adore a situation in which I have to do something on time", "I enjoy doing tough tasks", "satisfaction of a job well done is the best reward afterwards", "having a good rapport with colleagues makes me really motivated", "could you describe your strengths?", "could you describe your weaknesses?", "let me start with positive qualities", "I’m very adaptable", "I’m very dedicated to my work", "I’m really good at problem-solving", "I try to get on with the team", "I’m not afraid to make quick decisions while working under pressure", "when it comes to my faults, I would say ...", "my worst fault is impatience", "I spend too much time checking and improving my work", "My co-workers also say I’m too polite and helpful", "My co-workers also say I’m too polite and helpful", "what was your greatest accomplishment?", "what was your greatest achievement?", "in my previous job I tried to be better than other employees", "once, I finished my project which was difficult because of deadlines", "with the help of my dear colleagues we succeeded", "our company earned thousands of euros", "despite lots of obstacles we managed to do that on time", "despite lots of obstacles we managed to do that on time", "despite lots of obstacles we managed to do that on time", "I set goals and stick to them", "I set goals and stick to them", "I need job security and now that I’ve bought a flat here in Warsaw", "I have more chances to participate in various cultural events", "I have more chances to participate in various cultural events", "living here gives me a load of inspiration", "why should I hire you?", "what benefits will you bring to our company?", "I know how to deal with customers", "a firm knowledge of computer programmes have made me a great expert in the field of IT", "trainings have made me a great expert in the field of IT", " I’m loyal to my employer and concentrate on relevant tasks", "I’m convinced that thanks to passion and energy I have the company will quickly see my potential", "I’m ready to implement new ideas and projects which will be successful both for me and the company", "I would like to get paid fairly for my work experience", "„I would like to get paid fairly for my work experience", "I would like to receive a salary in the range of 4500 to 5500 zlotys (gross) per month", "I would like to receive a salary in the range of 4500 to 5500 zlotys (gross) per month", "I would like to receive a salary in the range of 4500 to 5500 zlotys (gross) per month", "I would like to receive a salary in the range of 4500 to 5500 zlotys gross per month"];
var podpowiedzislow = ["in the f.... of", "g....... from", "c........ with", "s. f..", "d...... s.....", "pierwsza litera: p", "g... e.........", "s.... of r.............", "s...-a............", "t... on", "pierwsza litera: d", "b....en my h.......", "pierwsza litera: c", "pierwsza litera d", "pierwsza litera: f", "in my ....", "pierwsza litera: a", "pierwsza litera: t", "pierwsza litera: r", "pierwsza litera: r", "pierwsza litera: s", "pierwsza litera: w", "pierwsza litera: q", "pierwsza litera: a", "pierwsza litera: d", "p......-s...... (dosł. rozwiązywanie problemów)", "g.. on w...", "w... u.... p......", "w... it c.... to", "pierwsza litera: f", "pierwsza litera: i", "..-w.....", "pierwsza litera: p", "pierwsza litera: a", "pierwsza litera: a", "pierwsza litera: p", "pierwsza litera: o", "pierwsza litera: s", "pierwsza litera: e", "pierwsza litera: d", "pierwsza litera: o", "pierwsza litera: m", "s.. g....", "s.... to", "... s.......", "pierwsza litera: p", "pierwsza litera: v", "a l... of", "pierwsza litera: h", "pierwsza litera: b", "d... w...", "f... k........", "pierwsza litera: t", "r....... t....", "I'm c........ t...", "pierwsza litera: i", "g.. p...", "pierwsza litera: f", "pierwsza litera: r", "pierwsza litera: s", "in the ..... of", "pierwsza litera: g"];
var pierwszypoziom = true;
var tablica = true;

//ustawienia określone od chwili uruchomienia gry
window.onload = function () {
	 //zniknięcie niektórych elementów z pola widzenia
		var elems = document.getElementsByClassName('elems');
		for (var c = 0; c < elems.length; c++) {
			elems[c].style.display='none';
		}
		document.getElementById("przycisk").style.display='none';
		document.getElementById("ocena").innerHTML="Wybierz poziom trudności:";		
};

function start(){
	//pokazanie ukrytych elementów
		var elems = document.getElementsByClassName('elems');
        for (var g = 0; g < elems.length; g++) {
            elems[g].style.display='block';
        }
		document.getElementById("ocena").innerHTML="Wpisz słowo po angielsku";	
	//ukrycie zapytania o trudność
			document.getElementById("pytanieotrudnosc").style.display='none';
			document.getElementById("potwierdzenie").style.display='none';
		audio = new Audio('sounds/LargeGong01.wav');
		audio.play();  
		random();
	//zaznaczenie pola tekstowego		
		document.getElementById("pole").focus();	
	//ustawienie czasu według trudności
		if(document.getElementById('latwy').checked==true){
		   fiveMinutes = 20;
		   fiveMinutes2 = 80;
		}else if(document.getElementById('normal').checked==true){
		   fiveMinutes = 15;
		   fiveMinutes2 = 70;
		}else if(document.getElementById('trudny').checked==true){
		   fiveMinutes = 8;
		   fiveMinutes2 = 60;
		}
		
        display = document.querySelector('#time');
		startTimer(fiveMinutes, display);
	    
        display2 = document.querySelector('#time2');
		startTimer2(fiveMinutes2, display2);
		document.getElementById("tekstpodpowiedzi").style.display='none';
		document.getElementById("lista").style.display='none';
}

//licznik czasu pozostałego do następnego opisu
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    myVar =  setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
			random();
			var audio = new Audio('sounds/Charm.wav');
		    audio.play();  
			document.getElementById("pole").value="";
		}
    }, 1000);
}

//losowe wybieranie opisu
function random(){
	document.getElementById("tekstpodpowiedzi").style.display='none';
	document.getElementById("lista").style.display='none';
	var los = Math.floor(Math.random() * i.length);
			if(i[los] == null){
				random();
			} else {
				document.getElementById("opis").innerHTML= i[los];
				document.getElementById("tekstpodpowiedzi").innerHTML= podpowiedzislow[los];
			}
};



//licznik czasu pozostałego do końca gry
function startTimer2(duration2, display2) {
    var timer2 = duration2, minutes2, seconds2;
    myVar2 =  setInterval(function () {
        minutes2 = parseInt(timer2 / 60, 10);
        seconds2 = parseInt(timer2 % 60, 10);

        minutes2 = minutes2 < 10 ? "0" + minutes2 : minutes2;
        seconds2 = seconds2 < 10 ? "0" + seconds2 : seconds2;

        display2.textContent = minutes2 + ":" + seconds2;

        if (--timer2 < 0) {				
				koniec();			
		}			
    }, 1000);
}

function koniec(){
		document.getElementById("ocena").innerHTML= "Koniec gry";
		audio = new Audio('sounds/Alert.wav');
		audio.play();  
		 //zniknięcie niektórych elementów z pola widzenia
		document.getElementById("bonus").style.display="none";
		var elems = document.getElementsByClassName('elems');
		for (var c = 0; c < elems.length; c++) {
			elems[c].style.display='none';
		}
		//zatrzymanie czasów
		clearInterval(myVar);
		clearInterval(myVar2);
		//wyświetlenie tekstu podsumowania
		var twojWynik = 	liczbaPunktow*1 + liczbaPunktowDod*1;
		var los = Math.floor(Math.random() * i.length);
		if(i[los] == null){
			los = Math.floor(Math.random() * i.length);
			if(i[los] == null){
				i = ["w dziedzinie/ obszarze", "ukończyć (np. uniwersytet)", "współpracować z", "jak do tej pory", "rozwijać umiejętności", "udowodnić", "zdobyć doświadczenie", "poczucie odpowiedzialności", "samorealizacja", "przyjąć na siebie", "obowiązki", "poszerzać swoje horyzonty", "kompetencje", "ostateczny termin", "porażka", "w moim przypadku", "uwielbiać", "trudny", "nagroda", "dobre relacje", "mocne strony", "słabe strony", "cechy (zalety, walory)", "potrafiący się przystosować", "oddany", "umiejętność radzenia sobie w trudnych sytuacjach", "mieć dobre stosunki z kimś", "pracować pod presją", "jeśli chodzi o …", "wada", "ulepszać, poprawiać", "współpracownik", "uprzejmy", "osiągnięcie", "dokonanie", "poprzedni", "kiedyś", "odnieść sukces", "zarabiać", "mimo", "przeszkoda", "zdołać", "wyznaczać cele", "trzymać się czegoś", "gwarancja stałego zatrudnienia", "uczestniczyć", "rozmaity", "mnóstwo", "zatrudnić", "korzyści", "radzić sobie z", "solidna wiedza", "szkolenie", "istotne zadania", "jestem przekonany/a", "wdrażać", "dostać zapłatę", "uczciwie", "otrzymać", "pensja", "w przedziale", "brutto"];
				los = Math.floor(Math.random() * i.length);
			}
		}
		document.getElementById("tekst").innerHTML="Gratuluję! Zdobyłeś " + liczbaPunktow + " punktów oraz " + liczbaPunktowDod + " punktów dodatkowych.<br/><br/>Twój wynik: " + twojWynik + "<br/><br/>Warto wiedzieć:<br/>" + k[los] + " - " + i[los] + "<br/>" + zdaniaang[los];
		document.getElementById("przycisk").style.display='block';
		if (twojWynik <= 10){
			 document.getElementById("komentarz").innerHTML="Słabiutko...";
			 } else if (twojWynik > 10 && twojWynik <= 20) {
			 document.getElementById("komentarz").innerHTML="Nieźle";
		     } else if (twojWynik > 20 && twojWynik <= 30){
			 document.getElementById("komentarz").innerHTML="Całkiem nieźle!";
		     }	else if (twojWynik > 30 && twojWynik <= 40){
			 document.getElementById("komentarz").innerHTML="Dobrze!";
		     }	else if (twojWynik > 40 && twojWynik <= 60){
			 document.getElementById("komentarz").innerHTML="Super!";
		     }	else if (twojWynik > 60 && twojWynik <= 80){
			 document.getElementById("komentarz").innerHTML="Imponujący wynik!";
		     }	else if (twojWynik > 80){
			 document.getElementById("komentarz").innerHTML="Zajebiście!";
		     }	
};

function zagraj(){
		     //zerowanie wszystkich liczników
			clearInterval(myVar);
			clearInterval(myVar2);
			liczbaPunktow = 0;
			liczbaPunktowDod = 0;
			document.getElementById("punkty").innerHTML= liczbaPunktow;
			document.getElementById("punktydod").innerHTML= liczbaPunktowDod;
			document.getElementById("wynik").innerHTML=" ";
			document.getElementById("komentarz").innerHTML=" ";
			//ukrycie przycisku zagraj jeszcze raz
			document.getElementById("przycisk").style.display='none';
			//pokazanie ukrytych elementów
			var elems = document.getElementsByClassName('elems');
		    for (var g = 0; g < elems.length; g++) {
			elems[g].style.display='block';
		    }
			document.getElementById("tekstpodpowiedzi").style.display='none';
			document.getElementById("tekst").innerHTML="Sprawdź czy znasz angielskie słówka na poziomie B2<br/>Znajdź najodpowiedniejsze słowo pasujące do znaczenia";
			document.getElementById("ocena").innerHTML="Wpisz słowo po angielsku";
			//przywracanie usuniętych słów i zdań
			i = ["w dziedzinie/ obszarze", "ukończyć (np. uniwersytet)", "współpracować z", "jak do tej pory", "rozwijać umiejętności", "udowodnić", "zdobyć doświadczenie", "poczucie odpowiedzialności", "samorealizacja", "przyjąć na siebie", "obowiązki", "poszerzać swoje horyzonty", "kompetencje", "ostateczny termin", "porażka", "w moim przypadku", "uwielbiać", "trudny", "nagroda", "dobre relacje", "mocne strony", "słabe strony", "cechy (zalety, walory)", "potrafiący się przystosować", "oddany", "umiejętność radzenia sobie w trudnych sytuacjach", "mieć dobre stosunki z kimś", "pracować pod presją", "jeśli chodzi o …", "wada", "ulepszać, poprawiać", "współpracownik", "uprzejmy", "osiągnięcie", "dokonanie", "poprzedni", "kiedyś", "odnieść sukces", "zarabiać", "mimo", "przeszkoda", "zdołać", "wyznaczać cele", "trzymać się czegoś", "gwarancja stałego zatrudnienia", "uczestniczyć", "rozmaity", "mnóstwo", "zatrudnić", "korzyści", "radzić sobie z", "solidna wiedza", "szkolenie", "istotne zadania", "jestem przekonany/a", "wdrażać", "dostać zapłatę", "uczciwie", "otrzymać", "pensja", "w przedziale", "brutto"];
			document.getElementById("pole").value="";
			//zaznaczenie pola tekstowego		
			document.getElementById("pole").focus();
			//ponowne odliczanie czasu
			pierwszypoziom = true;
			random();
			//ustawienie czasu według trudności
			if(document.getElementById('latwy').checked==true){
			   fiveMinutes = 20;
			   fiveMinutes2 = 80;
			}else if(document.getElementById('normal').checked==true){
			   fiveMinutes = 15;
			   fiveMinutes2 = 70;
			}else if(document.getElementById('trudny').checked==true){
			   fiveMinutes = 8;
			   fiveMinutes2 = 60;
			}

			display = document.querySelector('#time');
			startTimer(fiveMinutes, display);

			display2 = document.querySelector('#time2');
			startTimer2(fiveMinutes2, display2);
			audio = new Audio('sounds/LargeGong01.wav');
			audio.play();  
};

//zatwierdzenie klawiszem enter
function keyDown(e)
{
   e = (e)?e:event;
   key = (e.which)?e.which:e.keyCode;
   if(key == 13){
    sprawdz()
   }
}
document.onkeydown=keyDown;

//skrót klawiszowy do podpowiedzi alt+x
document.onkeyup=function(e){
  var e = e || window.event; // for IE to cover IEs window event-object
  if(e.altKey && e.which == 88) {
    podpowiedz()
    return false;
  }
}

//po kliknięciu na podpowiedź
function podpowiedz() {
	document.getElementById("tekstpodpowiedzi").style.display='block';
	audio = new Audio('sounds/BOOK.WAV');
	audio.play();  
};

//po kliknięciu na liste
function lista() {
	liczbaPunktow-=1;
	document.getElementById("punkty").innerHTML= liczbaPunktow;
	document.getElementById("lista").style.display='block';
	//stworzenie tabeli ze słowami
	if(tablica){
		var tab, tr, td, tn, row, col;
		body = document.getElementsByTagName('body')[0];
		tab = document.createElement('table');
		for (row = 0; row < k.length; row++){
		tr = document.createElement('tr');
		for (col = 0; col < k[row].length; col++){
		  td = document.createElement('td');
		  tn = document.createTextNode(k[row][col]);
		  td.appendChild(tn);
		  tr.appendChild(td);
		}
		tab.appendChild(tr);
		}
		document.getElementById('lista').appendChild(tab);
		tablica = false;
	}
	audio = new Audio('sounds/BOOK.WAV');
	audio.play();  
};

//gdy odpowiedź jest poprawna
function dobrze(){
	document.getElementById("wynik").innerHTML="Dobrze!";
	clearInterval(myVar);
	document.getElementById("pole").value="";
	if(pierwszypoziom){
		h = true
			  while (h){
				  liczbaPunktow+=1;
				  h = false;			  
			  }
		var audio = new Audio('sounds/COIN.WAV');
		audio.play();  
		document.getElementById("punkty").innerHTML= liczbaPunktow;
		if(document.getElementById('latwy').checked==true){
			fiveMinutes = 20;			  
		}else if(document.getElementById('normal').checked==true){
			fiveMinutes = 15;
		}else if(document.getElementById('trudny').checked==true){
			fiveMinutes = 8;
		}
        display = document.querySelector('#time');
		//jeśli liczba punktów jest wystarczająca do odblokowania następnego poziomu		
		if(liczbaPunktow > 8){
			drugipoziom();
			pierwszypoziom = false;
		}			
	} else {
		p = true
		  while (p){
			  liczbaPunktowDod+=5;
              p = false;			  
		  }
		var audio = new Audio('sounds/COIN2.WAV');
		audio.play();  
		document.getElementById("punktydod").innerHTML= liczbaPunktowDod;
		if(document.getElementById('latwy').checked==true){
		   fiveMinutes = 30;			  
		}else if(document.getElementById('normal').checked==true){
		   fiveMinutes = 20;
		}else if(document.getElementById('trudny').checked==true){
		   fiveMinutes = 15;
		}
        display = document.querySelector('#time');	
		//jeśli liczba punktów składa się z dwóch cyfr
		if (liczbaPunktowDod > 9) {
			document.getElementById("punktydod").style.paddingLeft='8px';
			document.getElementById("punktydod").style.paddingRight='38px';
		}		
	}
	startTimer(fiveMinutes, display);
	random();      
};

function drugipoziom(){		
		clearInterval(myVar2);
		if(document.getElementById('latwy').checked==true){
		   fiveMinutes = 30;
		   fiveMinutes2 = 70;
		}else if(document.getElementById('normal').checked==true){
		   fiveMinutes = 20;
		   fiveMinutes2 = 60;
		}else if(document.getElementById('trudny').checked==true){
		   fiveMinutes = 15;
		   fiveMinutes2 = 50;
		}				
		startTimer2(fiveMinutes2, display2);		
		document.getElementById("bonus").style.display="block";
		document.getElementById("tekst").innerHTML= "Otrzymałeś bonusowy czas i zwielokrotnienie punktów!.<br/>Za każde przetłumaczone słowo otrzymasz teraz 5 punktów!" ;

	random();
	document.getElementById("pole").value="";
	audio = new Audio('sounds/bells.wav');	//sound downloaded from http://www.noiseforfun.com/
	audio.play();  
}

//sprawdzanie czy wpisane słowo jest poprawne
function sprawdz() 
{
		  var j = document.getElementById("pole").value;
		   var m = document.getElementById("opis").innerHTML;
		  if(j === k[0] && m === i[0]){
		    delete i[0];
			dobrze();
		  } else if(j === k[1] && m === i[1]){
		    delete i[1];
			dobrze();
		  } else if(j === k[2] && m === i[2]){
		    delete i[2];
			dobrze();
		  } else if(j === k[3] && m === i[3]){
			delete i[3];		    
			dobrze();
		  } else if(j === k[4] && m === i[4]){
		    delete i[4];
			dobrze();
		  } else if(j === k[5] && m === i[5]){
			delete i[5];		    
			dobrze();
		  } else if(j === k[6] && m === i[6]){
			delete i[6];		    
			dobrze();
		  } else if(j === k[7] && m === i[7]){
		    delete i[7];
			dobrze();
		  } else if(j === k[8] && m === i[8]){
			delete i[8];		    
			dobrze();
		  } else if(j === k[9] && m === i[9]){
		    delete i[9];
			dobrze();
		  } else if(j === k[10] && m === i[10]){
			delete i[10];		    
			dobrze();
		  } else if(j === k[11] && m === i[11]){
			delete i[11];		    
			dobrze();
		  } else if(j === k[12] && m === i[12]){
		    delete i[12];
			dobrze();
		  } else if(j === k[13] && m === i[13]){
			delete i[13];		    
			dobrze();
		  } else if(j === k[14] && m === i[14]){
			delete i[14];		    
			dobrze();
		  } else if(j === k[15] && m === i[15]){
		    delete i[15];
			dobrze();
		  } else if(j === k[16] && m === i[16]){
			delete i[16];		    
			dobrze();
		  } else if(j === k[17] && m === i[17]){
			delete i[17];		    
			dobrze();
		  } else if(j === k[18] && m === i[18]){
		    delete i[18];
			dobrze();
		  } else if(j === k[19] && m === i[19]){
			delete i[19];		    
			dobrze();
		  } else if(j === k[20] && m === i[20]){
		    delete i[20];
			dobrze();
		  } else if(j === k[21] && m === i[21]){
		    delete i[21];
			dobrze();
		  } else if(j === k[22] && m === i[22]){
			delete i[22];		    
			dobrze();
		  } else if(j === k[23] && m === i[23]){
		    delete i[23];
			dobrze();
		  } else if(j === k[24] && m === i[24]){
			delete i[24];		    
			dobrze();
		  } else if(j === k[25] && m === i[25]){
			delete i[25];		    
			dobrze();
		  } else if(j === k[26] && m === i[26]){
		    delete i[26];
			dobrze();
		  } else if(j === k[27] && m === i[27]){
			delete i[27];		    
			dobrze();
		  } else if(j === k[28] && m === i[28]){
		    delete i[28];
			dobrze();
		  } else if(j === k[29] && m === i[29]){
			delete i[29];		    
			dobrze();
		  } else if(j === k[30] && m === i[30]){
			delete i[30];		    
			dobrze();
		  } else if(j === k[30] && m === i[30]){
		    delete i[30];
			dobrze();
		  } else if(j === k[31] && m === i[31]){
			delete i[31];		    
			dobrze();
		  } else if(j === k[32] && m === i[32]){
			delete i[32];		    
			dobrze();
		  } else if(j === k[33] && m === i[33]){
		    delete i[33];
			dobrze();
		  } else if(j === k[34] && m === i[34]){
			delete i[34];		    
			dobrze();
		  } else if(j === k[35] && m === i[35]){
			delete i[35];		    
			dobrze();
		  } else if(j === k[36] && m === i[36]){
		    delete i[36];
			dobrze();
		  } else if(j === k[37] && m === i[37]){
			delete i[37];		    
			dobrze();			
		  } else if(j === k[38] && m === i[38]){
			delete i[38];		    
			dobrze();
		  } else if(j === k[39] && m === i[39]){
		    delete i[39];
			dobrze();
		  } else if(j === k[40] && m === i[40]){
			delete i[40];		    
			dobrze();	
		  } else if(j === k[41] && m === i[41]){
			delete i[41];		    
			dobrze();
		  } else if(j === k[42] && m === i[42]){
		    delete i[42];
			dobrze();
		  } else if(j === k[43] && m === i[43]){
			delete i[43];		    
			dobrze();
		  } else if(j === k[44] && m === i[44]){
		    delete i[44];
			dobrze();
		  } else if(j === k[45] && m === i[45]){
			delete i[45];		    
			dobrze();
		  } else if(j === k[46] && m === i[46]){
			delete i[46];		    
			dobrze();
		  } else if(j === k[47] && m === i[47]){
		    delete i[47];
			dobrze();
		  } else if(j === k[48] && m === i[48]){
			delete i[48];		    
			dobrze();
		  } else if(j === k[49] && m === i[49]){
		    delete i[49];
			dobrze();
		  } else if(j === k[50] && m === i[50]){
			delete i[50];		    
			dobrze();
		  } else if(j === k[51] && m === i[51]){
			delete i[51];		    
			dobrze();
		  } else if(j === k[52] && m === i[52]){
		    delete i[52];
			dobrze();
		  } else if(j === k[53] && m === i[53]){
			delete i[53];		    
			dobrze();
		  } else if(j === k[54] && m === i[54]){
			delete i[54];		    
			dobrze();
		  } else if(j === k[55] && m === i[55]){
		    delete i[55];
			dobrze();
		  } else if(j === k[56] && m === i[56]){
		    delete i[56];
			dobrze();			
		  } else if(j === k[57] && m === i[57]){
		    delete i[57];
			dobrze();
		  } else if(j === k[58] && m === i[58]){
			delete i[58];		    
			dobrze();
		  } else if(j === k[59] && m === i[59]){
		    delete i[59];
			dobrze();
		  } else if(j === k[60] && m === i[60]){
			delete i[60];		    
			dobrze();
		  } else if(j === k[61] && m === i[61]){
			delete i[61];		    
			dobrze();
		  } else if(j === k[62] && m === i[62]){
		    delete i[62];
			dobrze();			
		

		  } else {
			  document.getElementById("wynik").innerHTML="To nie jest poprawna odpowiedź";
		  };
};
