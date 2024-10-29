// 문자열에서 숫자만 추출해주는 함수
function getOnlyNum(string) {
    let num_of_str = string.replace(/[^0-9]/g, '');
    str = parseInt(num_of_str);
    return num_of_str;
}
// 몬스터볼 누르면 번호에 맞는 조원 정보 창 등장
let ballNum_check;

$('.ball').on('click', function () {
    ballNum_check = $(this).attr("class")
    ballNum_check = getOnlyNum(ballNum_check);

    // 몬스터볼 번호에 맞는 정보 창 열림
    $(`#intro${ballNum_check}`).css('display', 'block');

    // 놓아준다 누르면 조원 정보 창 닫힘
    $('.closeIntro').on('click', function () {
        $(`#intro${ballNum_check}`).css('display', 'none');
    });

    // 자세히 본다 클릭 시 모달창 등장
    document.querySelector('.showDetail').addEventListener('click', function () {
        $(`#detail${ballNum_check}`).css('display', 'block');
    });

    // 닫기 누르면 모달창 꺼짐
    document.querySelector('.closeDetail').addEventListener('click', function () {
        $(`#detail${ballNum_check}`).css('display', 'none');
    });
});



// 먹이를 준다 클릭 시 포켓몬 이미지 회전
// 모달에선 작동 안함... 아마 회전할 공간이 모자라서 그런 듯...?
let feedClickCount = 0;
document.querySelector('.feed').addEventListener('click', function () {
    feedClickCount += 1;
    $('.pokemonImg').css('transition', `rotate(${feedClickCount * 60}deg) 0.5s`);
    if (feedClickCount === 6) {
        feedClickCount = 0;
    }
});


