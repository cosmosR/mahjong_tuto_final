const pages = document.querySelectorAll(".page");
const translateAmount = 100;
let translate = 0;

slide = (direction) => {
  direction === "next" ? (translate -= translateAmount) : (translate += translateAmount);

  pages.forEach((page) => {
    page.style.transform = `translateX(${translate}%)`;
  });
};


function goToHomePage() {
  window.location.reload(); // 현재 페이지를 다시 로드합니다
}