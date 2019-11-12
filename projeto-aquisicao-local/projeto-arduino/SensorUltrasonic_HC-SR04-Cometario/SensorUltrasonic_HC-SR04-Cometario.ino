int trigPin = 8;  // Criando uma variável auxiliar do tipo int/interio para Trigger/Gatilho e atribuindo o valor 0, que conecta ao pino 0 
int echoPin = 9;  // Criando uma variável auxiliar do tipo int/interio para Echo/Eco e atribuindo o valor 0, que conecta ao pino 0 
long duracao, cm; // Criando uma variável auxiliar do tipo long, que são variáveis de tamanho extendido. 
// duracao economiza o tempo entre a emissão e a recepção do sinal. A  variável cm salvará a distância em centímetros
 
int greenPin = 12; // Criando uma variável auxiliar do tipo inteiro para o led verde
int redPin = 13; // Criando uma variável auxiliar do tipo inteiro para o led vermelho

void setup() {
  Serial.begin (9600);// Inicia a porta serial, configura a taxa de dados para 9600 bps(baud rate).
  pinMode(trigPin, OUTPUT);// Configura o trigPin digital como saída
  pinMode(echoPin, INPUT);// Configura o echoPin digital como entrada

  pinMode(greenPin, OUTPUT);// Configura o greenPin digital como saída
  pinMode(redPin, OUTPUT);// Configura o redPin digital como saída
}
 
void loop() {
   
  digitalWrite(trigPin, LOW);//Mandar o pino/trigPin um pulso/valor BAIXO, desativando
  delayMicroseconds(10);//Atraso de 10 microsegundos
  digitalWrite(trigPin, HIGH);//Mandar o pino/trigPin um pulso/valor ALTO, ativando
  delayMicroseconds(10);//Atraso de 10 microsegundos
  digitalWrite(trigPin, LOW);//Mandar o pino/trigPin um pulso/valor BAIXO, desativando
 
  duracao = pulseIn(echoPin, HIGH);//Atribuindo a váriável duracao,o pulseIn que é um método que captura a duração de um pulso HIGH do echoPin
 
  cm = (duracao/2) / 29.1;// Converte o tempo em distância = (tempo de viagem / 2) x velocidade do som (29,1 cm)

  if(cm <= 5){// Testando se a distância é menor e igual que 5cm
    Serial.println("A VAGA ESTA OCUPADA");// Imprime dados na porta serial
    digitalWrite(redPin, HIGH);// Ativando o led vermelho
    digitalWrite(greenPin, LOW);// Desativando o led verde
    delay(50);//Atraso de 10 milisegundos
  }
  else{// Se não a distância for maior que 5cm
    Serial.println("A VAGA ESTÁ LIVRE");// Imprime dados na porta serial
    digitalWrite(redPin, LOW);// Desativando o led vermelho
    digitalWrite(greenPin, HIGH); // Ativando o led verde
    delay(50);//Atraso de 10 milisegundos
  }
   delay(25);//Atraso de 25 milisegundos
  
}
