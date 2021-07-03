import { LightningElement } from 'lwc';

export default class Quiz extends LightningElement {
    // Questions list
    questions = [
        {
            id:"Q-1",
            question:"What page do you access to uninstall an application?",
            options:[{label:"Basic Updates",value:"a"},{label:"Introduced Packages",value:"b"},{label:"Capacity Usages",value:"c"}],
            correctAnswer:"b"
        },
        {
            id:"Q-2",
            question:"What does HTML stand for?",
            options:[{label:"Hyper Text Markup Language",value:"a"},{label:"Home Tool Markup Language",value:"b"},{label:"Hyperlinks and Text Markup Language",value:"c"}],
            correctAnswer:"a"
        },
        {
            id:"Q-3",
            question:"Who is making the Web standards?",
            options:[{label:"Mozilla",value:"a"},{label:"Google",value:"b"},{label:"The World Wide Web Consortium",value:"c"}],
            correctAnswer:"c"
        }
    ]

    selected = {}
    submitted = false

    //calculates correct answers

    get correctAnswers(){
        let count = 0;
        if(Object.keys(this.selected).length != 0){
            let correct = this.questions.filter(element => this.selected[element.id] == element.correctAnswer);
            count = Object.keys(correct).length;
        }
        return count;
    }

    //calculates total answers
    get totalAnswers(){
        return Object.keys(this.questions).length;
    }

    // records input
    changeHandler(event){
        let {name, value} = event.target;
        this.selected = {...this.selected,[name]:value};
    }

    // checks if all questions are answered or not
    get allSelected(){
        return !(Object.keys(this.selected).length === Object.keys(this.questions).length);
    }

    //submits the answers selected by user
    submitHandler(event){
        event.preventDefault();
        this.submitted = true;
    }

    // resets every input and data
    resetHandler(event){
        this.submitted = false;
        this.selected = {};
        this.template.querySelector('form').reset();
    }
}