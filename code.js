const min = 1000;
const max = 1500;
const consulting_room = ['Consultorio 1','Consultorio 2','Consultorio 3','Consultorio 4'];
const  pacientes = {paciente1:'María Cano', paciente2: 'Camilo Antonio', paciente3: 'Juana Camargo', paciente4: 'Miguel Moreno'};
const diagnostico = {diagnostico1: 'Lumbalgia', diagnostico2: 'Gastroenteritis', diagnostico3: 'Urolitiasis', diagnostico4: 'Cefalea'};

function randomTime (min, max)
{
  return Math.floor(Math.random()*(max - min)) + min;
}

var orders = (time, patient, room, diagnostico) =>
{
  document.write(`<br> Consultorio: ${room}; <br>Paciente ${patient} <br>Tiempo de Consulta: ${time / 100} <br>Diagnostico: ${diagnostico} <br>`);
  return new Promise((resolve, reject) =>{
    setTimeout(() => 
    {
      resolve(`<br>Paciente atendido: ${patient};<br>Consultorio: ${room} <br>Diagnostico: ${diagnostico}`)
      reject(time, patient, room, diagnostico);
    })
  }
  );
}

const doctor1 = () =>
{
  orders (randomTime (min, max), pacientes.paciente1, consulting_room[Math.floor(Math.random()*4)], diagnostico.diagnostico1).then((res) => console.log(res))
};

doctor1();

const doctor2 = () =>
{
  orders (randomTime (min, max), pacientes.paciente2, consulting_room[Math.floor(Math.random()*4)], diagnostico.diagnostico2).then((res) => console.log(res))
};

doctor2();

const doctor3 = () =>
{
  orders (randomTime (min, max), pacientes.paciente3, consulting_room[Math.floor(Math.random()*4)], diagnostico.diagnostico3).then((res) => console.log(res))
};

doctor3();

const doctor4 = () =>
{
  orders (randomTime (min, max), pacientes.paciente4, consulting_room[Math.floor(Math.random()*4)], diagnostico.diagnostico4).then((res) => console.log(res))
};

doctor4();
randomTime();