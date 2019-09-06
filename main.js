function DomainNameGenerator(){
var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var domain="";

var i;
var j;
var k;

for (i = 0; i < pronoun.length; i++) {
  	for(j = 0; j < adj.length ; j++){
          for(k = 0 ; k < noun.length; k++){
         domain += pronoun[i]+adj[j]+noun[k]+".com"+"<br>"; }
    }
}
document.getElementById("demo").innerHTML = domain;
}
DomainNameGenerator();
