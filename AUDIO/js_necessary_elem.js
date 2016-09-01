
/***** STRUCTURE D'UN PLAYER TYPE *******/
// <!-- first player -->
//       <ul class="player-container" id="p-1">
//         <li><img src="./img/neededme.jpg"></li>
//         <li class="title">title </li>
//         <li class="album">album  </li>
//         <li class="artist">artist </li>
//         <!--  <li id="temps">time <span>00:00</span> </li>-->
//         <li class="controlers">
//           <form class="btns" method="get" onsubmit="playRandom(); return false"></form>
//         </li>
//         <!-- player default -->
//         <li class="media_player">
//           <audio class="track" src="./neededme.mp3" type="audio/mpeg" controls></audio>
//         </li>
//       </ul>
// <!-- end of first player -->

// >> RECUPERER LA VALEUR DU LECTEUR DEFAULT DABORD




// tableau des données piste
var PlayList = [
{track: 1, artist: "Rihanna", album: "Anti", title:"Needed Me", src: "./mp3/neededme.mp3", imgsrc: "./img/neededme.jpg" }, // 0
{track: 2, artist: "Young Money", /*album: "Rise Of An Empire",*/ title:"Senile", src: "./mp3/senile.mp3", imgsrc: "./img/senile.jpg" } , // 1
{track: 3, artist: "Rihanna", album: "Good Girl Gone Bad", title:"Rehab", src: "./mp3/rehab.mp3", imgsrc: "./img/rehab.jpg" }, // 2
{track: 4, artist: "Bjork", album: "Homogenic", title:"Joga", src: "./mp3/joga.mp3", imgsrc: "./img/joga.jpg" }, // 3
{track: 5, artist: "Yemi Alade", album: "King of Queens", title:"Johnny", src: "./mp3/johnny.mp3", imgsrc: "./img/johnny.jpg" },// 4
];

console.log("\nINSERER PISTE UN PAR UN DANS CHAQUE PLAYER");
//parcourr la playlist et insérer petit à petit
var tagAudio = document.getElementsByTagName('audio');
var tagImg = document.getElementsByTagName('img');

// écrire du texte dans les différents balbutiements
  function setText(el,propriete) {
    el.innerHTML = propriete;
  }
// PISTES DE MA PLAYLST ==
for (var p = 0; p < PlayList.length, p < tagAudio.length, p < tagImg.length; p++) {
	// parourir le tableau de piste
	var pisteObj = PlayList[p]; // objet complet
	var piste = PlayList[p].src; // source
	var image = PlayList[p].imgsrc;
	var hOp = PlayList[p].hasOwnProperty('album'); // FALSE pour SENILE vérifie l'existence d'une propriété
	console.log("var piste => numero ", p, piste, "\npiste Objet =>",pisteObj, hOp);
	/// remplacer la piste
	tagImg[p].setAttribute('src', image);
	//removedImg = pisteObj.splice(image, 1);

	tagAudio[p].setAttribute('src', piste);
	//removedAudio = PlayList[p].splice(piste, 1);
	//console.log("piste supprimée: ", PlayList.splice(0,1, piste));
	console.log("piste ", p,"----", piste, image ,"----------------- Loop ", p+1);
};



//parcourir la playlist et insérer petit à petit
for (var r = 0 ; r < tagAudio.length ; r++){
	var replace = PlayList[r].src;
// SUPPRIMER du tableauP "PlayList" la 'piste'
console.log(replace);
tagAudio[r].setAttribute('src', replace);
console.log(PlayList.splice(0,1, replace));
console.log("piste ", r,"----", replace ,"----------------- Loop ", r+1);
//replace.eventListner('onplay', ftOnPlay)
};


// PASSER à une autre video:
// Quand la piste est finie (piste.ended)
// je charge l'autre piste piste(i+1).load()




// RECUPERER UN CONTAINER-PLAYER PAR ID
var containerPlayerId = document.getElementById('p-1');
// RECUPERER UN CONTAINER-PLAYER PAR class
var containerPlayerClass = document.getElementsByClassName('p-1')[0];



/*
// RECUPERER UNE CLASS DANS UN CONTAINER-PLAYER
//Sinon, puisqu'il y a plusieurs éléments (getElementsByClassName), un Array est renvoyé :
//il faut donc lui spécifier un indice entre crochet :
//var haut_gauche = document.getElementsByClassName("haut_gauche")[0];
var track = document.getElementsByClassName('track')[0];
var title = document.getElementsByClassName('title')[0];
var album = document.getElementsByClassName('album')[0];
var artist = document.getElementsByClassName('artist')[0];
var controlers = document.getElementsByClassName('controlers')[0].getAttribute('src');

//Ensuite, il faut passer par la méthode setAttribute() pour créer un attribut
//(dans ce cas, c'est l'attribut class).
// haut_gauche.setAttribute('class', 'haut_gauche');
// haut_gauche.setAttribute('className', 'haut_gauche'); // pour IE
*/

// recuperer tous les propriété du tableau d'objet
console.log("\nPROPRIETE DU TABLEAU D'OBJET PISTE");
//var propTab = []
// for(var prop in pisteObj){
// 	console.log("propriété ==>", prop);
// };

	pisteOwnProp= Object.getOwnPropertyNames(pisteObj);
	console.log(pisteOwnProp);
for (var cpt = 0; cpt < pisteOwnProp.length; cpt++) {
	pisteObj =PlayList[cpt];
	console.log(pisteObj);

	pisteOwnProp= Object.getOwnPropertyNames(pisteObj);
	prop = pisteOwnProp[cpt];
	console.log("tab prop =", prop);

	// récupérer le TagName HTML qui correspond à la propriété Playliste

	//console.log(tagLi);
	for (var i = 0; i < PlayList.length - 1, i < tagAudio.length; i++) {
		pisteObj=  PlayList[i];
		var tagLi = document.getElementsByClassName(prop);
		console.log('reucpérer li', tagLi);
		classe = tagLi[i].getAttribute('class');
		console.log("valeur de la prop ", prop , " et de class '", classe, "' est'", pisteObj[prop]);
		// récupérer la valeur de l'attribut du LI
		
		classe.innerHtml = pisteObj[prop];
		// comparer la valeur de l'attribut class avec la propriété de l'obj
<<<<<<< HEAD
		if (prop == classe && prop ) {
			console.log('yes cette propriété et cette classe correspondent');
			console.log("valeur de la prop ", prop , " et de  ", classe, 'est', pisteOwnProp.prop);
=======
		if (prop == classe ) {

			setText(tagLi, pisteObj[prop]);
			console.log('ENTRE',pisteObj[prop]);
			tagLi[i];

		delete pisteObj[prop];
		console.log(pisteObj);
>>>>>>> ce67a91ecb430a2899d10dee94fe7167de724691

		};
	};
	// propTab.push(prop);
	//console.log(propTab);
}
/*
var classTab =  propTab;
console.log("classTab =>",classTab);

var track = document.getElementsByClassName(prop);
console.log("CE QUE JE DOIS REMPLACER POUR CE TABLEAU",'\n', '=> attribut SRC:', track);
// pour comparer il faut vérifier l'existance d'un des attribut
//	var hOp = PlayList[p].hasOwnProperty('PROPERTY');
// comparer la classe avec un element html
*/
