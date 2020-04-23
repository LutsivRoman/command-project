sozdanieGun();
stvorutuLifes();
stvorutuPoints();
function sozdanieGun(){
	console.log(1);
	//создаем блок div
	var gun = document.createElement("div");
	//создаем уникальный id тегу div="ball"
	gun.id = "gun";
    //добавляем элемент пушку в игровое поле <div id="igra"></div>
	igraPole.appendChild(gun);
 	}

function stvorutuLifes() {
    lifes = document.createElement("div");//створюємо блок життя
    lifes.id = "lifes"; //добавляєм id
    var kilkistLifes2 = 0;//змінна в якій зберігаєм наявну к-ть життів
   while(kilkistLifes2 < kilkistLifes) { // цикл
    var span = document.createElement("span");//створюємо життя 1
    lifes.appendChild(span);//додаєм тег span в блок life
     kilkistLifes2 = kilkistLifes2 + 1;//збільшуємо к-ть життя на 1 
    }
    igraPole.appendChild(lifes);//вставляєм блок життя в блок ігрове поле
  }

function stvorutuPoints() {
     //створюємо блок div
     points = document.createElement("div");
     points.id = "points";//добавляєм id
     points.innerText = 0;
 var scull = document.createElement("div");
     scull.id = "scull";
     points.appendChild(scull);
    //добавляємо елемент очки на ігрове поле
     igraPole.appendChild(points);
  }

    // задаем перемещение курсора влево вправо
    var left = 0;
    var top = 637;
    var y = 637;
	var position = document.createElement("div");
	    position.id = "position";
		igraPole.appendChild(position);
	setInterval(function(){
		position.innerHTML = 'Позиция курсора: '+left+' / '+y;
		gun.style.left = left - 370 + 'px';
		gun.style.top= y  + 'px';
	}, 1000/60);
	
	igraPole.onmousemove = function(event){
		left = event.pageX;
		y = event.pageY;
		}
	igraPole.onclick = function(){
		sozdanieSnaryad();
	}
    
 function sozdanieSnaryad(){
	// создаем элемент пушка
	var snaryad = document.createElement("div");
	    snaryad.id =  "snaryad";
	//добавляем элемент пушку в игровое поле <div id="igra"></div>
	igraPole.appendChild(snaryad);
	// задаем координаты снаряда и приравниваем с пушкой
    snaryad.style.left = left -370 + "px";
	snaryad.style.top = y + "px";
	setTimeout(function(){
		
		//убираем свойство с задержкой изменения стилей
		snaryad.style.transition = "all 0s";
		//создаем таймер который каждые 10 милисекунд опускает шарик ниже
		var timerSnaryad = setInterval(function(){
			// snaryad.style.top = top;

			//меняем позицию снаряда на 1px вниз
			snaryad.style.top = snaryad.offsetTop - 1 + "px";
			//если шарик вышел за пределы игрового поля
			if (snaryad.offsetTop < 1){
				
				//удаляем снаряд
				snaryad.remove();
				}

			
		}, 10);
	},0);

}

// функйия создания самолета

function sozdaniePlanes() {

	//создаем переменную plane и создаем в ней элемент'div'

	var plane = document.createElement ('div');
	// переменную plane определяем как класс и и даем  классификатор 'plane'
       
	 plane.className = "plane";
	 
	 // впишем div в игровое поле
	igraPole.appendChild(plane);

	// задаем случайную координату по оси у для самолета в верхней позиции
	
	// первый самолет с координатой left от x1px до x2px
	
	plane.style.top = -200 + 'px';
	plane.style.left =random(750)  + 'px';
   
    // случайное число до 3
	var svoyPlane = random (3);
	// рисуем с вероятностью 1/3 гражданский самолет
	if (svoyPlane == 3) {
		plane.className = 'plane svoyplane';
	}
	
	// задержка 0,3 сек. перед прорисовкой нового ряда самолетов
	setTimeout ( function ()	{
		// создаем таймер, который каждые 10 мс опускает самолет ниже
		var timerPlane =  setInterval (function (){
				// меняем позицию самолета опуская его на 1px ниже
				plane.style.top = plane.offsetTop + 1 + 'px';
			
			// если самолет ушел за пределы поля
			if (plane.offsetTop > 700) {

				// удаляем несбитый и пролетевший все поле самолет
				plane.remove();

				// очищаем счетчик setInterval
				clearInterval (timerPlane);
						 			
			}

			}, 7);

	}, 500);

}

// вывод самолетов на экран от 1 до 5

	var timeSozdaniePlane = setInterval (function () {
		var i =0;
			sozdaniePlanes();
				
	}, 500)

// функция рандома для появления самолетов
		function random (max) {
 			var rand = 1 + Math.random () * (max+1);
    		rand = Math.floor (rand);
    		return rand;
		}