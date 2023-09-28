import inquirer from "inquirer";
interface std{
    name:string,
    rollno:number
};
let studentArry:std[]=[]

function addStudent(_name:string,_rollno:number):std{
    const stud:std={
        name:_name,
        rollno:_rollno
    }
    studentArry.push(stud)
    return stud
}


async function add(){
        
let n:boolean=true;
while (n==true){
    let ans = await inquirer.prompt([{
        type:'list',
        name:'addOrNo',
        message:'Want to add student?',
        choices:['Yes','No']
    }
]
)
if(ans.addOrNo==="No"){
    n=false}
    else {

        let add=await inquirer.prompt(
            [
                {
            type:'input',
            name:'stdName',
            message:'Write student name',
        
                },
                {
                    type:'number',
                    name:'stdRoll',
                    message:'Write student RollNo',
                    validate: (input) => {
                        const numberInput = Number(input);

                        if (isNaN(numberInput) || !Number.isInteger(numberInput)) {
                            return 'Please enter a valid integer for RollNo.';
                        }

                        return true;
                }
            }
            ]
        )
        addStudent(add.stdName,Number(add.stdRoll))
    }
    console.log("All students",studentArry);
}
}
add();


