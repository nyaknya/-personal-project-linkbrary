// 유저
const USER = {
  id: "test@codeit.com",
  password: "codeit101",
};

// 유효성
const EMAIL_PATTERN = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
const PASSWORD_PATTERN = /(?=.*[0-9])(?=.*[A-Za-z])^.{8,}$/;

// 요소
const $emailInput = document.querySelector("#email");
const $passwordInput = document.querySelector("#password");
const $signUpEmailInput = document.querySelector(".sign-up-page #email");
const $signInEmailInput = document.querySelector(".sign-in-page #email");

/* -------- */

// 에러 메시지 생성
function createErrorMessage(text) {
  const errorMessage = document.createElement("span");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = text;
  return errorMessage;
}

// 에러 메시지 요소 뒤에 추가
function addErrorMessage(element, text) {
  let errorMessage = element.parentNode.querySelector(".error-message");

  if (!errorMessage) {
    element.insertAdjacentElement("afterend", createErrorMessage(text));
  } else {
    errorMessage.textContent = text;
  }
}

// 오류 해제
function removeError(element) {
  let errorMessage = element.parentNode.querySelector(".error-message");
  if (errorMessage) {
    errorMessage.remove();
  }
  element.classList.remove("input-error");
}

// 공통 이메일 로직
$emailInput.addEventListener("focusout", function () {
  if (this.value.trim() === "") {
    addErrorMessage(this, "이메일을 입력해주세요.");
    this.classList.add("input-error");
  } else if (!EMAIL_PATTERN.test(this.value)) {
    addErrorMessage(this, "올바른 이메일 주소가 아닙니다.");
    this.classList.add("input-error");
  } else {
    removeError(this);
  }
});

// 회원가입 이메일
$signUpEmailInput &&
  $signUpEmailInput.addEventListener("focusout", function () {
    if (this.value === USER.id) {
      addErrorMessage(this, "이미 사용 중인 이메일입니다.");
      this.classList.add("input-error");
    }
  });

// 공통 비밀번호 로직
$passwordInput.addEventListener("focusout", function () {
  if (this.value.trim() === "") {
    addErrorMessage(this, "비밀번호를 입력해주세요.");
    this.classList.add("input-error");
  } else if (!PASSWORD_PATTERN.test(this.value)) {
    addErrorMessage(this, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    this.classList.add("input-error");
  } else {
    removeError(this);
  }
});
