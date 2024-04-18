interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Pearl',
    lastName: 'Ekwere',
    age: 22,
    location: 'Calabar'
}

const student2: Student = {
    firstName: 'Peace',
    lastName: 'John',
    age: 20,
    location: 'Ikwerre'
}

const studentList: Student[] = [student1, student2];

const table = document.createElement('table');
const body = document.createElement('body');

studentList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    body.appendChild(row);
});

table.appendChild(body);
document.body.appendChild(table);