/*
 *
 * No habrá segunda cita, pero... - Platzi (Septiembre 2022)
 * E-Literatura
 * Adrian Santuario
 *
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */

var container;
var welcomeContainer;
var welcomeContainerButton;

var imageHeader;

var answerButtons;
var answerLabelButtons;
var answerLabels;
var answerOptionsLabels;

var headerContainer;
var titleLabel;
var descriptionLabel;


// Header

let header;
let H_pg;
let H_H = 200;
let H_x, H_y;


// Q1

let input_block_Q1;
var Q1_answer;
var Q1_isAnswered;
let Q1_pg;
let Q1_H = 500;
let Q1_x, Q1_y;
var Q1DataGraph = [3,11,33,31,18,4];
var Q1DataZEROGraph = [0,0,0,0,0,0];


// Q2

let input_block_Q2;
var Q2_answer;
var Q2_isAnswered;
let Q2_pg;
let Q2_H = 400;
let Q2_x, Q2_y;
var Q2DataGraph = [72,28];
var Q2DataZEROGraph = [0,0];


// Q3

let input_block_Q3;
var Q3_answer;
var Q3_isAnswered;
let Q3_pg;
let Q3_H = 200;
let Q3_x, Q3_y;
var Q3DataGraph = [37,63];
var Q3DataZEROGraph = [0,0];


// Q4

let input_block_Q4;
var Q4_answer;
var Q4_isAnswered;
let Q4_pg;
let Q4_H = 200;
let Q4_x, Q4_y;
var Q4DataGraph = [69,21,8];
var Q4DataZEROGraph = [0,0,0];



// Q5

let input_block_Q5;
var Q5_answer;
var Q5_isAnswered;
let Q5_pg;
let Q5_H = 200;
let Q5_x, Q5_y;
var Q5DataGraph = [26,13,47,14];
var Q5DataZEROGraph = [0,0,0,0];






// Q6

let input_block_Q6;
var Q6_answer;
var Q6_isAnswered;
let Q6_pg;
let Q6_H = 900;
let Q6_x, Q6_y;
var Q6DataGraph = [[7,7,26,14,14,5],[15,31,12,21,18,18],[19,28,16,14,14,11],[30,15,28,18,8,12],[19,11,20,15,18,18]];
var Q6DataZEROGraph = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];


// Font
var geoMidFont
var geoSmallFont;


// Graphs
let backgroundGraphColor;
let graphsColors = [];
let graphsText = ['Salario', 'Concimiento de Frameworks', 'Nuevas herramientas aprendidas', 'Herramientas conocidas', 'Herramientas que se evitan', 'Lenguajes conocidos'];
var dataGraphTmp = [0, 0, 31, 40, 49, 52, 70, 79, 88, 70, 67, 88, 93, 78, 0];
var dataGraphTmpAnimation = [];
var deltaGraph = 70;


//Animation
var startGraphicValue = 0;


 /*
 *****************************************
 *****************************************
 * LYFE CYCLE METHODS
 *****************************************
 *****************************************
 */


function preload() {

   // Fonts
   geoMidFont = loadFont('assets/fonts/Geogtq-Md.otf');
   geoSmallFont = loadFont('assets/fonts/Geogtq-Ul.otf');
 

}




function windowResized() {

  resizeCanvas(windowWidth, 4900);

  //drawImageHeader();
  //drawWelcomeContainer();
  drawGraphs();

}

function setup() {

  container = createCanvas(windowWidth, 4900);
  container.style('z-index','-1');
  container.position(0,0);
  initialize();
}

function draw() {
  // put drawing code here
  //background('rgba(0,255,0, 0)');
  background(backgroundGraphColor);

  //drawImageHeader();
  //drawWelcomeContainer();
  drawGraphs();

}


/*
 *****************************************
 *****************************************
 * INITIALIZE METHODS
 *****************************************
 *****************************************
 */

function initialize() {
    backgroundGraphColor = color('#EAE7DC');
    graphsColors = [color('#489ad9'),color('#48d99d'),color('#a9d948'),color('#d99348'),color('#d94873'),color('#9348d9')];
    //initializeImageHeader();
    //initializeWelcomeContainer();
    initializeQuestionsContainer();
    initializeGraphs();
}



/*
 *****************************************
 *****************************************
 * IMAGE HEADER METHODS
 *****************************************
 *****************************************
 */

function initializeImageHeader() {
  imageHeader = select("#imageHeader");
  drawImageHeader();

}

function drawImageHeader() {
  imageHeader.position(windowWidth/2,windowHeight/2);
  imageHeader.size(1024,80);

}

/*
 *****************************************
 *****************************************
 * WELCOME CONTAINER METHODS
 *****************************************
 *****************************************
 */

function initializeWelcomeContainer() {
  welcomeContainer = select("#welcomeContainer");
  welcomeContainerButton = select("#welcomeContainerButton");
  welcomeContainerButton.mouseOver(welcomeContainerButtonMouseOver);
  welcomeContainerButton.mouseOut(welcomeContainerButtonMouseOut);
  welcomeContainerButton.mouseClicked(welcomeContainerButtonMousePressed);
  drawWelcomeContainer();

}

function drawWelcomeContainer() {
  welcomeContainer.position(windowWidth/2 - 300,windowHeight/2 -300);
  welcomeContainer.size(600,600);

  welcomeContainerButton.position(0,0);
  welcomeContainerButton.size(376,112);

}

function welcomeContainerButtonMouseOver(){
  print("OVER");
  welcomeContainerButton.attribute('src', 'assets/images/welcomeImageButton_2.png');
}

function welcomeContainerButtonMouseOut(){
  print("OUT");
  welcomeContainerButton.attribute('src', 'assets/images/welcomeImageButton_1.png');

}

function welcomeContainerButtonMousePressed(){
  print("PRESSED");
  welcomeContainer.hide();
}



/*
 *****************************************
 *****************************************
 * QUESTIONS METHODS
 *****************************************
 *****************************************
 */


function initializeQuestionsContainer() {

  print('initializeQuestionsContainer');

  answerButtons = selectAll(".btn");


  for (let i = 0; i < answerButtons.length; i++) {
    //answerButtons[i].mouseOver(answerButtonMouseOver);
    //answerButtons[i].mouseOut(answerButtonMouseOut);
    answerButtons[i].mouseClicked(answerButtonMousePressed);
  }

  answerLabelButtons = selectAll("label-answer-font");

  for (let i = 0; i < answerLabelButtons.length; i++) {
    answerLabelButtons[i].mouseClicked(answerButtonMousePressed);
  }


  answerLabels = selectAll(".label-font");
  for (let i = 0; i < answerLabels.length; i++) {
    answerLabels[i].style('font-family','Geogtq-Md');
    answerLabels[i].style('font-size','1.4em');
    answerLabels[i].style('line-height:','30px');
    answerLabels[i].style('color','#E98074');
  }
  answerOptionsLabels =  selectAll(".label-answer-font");
  for (let i = 0; i < answerOptionsLabels.length; i++) {
    answerOptionsLabels[i].style('font-family','Geogtq-Ul');
    answerOptionsLabels[i].style('font-size','1.0em');
    answerOptionsLabels[i].style('line-height:','30px');
    answerOptionsLabels[i].style('color','#8E8D8A');
  }

  titleLabel = select('.title-font');
  titleLabel.style('font-family','Geogtq-Md');
  titleLabel.style('font-size','3.5em');
  titleLabel.style('color','#E85A4F');
  
  descriptionLabel =  selectAll('.description-font');
  for (let i = 0; i < descriptionLabel.length; i++) {
    descriptionLabel[i].style('font-family','Geogtq-Ul');
    descriptionLabel[i].style('font-size','1.8em');
    descriptionLabel[i].style('line-height:','30px');
    descriptionLabel[i].style('color','#8E8D8A');
  }

  headerContainer = select('.header-container');

  // QUESTIONS_COMPLETE
  input_block_Q1 = select('.input-block-Q1');
  input_block_Q2 = select('.input-block-Q2');
  input_block_Q3 = select('.input-block-Q3');
  input_block_Q4 = select('.input-block-Q4');
  input_block_Q5 = select('.input-block-Q5');

  input_block_Q6= select('.input-block-Q6');


}


function answerButtonMouseOver(){
  //print("OVER");
}

function answerButtonMouseOut(){
  //print("OUT");

}

function answerButtonMousePressed(event){
  //print("PRESSED: ");
  //print(event);

  var parentIDString = '';
  var answerIDString = '';

  if(event.target.parentNode.id){
    parentIDString = String(event.target.parentNode.id);
    answerIDString = String(event.target.parentNode.id);
  }else{
    parentIDString = String(event.target.id);
    answerIDString = String(event.target.id);
  }


  parentIDString = parentIDString.substr(0,1);
  answerIDString = answerIDString.substr(answerIDString.length - 1);


  buttonAnswerPressed(parentIDString,answerIDString);
}


 function buttonAnswerPressed(question,answer){

  print('question: ' + question);
  print('answer: ' + answer);


  // QUESTIONS_COMPLETE
  if(question === '1'){
    Q1_answer = int(answer);
    Q1_isAnswered = true;
    Q6_isAnswered = false;
  }else if(question === '2'){
    Q2_answer = int(answer);
    Q2_isAnswered = true;
    Q6_isAnswered = false;
  }else if(question === '3'){
    Q3_answer = int(answer);
    Q3_isAnswered = true;
    Q6_isAnswered = false;
  }else if(question === '4'){
    Q4_answer = int(answer);
    Q4_isAnswered = true;
    Q6_isAnswered = false;
  }else if(question === '5'){
    Q5_answer = int(answer);
    Q5_isAnswered = true;
    Q6_isAnswered = false;
  }else if(question === '6'){
    Q6_answer = int(answer);
    Q6_isAnswered = true;
  }


 }






 /*
 *****************************************
 *****************************************
 * GRAPHS METHODS
 *****************************************
 *****************************************
 */

function initializeGraphs(){

  Header_initialize();

  // QUESTIONS_COMPLETE
  Q1_initialize();
  Q2_initialize();
  Q3_initialize();
  Q4_initialize();
  Q5_initialize();
  Q6_initialize();

}

function drawGraphs(){

  Header_draw();

  // QUESTIONS_COMPLETE
  Q1_draw();
  Q2_draw();
  Q3_draw();
  Q4_draw();
  Q5_draw();
  Q6_draw();



}


function Header_initialize(){
  H_pg = createGraphics(windowWidth, headerContainer.height + H_H);

  Q1_x = H_pg.width / 2;
  Q1_y = H_pg.height;
}

function Header_reset(value){
}

function Header_draw(){
  H_pg.background(backgroundGraphColor);
  H_pg.noStroke();
  H_pg.stroke(color('#D8C3A5'));

  image(H_pg, 0, 0, H_pg.width, H_pg.height);
}

// QUESTIONS_COMPLETE

function Q1_initialize(){

  input_block_Q1.position(0,headerContainer.height + H_H);
  Q1_isAnswered = false;
  Q1_pg = createGraphics(windowWidth, Q1_H);
  Q1_x = Q1_pg.width / 2;
  Q1_y = Q1_pg.height;

}

function Q1_draw(){

 var test_answer = 'La mayoría de developers tiene una \n experiencia de 2-5 años.';
  
  if(Q1_isAnswered){
    Q1_pg = drawPGGraph(Q1_pg, Q1DataZEROGraph,Q1DataGraph, test_answer, Q1_answer,0,'Q1');
  }else{
    Q1_pg = drawPGGraph(Q1_pg, Q1DataZEROGraph,Q1DataZEROGraph,'', -1,-1,'Q1');
  }
  
  image(Q1_pg, 0, input_block_Q1.position().y + input_block_Q1.size().height , Q1_pg.width, Q1_pg.height);
}


function Q2_initialize(){

  input_block_Q2.position(0,input_block_Q1.position().y + input_block_Q1.size().height + Q1_pg.height);
  Q2_isAnswered = false;
  Q2_pg = createGraphics(windowWidth, Q2_H);
  Q2_x = Q2_pg.width / 2;
  Q2_y = Q2_pg.height;

}

function Q2_draw(){

 var test_answer = 'El top 5 de las librería más usadas:\n\n-React\n-Svelte\n-Vue.js\n-Preact\n-Angular';
  
  if(Q2_isAnswered){
    Q2_pg = drawPGCircleGraph(Q2_pg, Q2DataZEROGraph,Q2DataGraph, test_answer, Q2_answer,0,'Q2');
  }else{
    Q2_pg = drawPGCircleGraph(Q2_pg, Q2DataZEROGraph,Q2DataZEROGraph,'', -1,-1,'Q2');
  }
  
  image(Q2_pg, 0, input_block_Q2.position().y + input_block_Q2.size().height , Q2_pg.width, Q2_pg.height);
}


function Q3_initialize(){

  input_block_Q3.position(0,input_block_Q2.position().y + input_block_Q2.size().height + Q2_pg.height);
  Q3_isAnswered = false;
  Q3_pg = createGraphics(windowWidth, Q3_H);
  Q3_x = Q3_pg.width / 2;
  Q3_y = Q3_pg.height;

}

function Q3_draw(){

 var test_answer = 'Apesar de que los que prefirieron aprender \nuna nueva librería representan el 37 %, \nésta cifra incremento 17% \nen comparación al 2018.';
  
  if(Q3_isAnswered){
    Q3_pg = drawPGGraph(Q3_pg, Q3DataZEROGraph,Q3DataGraph, test_answer, Q3_answer,0,'Q3');
  }else{
    Q3_pg = drawPGGraph(Q3_pg, Q3DataZEROGraph,Q3DataZEROGraph,'', -1,-1,'Q3');
  }
  
  image(Q3_pg, 0, input_block_Q3.position().y + input_block_Q3.size().height , Q3_pg.width, Q3_pg.height);
}


function Q4_initialize(){

  input_block_Q4.position(0,input_block_Q3.position().y + input_block_Q3.size().height + Q3_pg.height);
  Q4_isAnswered = false;
  Q4_pg = createGraphics(windowWidth, Q4_H);
  Q4_x = Q4_pg.width / 2;
  Q4_y = Q4_pg.height;

}

function Q4_draw(){

 var test_answer = '';
  
  if(Q4_isAnswered){
    Q4_pg = drawPGCircleGraph(Q4_pg, Q4DataZEROGraph,Q4DataGraph, test_answer, Q4_answer,0,'Q4');
  }else{
    Q4_pg = drawPGCircleGraph(Q4_pg, Q4DataZEROGraph,Q4DataZEROGraph,'', -1,-1,'Q4');
  }
  
  image(Q4_pg, 0, input_block_Q4.position().y + input_block_Q4.size().height , Q4_pg.width, Q4_pg.height);
}



function Q5_initialize(){

  input_block_Q5.position(0,input_block_Q4.position().y + input_block_Q4.size().height + Q4_pg.height);
  Q5_isAnswered = false;
  Q5_pg = createGraphics(windowWidth, Q5_H);
  Q5_x = Q5_pg.width / 2;
  Q5_y = Q5_pg.height;

}

function Q5_draw(){

 var test_answer = 'Es interesante que los dos máximos \n se encuentran entre el "REGULAR" (47 %) \n y "MUY POCO" (26 %)';
  
  if(Q5_isAnswered){
    Q5_pg = drawPGCircleGraph(Q5_pg, Q5DataZEROGraph,Q5DataGraph, test_answer, Q5_answer,0,'Q5');
  }else{
    Q5_pg = drawPGCircleGraph(Q5_pg, Q5DataZEROGraph,Q5DataZEROGraph,'', -1,-1,'Q5');
  }
  
  image(Q5_pg, 0, input_block_Q5.position().y + input_block_Q5.size().height , Q5_pg.width, Q5_pg.height);
}





function Q6_initialize(){

  input_block_Q6.position(0,input_block_Q5.position().y + input_block_Q5.size().height + Q5_pg.height);

  Q6_isAnswered = false;
  Q6_pg = createGraphics(windowWidth, Q6_H);
  Q6_x = Q6_pg.width / 2;
  Q6_y = Q6_pg.height;

}

function Q6_draw(){

 
  
  if(Q6_isAnswered && Q5_isAnswered && Q4_isAnswered && Q3_isAnswered && Q2_isAnswered && Q1_isAnswered){
    var test_answer = '¿DÓNDE TE GUSTARÍA ESTAR EL PRÓXIMO AÑO?';
    Q6_pg = drawPGFinalGraph(Q6_pg, Q6DataZEROGraph,Q6DataGraph, test_answer, Q6_answer,0,'Q6');
  }else{
    var test_answer = 'PRIMERO DEBES CONTESTAR TODAS LAS PREGUNTAS';
    Q6_pg = drawPGFinalGraph(Q6_pg, Q6DataZEROGraph,Q6DataZEROGraph,test_answer, -1,-1,'Q6');
  }
  
  image(Q6_pg, 0, input_block_Q6.position().y + input_block_Q6.size().height , Q6_pg.width, Q6_pg.height);
}




/*
 *****************************************
 *****************************************
 * PG BAR GRAPH METHODS
 *****************************************
 *****************************************
 */





function drawPGGraph(p_graph, dataValues, dataValuesTMP, text_response,answer_x, answer_y, name) {

  p_graph.background(backgroundGraphColor);
  p_graph.smooth();

  p_graph.stroke(color('#D8C3A5'));
  p_graph.strokeWeight(3);
  p_graph.stroke(color('#D8C3A5'));
  p_graph.strokeJoin(ROUND);
  p_graph.line(deltaGraph, p_graph.height - deltaGraph, deltaGraph, deltaGraph);
  p_graph.line(deltaGraph, p_graph.height - deltaGraph, p_graph.width - deltaGraph, p_graph.height - deltaGraph);

  var divitionY = 5;
  p_graph.fill(color('#D8C3A5'));

  var deltaY = round((p_graph.height - 2 * deltaGraph) / divitionY);

  for (var i = 0; i < divitionY; i++) {
  
    var currentHeight = deltaY * i + deltaY;
    p_graph.stroke(color('#D8C3A5'));
    p_graph.strokeWeight(0.5);
    p_graph.line(deltaGraph, p_graph.height - deltaGraph - currentHeight, p_graph.width - deltaGraph, p_graph.height - deltaGraph - currentHeight);
    p_graph.stroke(color('#D8C3A5'));
    p_graph.strokeWeight(3);
    p_graph.line(deltaGraph - 5, p_graph.height - deltaGraph - currentHeight, deltaGraph, p_graph.height - deltaGraph - currentHeight);
    p_graph.textAlign(RIGHT, CENTER);
    var textY = str((i + 1) * 20);
    p_graph.noStroke();
    p_graph.text(textY + ' %', deltaGraph - 15, p_graph.height - deltaGraph - currentHeight);
  }


  var divitionX = dataValues.length;

  var deltaX = round((p_graph.width - 2 * deltaGraph) / divitionX);

  for (var i = 0; i < divitionX; i++) {
    var currentWidth = deltaX * i + deltaX / 2;
    p_graph.line(deltaGraph + currentWidth, p_graph.height - deltaGraph, deltaGraph + currentWidth, p_graph.height - deltaGraph + 5);

    p_graph.textAlign(CENTER, TOP);
    var correctionString = 1;

    p_graph.noStroke();
    var currentIntString = i + correctionString;
    var textX = str(currentIntString);
    p_graph.text(textX, deltaGraph + currentWidth, p_graph.height - deltaGraph + 10);
  }


  p_graph.fill(color('#D8C3A5'));

  var currentWidth = round((p_graph.width - 2 * deltaGraph) / dataValues.length);


  for (var i = 0; i < dataValues.length; i++) {
    var currentHeightAnimation = animate('animation_bar_' + i + name, dataValuesTMP[i]* (p_graph.height - 2*deltaGraph)/100);
    p_graph.rect(deltaGraph + currentWidth * i, p_graph.height - deltaGraph - currentHeightAnimation, currentWidth - 2, currentHeightAnimation);
  }

  p_graph.fill(color('#E98074'));

  position_x = 0;
  position_y = 0;

  if(answer_x < 0){
    position_x = -200;
    position_y = -200;
  }else{
    delta_answer = round((p_graph.width - 2 * deltaGraph) / dataValues.length);
    position_x = deltaGraph + (answer_x * delta_answer) - (delta_answer*0.5);
    position_y = (p_graph.height - 2*deltaGraph);
  }


  var position = animate('myAnimation'+name, position_x);
  p_graph.ellipse(position, position_y, 30,30);
  p_graph.text('TU ESTÁS AQUÍ', position, position_y + 20);

  p_graph.fill(color('#8E8D8A'));


  p_graph.text(text_response, p_graph.width/2, p_graph.height/2);


  return p_graph;
}




/*
 *****************************************
 *****************************************
 * PG CIRCLE GRAPH METHODS
 *****************************************
 *****************************************
 */





function drawPGCircleGraph(p_graph, dataValues, dataValuesTMP, text_response,answer_x, answer_y, name) {

  p_graph.background(backgroundGraphColor);
  p_graph.smooth();

  p_graph.stroke(color('#D8C3A5'));
  p_graph.strokeWeight(3);
  p_graph.stroke(color('#D8C3A5'));
  p_graph.strokeJoin(ROUND);
  //p_graph.line(deltaGraph, p_graph.height - deltaGraph, p_graph.width - deltaGraph, p_graph.height - deltaGraph);

  p_graph.fill(color('#D8C3A5'));




  var divitionX = dataValues.length;

  var deltaX = round((p_graph.width - 2 * deltaGraph) / divitionX);

  for (var i = 0; i < divitionX; i++) {
    var currentWidth = deltaX * i + deltaX / 2;
    p_graph.textAlign(CENTER, TOP);
    var correctionString = 1;
    p_graph.noStroke();
    var currentIntString = i + correctionString;
    var textX = str(currentIntString);
    p_graph.text(textX, deltaGraph + currentWidth, p_graph.height - deltaGraph + 10);
  }


  for (var i = 0; i < dataValues.length; i++) {
    var currentWidth = deltaX * i + deltaX / 2;
    var currentHeightAnimation = animate('animation_circle_' + i + name, dataValuesTMP[i]* (p_graph.height - 2*deltaGraph)/100);
    var circleColor = str(dataValuesTMP[i]/100);
    p_graph.fill('rgba(216, 195, 165, '+circleColor+')');
    p_graph.ellipse(deltaGraph + currentWidth, p_graph.height/2, currentHeightAnimation, currentHeightAnimation);
  }

  p_graph.fill(color('#E98074'));

  position_x = 0;
  position_y = 0;

  if(answer_x < 0){
    position_x = -200;
    position_y = -200;
  }else{
    delta_answer = round((p_graph.width - 2 * deltaGraph) / dataValues.length);
    position_x = deltaGraph + (answer_x * delta_answer) - (delta_answer*0.5);
    position_y = (p_graph.height/2);
  }


  var position = animate('myAnimation'+name, position_x);
  p_graph.ellipse(position, position_y, 30,30);
  p_graph.text('TU ESTÁS AQUÍ', position, position_y + 20);


  p_graph.fill(color('#8E8D8A'));

  p_graph.text(text_response, p_graph.width/2, p_graph.height/6);


  return p_graph;
}




/*
 *****************************************
 *****************************************
 * PG FINAL GRAPH METHODS
 *****************************************
 *****************************************
 */





function drawPGFinalGraph(p_graph, dataValues, dataValuesTMP, text_response,answer_x, answer_y, name) {

  p_graph.background(backgroundGraphColor);
  p_graph.smooth();

  p_graph.stroke(color('#D8C3A5'));
  p_graph.strokeWeight(3);
  p_graph.stroke(color('#D8C3A5'));
  p_graph.strokeJoin(ROUND);
  //p_graph.line(deltaGraph, p_graph.height - deltaGraph, deltaGraph, deltaGraph);
  //p_graph.line(deltaGraph, p_graph.height - deltaGraph, p_graph.width - deltaGraph, p_graph.height - deltaGraph);

  var divitionY = 5;
  p_graph.fill(color('#D8C3A5'));

  var deltaY = round((p_graph.height - 2 * deltaGraph) / divitionY);
  var divitionX = dataValues[0].length;

  var deltaX = round((p_graph.width - 2 * deltaGraph) / divitionX);

  for (var i = 0; i < divitionY; i++) {
  
    var currentHeight = deltaY * i + deltaY;
    p_graph.stroke(color('#E85A4F'));
    p_graph.strokeWeight(0.5);
    p_graph.line(deltaGraph, p_graph.height - deltaGraph - currentHeight, p_graph.width - deltaGraph, p_graph.height - deltaGraph - currentHeight);
    p_graph.stroke(color('#D8C3A5'));
    p_graph.textAlign(RIGHT, CENTER);
    var textY = str((5 - i));
    p_graph.noStroke();
    p_graph.fill(color('#D8C3A5'));
    p_graph.text(textY + ' º', deltaGraph - 15, p_graph.height - deltaGraph - currentHeight);
  
    for (var j = 0; j < dataValues[0].length; j++) {
      var currentWidth = deltaX * j + deltaX / 2;
      var currentHeightAnimation = animate('animation_circle_' + str(i) + str(j) + name, dataValuesTMP[i][j]* (p_graph.height - 2*deltaGraph)/100);
      var circleColorAlpha = dataValuesTMP[i][j]/100;
      var circleColor = graphsColors[j];
      circleColor.setAlpha(circleColorAlpha*255);
      p_graph.fill(circleColor);
      p_graph.ellipse(deltaGraph + currentWidth, p_graph.height - deltaGraph - currentHeight, currentHeightAnimation, currentHeightAnimation);
    }
  
  
  }




  for (var i = 0; i < divitionX; i++) {
    var currentWidth = deltaX * i + deltaX / 2;
    //p_graph.line(deltaGraph + currentWidth, p_graph.height - deltaGraph, deltaGraph + currentWidth, p_graph.height - deltaGraph + 5);
    p_graph.textAlign(CENTER, TOP);
    var correctionString = 1;
    p_graph.noStroke();
    var currentIntString = i + correctionString;
    var textX = str(currentIntString);
    var circleColor = graphsColors[i];
    circleColor.setAlpha(255);
    p_graph.fill(circleColor);
    //p_graph.text(textX, deltaGraph + currentWidth, p_graph.height - 2*deltaGraph);
    p_graph.text(graphsText[i], deltaGraph + currentWidth, p_graph.height - 2*deltaGraph + 15*(i+1));
  }


  





  p_graph.fill(color('#E98074'));

  position_x = 0;
  position_y = 0;

  if(answer_x < 0){
    position_x = -200;
    position_y = -200;
  }else{
    // AQUI CALCULOS CON
    // Q1_answer Q2_answer Q3_answer Q4_answer Q5_answer
    delta_answer = round((p_graph.width - 2 * deltaGraph) / dataValues.length);
    //position_x = deltaGraph + (answer_x * delta_answer) - (delta_answer*0.5);
    //position_y = (p_graph.height - 2*deltaGraph);
    // REMPLAZAR POR EL API DEL MODELO
    position_x = ((p_graph.width)*(Q1_answer + Q2_answer + Q3_answer + Q4_answer + Q5_answer)/20);
    position_y = ((p_graph.width)*(0.3*Q1_answer + 1.4*Q2_answer + 0.7*Q3_answer + 1.6*Q4_answer + 0.1*Q5_answer)/20);
  }


  var position = animate('myAnimation'+name, position_x);
  p_graph.ellipse(position, position_y, 30,30);
  p_graph.text('TU ESTÁS AQUÍ', position, position_y + 20);



  p_graph.fill(color('#8E8D8A'));
  p_graph.text(text_response, p_graph.width/2, p_graph.height/2);


  return p_graph;
}




