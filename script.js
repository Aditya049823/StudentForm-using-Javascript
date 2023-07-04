let students=[];
let id=1;
function addStudent(event){
    event.preventDefault();

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let gpa=document.getElementById("gpa").value;
    let age=document.getElementById("age").value;
    let degree=document.getElementById("degree").value;

    let student={
        id:id++,
        name:name,
        email:email,
        gpa:gpa,
        age:age,
        degree:degree
    };
        students.push(student);

    renderTable();
    document.getElementById("myForm").reset();
}
let tableContainer = document.getElementById("table-container");

let table = tableContainer.querySelector("table");

let tbody = table.querySelector("tbody");

function renderTable(){
    tbody.innerHTML = '';

    students.forEach(function(student) {
        let row = document.createElement("tr");

      // Create the table cells
      let idCell = document.createElement("td");
      idCell.textContent = student.id;
      row.appendChild(idCell);

      let nameCell = document.createElement("td");
      nameCell.textContent = student.name;
      row.appendChild(nameCell);

      let emailCell = document.createElement("td");
      emailCell.textContent = student.email;
      row.appendChild(emailCell);

      let ageCell = document.createElement("td");
      ageCell.textContent = student.age;
      row.appendChild(ageCell);

      let gpaCell = document.createElement("td");
      gpaCell.textContent = student.gpa;
      row.appendChild(gpaCell);

      let degreeCell = document.createElement("td");
      degreeCell.className="modify";
      degreeCell.textContent = student.degree;
      let edit=document.createElement("img");
      edit.src="./images/edit 1.png";
      edit.width=18;
      edit.addEventListener('click',function(){
        editStudent(student.id);
      });
      let deleteEntry=document.createElement("img");
      deleteEntry.src="./images/trash-2 1.png";
      deleteEntry.width=18;
      deleteEntry.addEventListener('click',function(){
        deleteStudent(student.id);
      });
      degreeCell.appendChild(edit);
      degreeCell.appendChild(deleteEntry);
      row.appendChild(degreeCell);



      tbody.appendChild(row);
    });
}

document.querySelector(".form").addEventListener("submit",addStudent);

document.querySelector(".search").addEventListener("keyup",function(event1){
    let searchInput = event1.target.value.toLowerCase();
    
    if(students.length==0)
    {
        return;
    }

    let filteredStudents = students.filter(function(student) {
    return (
      student.name.toLowerCase().includes(searchInput) ||
      student.email.toLowerCase().includes(searchInput) ||
      student.degree.toLowerCase().includes(searchInput)
    );
  });

  tbody.innerHTML = '';
  filteredStudents.forEach(function(student) {
    let row = document.createElement("tr");
    let idCell = document.createElement("td");
    idCell.textContent = student.id;
    row.appendChild(idCell);

    let nameCell = document.createElement("td");
    nameCell.textContent = student.name;
    row.appendChild(nameCell);

    let emailCell = document.createElement("td");
    emailCell.textContent = student.email;
    row.appendChild(emailCell);

    let ageCell = document.createElement("td");
    ageCell.textContent = student.age;
    row.appendChild(ageCell);

    let gpaCell = document.createElement("td");
    gpaCell.textContent = student.gpa;
    row.appendChild(gpaCell);

    let degreeCell = document.createElement("td");
    degreeCell.textContent = student.degree;
    let edit = document.createElement("img");
    edit.src = "./images/edit 1.png";
    edit.width = 18;
    edit.addEventListener('click', function() {
      editStudent(student.id);
    });
    let deleteEntry = document.createElement("img");
    deleteEntry.src = "./images/trash-2 1.png";
    deleteEntry.width = 18;
    deleteEntry.addEventListener('click', function() {
      deleteStudent(student.id);
    });
    degreeCell.appendChild(edit);
    degreeCell.appendChild(deleteEntry);
    row.appendChild(degreeCell);

    tbody.appendChild(row);
  });

  if (searchInput === '') {
    renderTable();
  }
});

function deleteStudent(id) {
    students = students.filter(function(student) {
      return student.id !== id;
    });
  
    renderTable();
}

function editStudent(id) {
    let student = students.find(function(student) {
      return student.id === id;
    });
    if(student){
    document.getElementById("name").value = student.name;
    document.getElementById("email").value = student.email;
    document.getElementById("gpa").value = student.gpa;
    document.getElementById("age").value = student.age;
    document.getElementById("degree").value = student.degree;
    }
    renderTable();
    let text="Edit Student";
    const button=document.getElementById("btn");
    button.innerText=text;

    const buttonDiv = document.getElementById("sub");
    if (buttonDiv) {
        buttonDiv.innerHTML = '';
        buttonDiv.append(button);
  }
}