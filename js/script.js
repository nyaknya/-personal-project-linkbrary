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
const $passwordConfirmInput = document.querySelector("#passwordConfirm");
const $passwordToggle = document.querySelector(".password-area img");
const $passwordConfirmToggle = document.querySelector(
  ".password-confirm-area img"
);
const $signUpButton = document.querySelector(".sign-up-page form button");

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

// 비밀번호 보이기/끄기 토글
function passwordVisibleToggle(input, toggle) {
  const isPasswordVisible = input.getAttribute("type") === "text";
  input.setAttribute("type", isPasswordVisible ? "password" : "text");
  toggle.setAttribute(
    "src",
    isPasswordVisible ? "/images/eye_on.svg" : "/images/eye_off.svg"
  );
}

function validateEmail(input) {
  let isValid = true;

  if (input.value.trim() === "") {
    addErrorMessage(input, "이메일을 입력해주세요.");
    input.classList.add("input-error");
    isValid = false;
  } else if (!EMAIL_PATTERN.test(input.value)) {
    addErrorMessage(input, "올바른 이메일 주소가 아닙니다.");
    input.classList.add("input-error");
    isValid = false;
  } else {
    removeError(input);
    input.classList.remove("input-error");
  }

  return isValid;
}

function validatePassword(input) {
  let isValid = true;

  if (input.value.trim() === "") {
    addErrorMessage(input, "비밀번호를 입력해주세요.");
    input.classList.add("input-error");
    isValid = false;
  } else if (!PASSWORD_PATTERN.test(input.value)) {
    addErrorMessage(
      input,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    input.classList.add("input-error");
    isValid = false;
  } else {
    removeError(input);
    input.classList.remove("input-error");
  }

  return isValid;
}

function validatePasswordConfirm(passwordInput, passwordConfirmInput) {
  let isValid = true;

  if (passwordConfirmInput.value !== passwordInput.value) {
    addErrorMessage(passwordConfirmInput, "비밀번호가 일치하지 않아요.");
    passwordConfirmInput.classList.add("input-error");
    isValid = false;
  } else {
    removeError(passwordConfirmInput);
    passwordConfirmInput.classList.remove("input-error");
  }

  return isValid;
}

/* ---이벤트 분리---  */

// 공통 이메일 로직
$emailInput.addEventListener("focusout", function () {
  validateEmail(this);
});

// 회원가입 이메일
$signUpEmailInput &&
  $signUpEmailInput.addEventListener("focusout", function () {
    validateEmail(this);
  });

// 비밀번호 유효성 검사
$passwordInput.addEventListener("focusout", function () {
  validatePassword(this);
});

// 비밀번호 확인
$passwordConfirmInput &&
  $passwordConfirmInput.addEventListener("focusout", function () {
    validatePasswordConfirm($passwordInput, this);
  });

// 비밀번호 보이기/끄기 토글 이벤트
$passwordToggle.addEventListener("click", function () {
  passwordVisibleToggle($passwordInput, $passwordToggle);
});

$passwordConfirmInput &&
  $passwordConfirmToggle.addEventListener("click", function () {
    passwordVisibleToggle($passwordConfirmInput, $passwordConfirmToggle);
  });

$signUpButton.addEventListener("click", function (e) {
  e.preventDefault(); // 폼 제출 방지

  let isFormValid = true;

  // 이메일 유효성 검사
  if ($signUpEmailInput) {
    isFormValid &= validateEmail($signUpEmailInput);
  }

  // 비밀번호 유효성 검사
  isFormValid &= validatePassword($passwordInput);

  // 비밀번호 확인 검사
  if ($passwordConfirmInput) {
    isFormValid &= validatePasswordConfirm(
      $passwordInput,
      $passwordConfirmInput
    );
  }

  // 전체 폼이 유효한 경우 제출
  if (isFormValid) {
    alert("회원가입 성공!");
  } else {
    alert("올바른 회원가입 시도가 아닙니다.");
  }
});
