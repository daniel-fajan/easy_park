int trigPin = 8; 
int echoPin = 9; 
long duracao, cm;

int greenPin = 12;
int redPin = 13;
 
void setup() {
  Serial.begin (9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  pinMode(greenPin, OUTPUT);
  pinMode(redPin, OUTPUT);
}
 
void loop() {
  
  digitalWrite(trigPin, LOW);
  delayMicroseconds(10);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
 
  duracao = pulseIn(echoPin, HIGH);
 
  cm = (duracao/2) / 29.1;     

  if(cm <= 5){
    Serial.println("A VAGA ESTA OCUPADA");
    digitalWrite(redPin, HIGH);
    digitalWrite(greenPin, LOW);
    delay(50);
  }
  
  else{
    Serial.println("A VAGA ESTÁ LIVRE");
    digitalWrite(redPin, LOW);
    digitalWrite(greenPin, HIGH);
    delay(50);
  }
  delay(25);
  
}
