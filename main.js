student=[];

function submit()
{
var name1=document.getElementById("student1").value;   
var name2=document.getElementById("student2").value;
var name3=document.getElementById("student3").value;

student.push(name1);
student.push(name2);
student.push(name3);

console.log(student);


}