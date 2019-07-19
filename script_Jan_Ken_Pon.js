// by author : Anjasmara Dwi S
// 
// 

	let i_index=0;
	let x_index=0;

// catch choice Compute
function getChoiceCompute(){
	let comp=Math.random();
	//rule

	if(comp>=0.68) return 'Stone';
	if(comp>=0.34 && comp<0.67) return'Scicross';
		return 'Papper';
	// console.log(comp);
}

//result game decision (rule game)
function getResult(player, comp) {
	if(player==comp) return 'Draw';
		
	if(player=='Stone')
		return(comp=='Scicross')?"Win":"Lose";

	if (player=='Scicross')
		if (comp=='Papper')return "Win";
		return "Lose";
	if (player=='Papper')
		if (comp=='Scicross')return "Win";
		return "Lose";


}



//catch choice Player
// main system
const getChoiceAllImage=document.querySelectorAll('li img');
console.log(getChoiceAllImage);
getChoiceAllImage.forEach(function(ChoiceAllImage){
	ChoiceAllImage.addEventListener('click', function(){
		console.log(ChoiceAllImage);

		 const getChoiceCompute_result = getChoiceCompute();	
		 const getChoicePlayer_result = ChoiceAllImage.className;
		 console.log('nilai player: '+ getChoicePlayer_result);
		 console.log('nilai compute: '+ getChoiceCompute_result);
		 const result_panel= getResult(getChoicePlayer_result,getChoiceCompute_result);
		 console.log('hasil pertandingan : '+result_panel);

		 rollingTime();
		 //time Timeout on result 
		 setTimeout(function(){
		 const getImageCompute_result= document.querySelector('.img-komputer');
		 getImageCompute_result.setAttribute('src','img-suwit-jawa/'+getChoiceCompute_result+'.jpg');

		 document.querySelector('.info').innerHTML=result_panel;
		 getPoin(result_panel);

		 }, 1000);
		 
		
	})
});

// time interval for rolling compute image 
const getRollImageCompute = document.querySelector('.img-komputer');
function rollingTime(){
	const Image_value = ['Stone','Scicross','Papper'];
	let i=0;
	const TimeToStart=new Date().getTime();
	setInterval(function(){
		if (new Date().getTime() - TimeToStart >1000) {
			clearInterval;
			return;
		}
		getRollImageCompute.setAttribute('src', 'img-suwit-jawa/'+Image_value[i++]+'.jpg');
		if( i == Image_value.length){
		 i=0; }

	}, 100);
}


// poin for player and compute
function getPoin(Poin){
	const Poin_1= Poin;
	const getPoinCompute= document.querySelector('.poinCompute');
	const getPoinPlayer= document.querySelector('.poinPlayer');

	if(Poin_1=='Draw') {return;
	}
	else if(Poin_1=='Win')  {  i_index++;
	}

	else if(Poin_1=='Lose') { x_index++;
	}
	else{
		return;
	}
	console.log('hasil player '+i_index);
	console.log('hasil Compute '+x_index);
	let i_player=i_index;
	let x_compute=x_index;
	getPoinPlayer.innerHTML=i_player;
	getPoinCompute.innerHTML=x_compute;
	
}

