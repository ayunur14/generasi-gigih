const students = [
    { name: "Anisa", age: 20 },
    { name: "Bob", age: 21 },
    { name: "Josua", age: 20}
];

const render = () => {
    students.forEach(({name, age}) => {
        const table = document
        .getElementById("isi")
        .getElementsByTagName("tbody")[0];

        table.insertRow().innerHTML = `<td>${name}</td><td>${age}</td>`
    });
}
render();

function avg(students){
    const rata = students.reduce((acc, student) => acc + student.age, 0);
    return rata / students.length;
}

// function umur(){
//     document.getElementById("umur").innerHTML = avg(students);
// }

function pertama() {
    return new Promise(() => {
      console.log("Mulai menghitung");
      setTimeout(() => {
        console.log("kedua");
        ketiga();
      }, 2000);
    });
  }
  
  function ketiga() {
    return new Promise(() => {
      console.log("ketiga mulai");
      setTimeout(() => {
        console.log("ketiga selesai");
      }, 3000);
    });
  }
  
  function keempat() {
    return new Promise(() => {
      setTimeout(() => {
        console.log(`umurnya ${avg(students)}`);
        document.getElementById("umur").innerHTML = avg(students);
      }, 5000);
    });
  }
  
  async function memanggil() {
    pertama();
    await keempat();
  }