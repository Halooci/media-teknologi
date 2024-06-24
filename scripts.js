function submitQuiz() {
    const answers = {
        q1: 'b',
        q2: 'b',
        q3: 'b',
        q4: 'b',
        q5: 'c',
        q6: 'b',
        q7: 'b',
        q8: 'd',
        q9: 'b',
        q10: 'd',
        // Tambahkan jawaban lainnya di sini
    };

    let score = 0;
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);

    for (const [key, value] of formData.entries()) {
        if (answers[key] === value) {
            score++;
        }
    }

    const totalQuestions = Object.keys(answers).length;
    const message = `Skor Anda: ${score} dari ${totalQuestions}`;

    // Tampilkan skor dalam bentuk alert
    alert(message);
}
