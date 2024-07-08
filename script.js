// 번호 추첨기 함수
function generateLottoNumbers() {
    let numbers = [];

    // 1부터 45까지의 번호를 무작위로 추출
    while (numbers.length < 6) {
        let randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    // 추첨된 번호를 정렬
    numbers.sort((a, b) => a - b);

    return numbers;
}

// 번호를 화면에 표시하는 함수
function displayNumbers(numbers) {
    let numbersDiv = document.getElementById('numbers');
    numbersDiv.innerHTML = ''; // 이전의 번호들을 지우기

    // 추첨된 번호들을 하나씩 div에 추가
    numbers.forEach(number => {
        let numberDiv = document.createElement('div');
        numberDiv.textContent = number;
        numberDiv.classList.add('number', 'bg-gray-200', 'rounded-md', 'text-center', 'p-2', 'm-1', 'text-lg', 'font-semibold');
        numbersDiv.appendChild(numberDiv);
    });
}

// 번호 추첨하기 버튼에 클릭 이벤트 추가
document.getElementById('generate-btn').addEventListener('click', function() {
    let lottoNumbers = generateLottoNumbers();
    displayNumbers(lottoNumbers);

    // SweetAlert2로 메시지 출력
    Swal.fire({
        icon: 'success',
        title: '추첨 완료!',
        html: '로또 번호가 성공적으로 추첨되었습니다.',
        confirmButtonText: '확인'
    });
});
