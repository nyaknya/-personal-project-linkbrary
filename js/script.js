// 유저 정보
const USER = {
  email: "test@codeit.com",
  password: "sprint101",
};

// 유효성 검사 패턴
const EMAIL_PATTERN = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
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

// 유틸리티 함수: 에러 메시지 처리
function createErrorMessage(text) {
  const errorMessage = document.createElement("span");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = text;
  return errorMessage;
}

function showError(element, text) {
  let errorMessage = element.parentNode.querySelector(".error-message");
  if (!errorMessage) {
    element.insertAdjacentElement("afterend", createErrorMessage(text));
  } else {
    errorMessage.textContent = text;
  }
  element.classList.add("input-error");
}

function removeError(element) {
  const errorMessage = element.parentNode.querySelector(".error-message");
  if (errorMessage) errorMessage.remove();
  element.classList.remove("input-error");
}

// 유틸리티 함수: API 요청
async function apiRequest(url, method, body) {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    if (!response.ok) {
      console.error(data.error?.message || "알 수 없는 오류");
      return null;
    }
    return data;
  } catch (error) {
    console.error("네트워크 또는 서버 오류:", error);
    return null;
  }
}

// 유효성 검사 함수
function validateInput(input, pattern, errorMessage) {
  if (input.value.trim() === "") {
    showError(input, `${errorMessage}을(를) 입력해주세요.`);
    return false;
  } else if (!pattern.test(input.value)) {
    showError(input, `올바른 ${errorMessage}이 아닙니다.`);
    return false;
  } else {
    removeError(input);
    return true;
  }
}

function validateEmail(input) {
  return validateInput(input, EMAIL_PATTERN, "이메일");
}

function validatePassword(input) {
  return validateInput(input, PASSWORD_PATTERN, "비밀번호");
}

function validatePasswordConfirm(passwordInput, passwordConfirmInput) {
  if (passwordConfirmInput.value !== passwordInput.value) {
    showError(passwordConfirmInput, "비밀번호가 일치하지 않습니다.");
    return false;
  } else {
    removeError(passwordConfirmInput);
    return true;
  }
}

// 이메일 중복 확인
async function validateEmailOverlap(input) {
  const data = await apiRequest(
    "https://bootcamp-api.codeit.kr/api/check-email",
    "POST",
    {
      email: input.value,
    }
  );

  if (data && data.exists) {
    showError(input, "중복된 이메일입니다.");
    return false;
  } else {
    removeError(input);
    return true;
  }
}

// 로그인 처리
async function validateLogin(emailInput, passwordInput) {
  if (!validateEmail(emailInput) || !validatePassword(passwordInput))
    return false;

  const data = await apiRequest(
    "https://bootcamp-api.codeit.kr/api/sign-in",
    "POST",
    {
      email: emailInput.value,
      password: passwordInput.value,
    }
  );

  if (data) {
    localStorage.setItem("accessToken", data.data.accessToken);
    return true;
  }
  return false;
}

// 이벤트 핸들러
function addEventListeners() {
  $emailInput?.addEventListener("focusout", () => validateEmail($emailInput));
  $signUpEmailInput?.addEventListener("focusout", async () => {
    if (validateEmail($signUpEmailInput)) {
      await validateEmailOverlap($signUpEmailInput);
    }
  });
  $passwordInput?.addEventListener("focusout", () =>
    validatePassword($passwordInput)
  );
  $passwordConfirmInput?.addEventListener("focusout", () =>
    validatePasswordConfirm($passwordInput, $passwordConfirmInput)
  );

  $passwordToggle?.addEventListener("click", () =>
    passwordVisibleToggle($passwordInput, $passwordToggle)
  );
  $passwordConfirmToggle?.addEventListener("click", () =>
    passwordVisibleToggle($passwordConfirmInput, $passwordConfirmToggle)
  );

  // 회원가입
  $signUpButton?.addEventListener("click", async (e) => {
    e.preventDefault();
    let isFormValid =
      validateEmail($signUpEmailInput) &&
      validatePassword($passwordInput) &&
      validatePasswordConfirm($passwordInput, $passwordConfirmInput);

    if (isFormValid) {
      const data = await apiRequest(
        "https://bootcamp-api.codeit.kr/api/sign-up",
        "POST",
        {
          email: $signUpEmailInput.value,
          password: $passwordInput.value,
        }
      );

      if (data) {
        localStorage.setItem("accessToken", data.data.accessToken);
        window.location.href = "/folder";
      }
    } else {
      alert("올바른 회원가입 시도가 아닙니다.");
    }
  });

  // 로그인
  $signInButton?.addEventListener("click", async (e) => {
    e.preventDefault();
    const isFormValid = await validateLogin($signInEmailInput, $passwordInput);

    if (isFormValid) {
      alert("로그인 성공!");
      window.location.href = "/folder";
    } else {
      alert("올바른 로그인 시도가 아닙니다.");
    }
  });
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

// 이벤트 리스너 추가
addEventListeners();
