// 유저
const USER = {
  email: "test@codeit.com",
  password: "sprint101",
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
const $signInButton = document.querySelector(".sign-in-page form button");

/* -------- */

// 에러 메시지 생성
function createErrorMessage(text) {
  const errorMessage = document.createElement("span");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = text;
  return errorMessage;
}

// 에러 메시지 표시
function showError(element, text) {
  let errorMessage = element.parentNode.querySelector(".error-message");

  if (!errorMessage) {
    element.insertAdjacentElement("afterend", createErrorMessage(text));
  } else {
    errorMessage.textContent = text;
  }
  element.classList.add("input-error");
}

// 에러 메시지 제거
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

// 이메일 유효성 검사
function validateEmail(input) {
  let isValid = true;

  if (input.value.trim() === "") {
    showError(input, "이메일을 입력해주세요.");
    isValid = false;
  } else if (!EMAIL_PATTERN.test(input.value)) {
    showError(input, "올바른 이메일 주소가 아닙니다.");
    isValid = false;
  } else {
    removeError(input);
  }

  return isValid;
}

// 비밀번호 유효성 검사
function validatePassword(input) {
  let isValid = true;

  if (input.value.trim() === "") {
    showError(input, "비밀번호를 입력해주세요.");
    isValid = false;
  } else if (!PASSWORD_PATTERN.test(input.value)) {
    showError(input, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    isValid = false;
  } else {
    removeError(input);
  }

  return isValid;
}

// 비밀번호 확인 유효성 검사
function validatePasswordConfirm(passwordInput, passwordConfirmInput) {
  let isValid = true;

  if (passwordConfirmInput.value !== passwordInput.value) {
    showError(passwordConfirmInput, "비밀번호가 일치하지 않아요.");
    isValid = false;
  } else {
    removeError(passwordConfirmInput);
  }

  return isValid;
}

// (회원가입) 이메일 중복 유효성 검사
async function validateEmailOverlap(input) {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: input.value,
        }),
      }
    );

    // 상태 코드로 응답 처리
    if (response.status === 200) {
      console.log("이메일 사용 가능");
      removeError(input); // 이메일 사용 가능 시 에러 제거
    } else if (response.status >= 400 && response.status < 500) {
      console.error("중복된 이메일입니다.");
      showError(input, "중복된 이메일입니다."); // 중복된 이메일 처리
    } else {
      console.error("알 수 없는 서버 오류");
      showError(input, "이메일 중복 여부 확인 중 오류가 발생했습니다.");
    }
  } catch (error) {
    console.error("네트워크 또는 서버 오류:", error);
    showError(input, "네트워크 오류가 발생했습니다. 다시 시도해 주세요.");
  }
}

// 로그인 유효성 검사
async function validateLogin(emailInput, passwordInput) {
  if (!validateEmail(emailInput) || !validatePassword(passwordInput)) {
    return false;
  }

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    });

    const data = await response.json();
    const accessToken = await data.data.accessToken;

    if (response.ok) {
      console.log("로그인 성공:", data);
      localStorage.setItem("loginAccessToken", accessToken);
      return true;
    } else {
      console.error("로그인 실패:", data.error?.message || "알 수 없는 오류");
      return false;
    }
  } catch (error) {
    console.error("네트워크 또는 서버 오류:", error);
    return false;
  }
}

/* ---이벤트 분리---  */

$emailInput &&
  $emailInput.addEventListener("focusout", function () {
    validateEmail(this);
  });

$signUpEmailInput &&
  $signUpEmailInput.addEventListener("focusout", async function () {
    const isEmailValid = await validateEmail(this);
    if (isEmailValid === true) {
      await validateEmailOverlap(this);
    }
  });

$passwordInput &&
  $passwordInput.addEventListener("focusout", function () {
    validatePassword(this);
  });

$passwordConfirmInput &&
  $passwordConfirmInput.addEventListener("focusout", function () {
    validatePasswordConfirm($passwordInput, this);
  });

// 비밀번호 보이기/끄기 토글 이벤트
$passwordToggle &&
  $passwordToggle.addEventListener("click", function () {
    passwordVisibleToggle($passwordInput, $passwordToggle);
  });

$passwordConfirmToggle &&
  $passwordConfirmToggle.addEventListener("click", function () {
    passwordVisibleToggle($passwordConfirmInput, $passwordConfirmToggle);
  });

// 회원가입 버튼 클릭 이벤트
$signUpButton &&
  $signUpButton.addEventListener("click", function (e) {
    e.preventDefault();

    let isFormValid = true;

    if ($signUpEmailInput && !validateEmail($signUpEmailInput)) {
      isFormValid = false;
    }

    if (!validatePassword($passwordInput)) {
      isFormValid = false;
    }

    if (
      $passwordConfirmInput &&
      !validatePasswordConfirm($passwordInput, $passwordConfirmInput)
    ) {
      isFormValid = false;
    }

    if (isFormValid) {
      alert("회원가입 성공!");
      window.location.href = "/folder";
    } else {
      alert("올바른 회원가입 시도가 아닙니다.");
    }
  });

// 로그인 버튼 클릭 이벤트
$signInButton &&
  $signInButton.addEventListener("click", async function (e) {
    e.preventDefault();

    let isFormValid = await validateLogin($signInEmailInput, $passwordInput);

    if (isFormValid) {
      alert("로그인 성공!");
      window.location.href = "/folder";
    } else {
      alert("올바른 로그인 시도가 아닙니다.");
    }
  });
