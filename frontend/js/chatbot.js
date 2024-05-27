document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        {
            question: "Koliko ljudi običajno hraniš z zalogami iz hladilnika?",
            answers: ["Samo sebe", "Dve osebi", "Družino 3-4 osebe", "Družino 5 ali več oseb"]
        },
        {
            question: "Kolikokrat na teden običajno nakupuješ živila?",
            answers: ["Enkrat na teden", "Večkrat na teden", "Na vsakih 14 dni", "Enkrat na mesec"]
        },
        {
            question: "Kateri način shranjevanja živil imaš raje?",
            answers: ["Večinoma sveža živila", "Predpakirana in pripravljena hrana", "Veliko zamrznjenih izdelkov", "Konzervirana hrana in dolgotrajni izdelki"]
        },
        {
            question: "Kakšen pomen daješ energetski učinkovitosti?",
            answers: ["Nizek", "Srednji", "Visok", "Zelo visok"]
        },
        {
            question: "Koliko prostora v kuhinji imaš na voljo za hladilnik?",
            answers: ["Zelo malo prostora", "Omejen prostor", "Prostorna kuhinja", "Prostor ni omejitev"]
        },
        {
            question: "Kakšen je tvoj proračun za nakup hladilnika?",
            answers: ["Do 200€", "200€ - 400€", "400€ - 600€", "Več kot 600€"]
        },
        {
            question: "Kako pogosto kuhaš doma?",
            answers: ["Skoraj nikoli", "Nekajkrat na teden", "Večino dni", "Vsak dan"]
        },
        {
            question: "Kakšen tip hladilnika preferiraš?",
            answers: ["Mini hladilnik", "Standardni hladilnik z zamrzovalnikom zgoraj", "Hladilnik z zamrzovalnikom spodaj", "Ameriški hladilnik z dvojnimi vrati"]
        },
        {
            question: "Ali potrebuješ posebne funkcije, kot so ledomat, hladilnik za vino, ali predal za svežo zelenjavo?",
            answers: ["Ne potrebujem posebnih funkcij", "Samo osnovne funkcije", "Ledomat in hladilnik za vino", "Napredne funkcije za shranjevanje sveže hrane"]
        },
        {
            question: "Kako pomembna je tišina delovanja hladilnika?",
            answers: ["Ni pomembno", "Malo pomembno", "Pomembno", "Zelo pomembno"]
        },
    ];

    let currentQuestion = 0;

    function displayQuestion() {
        const questionContainer = document.getElementById('questionContainer');
        const answerContainer = document.getElementById('answerContainer');

        questionContainer.textContent = questions[currentQuestion].question;
        answerContainer.innerHTML = ''; 

        questions[currentQuestion].answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.onclick = () => handleAnswer(answer);
            answerContainer.appendChild(button);
        });
    }

    function handleAnswer(answer) {
        console.log("Izbran odgovor: ", answer); 
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            displayQuestion();
        } else {
            questionContainer.textContent = "Hvala za vaše odgovore!";
            answerContainer.innerHTML = ''; 
        }
    }

    displayQuestion();
});