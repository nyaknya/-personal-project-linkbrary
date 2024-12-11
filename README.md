# ![logo](https://github.com/user-attachments/assets/81cae210-af4d-424a-b3a5-894065c60f54)

나만의 링크를 저장해두고 기록하는 사이트
> API 제공 : 코드잇 (코드잇 스프린트: 프론트엔드 트랙 3기 참여)
```
참여 과정 중 부가 과제물로 내어졌던 프로젝트인데, 당시에는 시간이 없고 벅차 하지 못했던 게 아쉬워 다시 구현해보게 됐습니다.
👍 포기했었던 과제를 다시 도전하며 나 스스로가 코드를 어떤 식으로 짜는지 파악하는 시간이 되어 좋았습니다.
😑 순차적으로 수업을 배우며 구현해나가는 프로젝트라 앞선 코드를 다시 리팩토링 해야하는 경우가 많았는데,중간중간 라이브러리를 잘 활용하지 못했다는 아쉬움이 들었습니다.
🔥 '나중에 리팩토링하자'라는 마음으로 구현에만 급급했었는데, 리팩토링 이란 한꺼번에 하는 것이 아닌 개발 과정에서 꾸준하게 깔끔한 코드를 작성하도록 노력해야 하는 것임을 깨달았습니다. 다음 프로젝트에선 꼭 더욱 신경 써서 작성할 것입니다.
```

## 💻 사용 기술
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/React Hook Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white">
<img src="https://img.shields.io/badge/Zustand-7957D5?style=for-the-badge&logo=zustand&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/Classnames-000000?style=for-the-badge&logo=classnames&logoColor=white">
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">
<img src="https://img.shields.io/badge/React Query Devtools-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">


## ⌛ 개발 기간
`24.08.28 - 24.12.11`

<details>
  <summary>세부 개발 기간</summary>
  <code> 2주차 240828 완료 / 3주차 240829 완료 / 4주차 240901 완료 / 5주차 241020 완료 / 6주차 241025 완료 / 7주차 241102 완료 / 8주차 241104 완료 / 12주차 241104 완료 / 13주차 241203 완료 / 14주차 241206 완료 / 15주차 241207 완료 / 19주차 241210 완료 / 20주차 241211 완료 </code>
</details>

## 📁 폴더구조
```
📦 src
 ┣ 📂components           # 공통 UI 컴포넌트 모음
 ┃ ┣ 📂Common             # 공통적으로 사용하는 컴포넌트 (Button, Header, Footer 등)
 ┃ ┣ 📂Folder             # 폴더 페이지 컴포넌트
 ┃ ┗ 📂Shared             # 폴더 공유 페이지 컴포넌트
 ┣ 📂hooks                # 커스텀 훅 (외부 클릭 감지, 인증 등)
 ┣ 📂pages                # 주요 화면 및 페이지
 ┃ ┣ 📂page               # 페이지명
 ┃ ┣ ┣ 📜index.tsx            
 ┣ 📂store                # 상태 관리 관련 (Zustand 사용)
 ┣ 📂styles               # 전역 및 공통 스타일 파일
 ┃ ┣ 📜globals.scss       # 전역 스타일
 ┃ ┣ 📜_mixins.scss       # SCSS 믹스인
 ┃ ┗ 📜_variables.scss    # SCSS 변수
 ┣ 📂types                # TypeScript 타입 선언
 ┃ ┗ 📜index.d.ts         # 프로젝트 전역 타입 정의
 ┣ 📂utils                # 공통 유틸리티 함수 (API 요청, 시간 처리 등)
 ┗ 📜_app.tsx             
```

## 👓 Priview
![image](https://github.com/user-attachments/assets/2dc8a239-cd88-4c77-86aa-bec3972c9a5c)


## 주차별 요구사항 
<details>
  <summary>1주차</summary>
  <div markdown="1">
    
  - [x]  [기본] PC사이즈만 고려해 주어진 디자인을 구현했나요?
  - [x]  [기본] 랜딩 페이지의 url path는 루트(/)로 설정했나요?
  - [x]  [기본] title은 Linkbrary로 설정했나요?
  - [x]  [기본] 화면의 너비가 1920px 이상이면 하늘색 배경색은 너비를 꽉 채우도록 채워지고, 내부 요소들의 위치는 고정되고, 여백만 커지나요?
  - [x]  [기본] 화면의 너비가 1920px 보다 작아질 때, 'Linkbrary' 로고의 왼쪽 여백 200px과 '로그인' 버튼의 오른쪽 여백 200px이 유지되고, 화면의 너비가 작아질수록 두 요소간 거리가 가까워지도록 했나요?
  - [x]  [기본] Linkbrary 아이콘은 클릭 시 루트 페이지(/)로 이동하나요?
  - [x]  [기본] 클릭으로 기능이 동작해야 하는 경우, 사용자가 클릭할 수 있는 요소임을 알 수 있도록 cursor: pointer를 설정했나요?
  - [x]  [기본] '로그인' 클릭 시 로그인 페이지(/signin)로 이동하나요?
  - [x]  [기본] '링크 추가하기' 클릭 시 회원가입(/signup)으로 이동하나요?
  - [x]  [기본] 화면의 너비가 1920px 이상이면 내부에 있는 요소간 동일한 간격을 유지하며 가운데 정렬이 되나요?
  - [x]  [기본] 화면의 너비가 1920px 보다 작아질 때, 최하단에 있는 'codeit-2023'의 왼쪽 여백 104px과 SNS 아이콘들의 오른쪽 여백 104px을 유지하면서 가운데 있는 'Privacy Policy', 'FAQ' 요소와 각각 동일한 간격을 유지하며 가까워지나요?
  - [x]  [기본] 'Privacy Policy', 'FAQ'는 클릭 시 각각 Privacy 페이지(/privacy), FAQ 페이지(/faq)로 이동하나요?
  - [x]  [기본] 페이스북, 트위터, 유튜브, 인스타그램 아이콘은 클릭 시 각각의 홈페이지로 새로운 창이 열리면서 이동 하나요?
  - [x]  [심화] 사용자의 브라우저 font-size가 크고 작아짐에 따라 페이지의 요소간 간격, 요소의 크기, font-size 등 모든 크기와 관련된 값이 크고 작아지도록 설정했나요?
</details>

<details>
  <summary>2주차</summary>
  <div markdown="1">
    
  - [x]  [랜딩 페이지] 아래로 스크롤 해도 “Linkbrary” 로고와 “로그인” 버튼이 있는 상단 네비게이션 바(Global Navigation Bar)영역이 최상단에 고정되게 했나요?
  - [x]  [로그인 페이지, 회원가입 페이지 공통] Linkbrary 로고 클릭시 루트 페이지(“/”)로 이동하나요?
  - [x]  [로그인 페이지, 회원가입 페이지 공통] 로그인 페이지, 회원가입 페이지 모두 로고 위 상단 여백이 동일한가요?
  - [x]  [로그인 페이지, 회원가입 페이지 공통] input 요소에 focus in 일 때, 테두리 색상이 파랑색인가요?
  - [x]  [로그인 페이지, 회원가입 페이지 공통] input 요소에 focus out 일 때, 테두리 색상이 회색인가요?
  - [x]  [로그인 페이지, 회원가입 페이지 공통] SNS 아이콘들은 클릭시 각각 “https://www.google.com/”, “https://www.kakaocorp.com/page/” 으로 이동하나요?
  - [x]  [로그인 페이지] “회원 가입하기”는 클릭시 “/signup” 페이지로 이동하나요?
  - [x]  [회원가입 페이지] “로그인 하기”는 클릭시 “/signin” 페이지로 이동하나요?
  - [x]  [심화] palette에 있는 color값들을 css 변수로 등록하고 사용했나요?
  - [x]  [심화] 비밀번호 input 요소 위에 비밀번호를 확인할 수 있는 눈 모양 아이콘을 추가했나요?
</details>

<details>
  <summary>3주차</summary>
  <div markdown="1">
    
 - [x]  [기본] 브라우저에 현재 보이는 화면의 영역(viewport) 너비를 기준으로 분기되는 반응형 디자인을 적용했나요?
 - [x]  [랜딩 페이지] 페이스북, 카카오톡, 디스코드, 트위터 등 SNS에서 Linkbrary 랜딩 페이지("/") 공유 시 미리보기를 볼 수 있도록 랜딩 페이지 메타 태그를 설정했나요?
 - [x]  [랜딩 페이지] 미리보기에서 제목은 "Linkbrary", 설명은 "세상의 모든 정보를 쉽게 저장하고 관리해 보세요"로 설정했나요?
 - [x]  [랜딩 페이지] 주소와 이미지는 자유롭게 설정했나요?
 - [x]  [랜딩 페이지] Tablet 사이즈에서 화면의 너비가 1199px 이하로 작아질 때 "Linkbrary" 로고와 "로그인" 버튼 사이의 간격은 변하지 않게 고정값으로 유지하되 좌우 여백이 줄어드나요?
 - [x]  [랜딩 페이지] Tablet 사이즈에서 최소 좌우 여백은 "Linkbrary" 로고의 왼쪽에 여백 32px, "로그인" 버튼 오른쪽 여백 32px을 유지하고"Linkbrary" 로고와 "로그인" 버튼의 간격이 가까워지나요?
 - [x]  [랜딩 페이지] PC, Tablet 사이즈의 이미지 크기는 고정값을 사용했나요?
 - [x]  [랜딩 페이지] Mobile 사이즈의 이미지는 좌우 여백 32px을 제외하고 이미지 영역이 꽉 차나요? (이때 가로가 커지는 비율에 맞춰 세로도 커져야 합니다.)
 - [x]  [랜딩 페이지] Mobile 사이즈 너비가 커지면, "Privacy Policy", "FAQ", "codeit-2023"이 있는 영역과 SNS 아이콘들이 있는 영역의 간격이 커지나요?
 - [x]  [로그인, 회원가입 페이지] Tablet 사이즈에서 디자인은 PC사이즈와 동일한가요?
 - [x]  [로그인, 회원가입 페이지] Mobile 사이즈에서 좌우 여백 32px 제외하고 내부 요소들이 너비를 모두 차지하나요?
 - [x]  [로그인, 회원가입 페이지] Mobile 사이즈에서 내부 요소들의 너비는 기기의 너비가 커지는 만큼 커지지만 400px을 넘지 않나요?
 - [x]  [심화] 랜딩 페이지 Mobile 사이즈에서 제품 소개 영역의 순서를 제목, 설명, 이미지 => 제목, 이미지, 설명 순서로 변경했나요?
</details>

<details>
  <summary>4주차</summary>
  <div markdown="1">

  - [x]  이메일 input에서 focus out 할 때, 값이 없을 경우 input에 빨강색 테두리와 아래에 "이메일을 입력해주세요." 빨강색 에러 메세지가 보이나요?
  - [x]  이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 input에 빨강색 테두리와 아래에 "올바른 이메일 주소가 아닙니다." 빨강색 에러 메세지가 보이나요?
  - [x]  이메일 input에서 focus out 일 때, input 값이 [test@codeit.com](mailto:test@codeit.com) 일 경우 input에 빨강색 테두리와 아래에 "이미 사용 중인 이메일입니다." 빨강색 에러 메세지가 보이나요?
  - [x]  비밀번호 input에서 focus out 할 때, 값이 8자 미만으로 있거나 문자열만 있거나 숫자만 있는 경우, input에 빨강색 테두리와 아래에 "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요." 빨강색 에러 메세지가 보이나요?
  - [x]  비밀번호 input과 비밀번호 확인 input의 값이 다른 경우, 비밀번호 확인 input에 빨강색 테두리와 아래에 "비밀번호가 일치하지 않아요." 빨강색 에러 메세지가 보이나요?
  - [x]  회원가입을 실행할 경우, 문제가 있는 경우 문제가 있는 input에 빨강색 테두리와 에러 메세지가 보이나요?
  - [x]  이외의 유효한 회원가입 시도의 경우, "/folder"로 이동하나요?
  - [x]  이메일: [test@codeit.com](mailto:test@codeit.com), 비밀번호: codeit101 으로 로그인 시도할 경우, "/folder" 페이지로 이동하나요?
  - [x]  비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 "비밀번호를 입력해주세요." 에러 메세지가 보이나요?
  - [x]  이외의 로그인 시도의 경우 이메일, 비밀번호 input에 빨강색 테두리와 각각의 input아래에 "이메일을 확인해주세요.", "비밀번호를 확인해주세요." 빨강색 에러 메세지가 보이나요?
  - [x]  회원가입 버튼 클릭 또는 Enter키 입력으로 회원가입 되나요?
  - [x]  이메일, 비밀번호 input에 에러 관련 디자인을 Components 영역의 에러 케이스로 적용했나요?
  - [x]  눈 모양 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 하나요?
  - [x]  비밀번호의 문자열이 가려질 때는 눈 모양 아이콘에는 사선이 그어져있고, 비밀번호의 문자열이 보일 때는 사선이 없는 눈 모양 아이콘이 보이나요?
  - [x]  로그인, 회원가입 페이지에 공통적으로 사용하는 로직이 있다면, 반복하지 않고 공통된 로직을 모듈로 분리해 사용했나요?
</details>

<details>
  <summary>5주차</summary>
  <div markdown="1">
      
  - [x]  [기본] https://bootcamp-api.codeit.kr/docs 에 명세된 "/api/sign-in"으로 { "email": "[test@codeit.com](mailto:test@codeit.com)", "password": "sprint101" } POST 요청해서 성공 응답을 받고 "/folder"로 이동하나요?
  - [x]  [기본] 이메일 input에서 "[test@codeit.com](mailto:test@codeit.com)"으로 "/api/check-email" 이메일 중복 확인 POST 요청하면 이메일 중복 에러를 확인할 수 있나요?
  - [x]  [기본] 유효한 회원가입 형식의 경우 "/api/sign-up" POST 요청하고 성공 응답을 받으면 "/folder"로 이동하나요?
  - [x]  [심화] 로그인/회원가입시 성공 응답으로 받은 accessToken을 로컬 스토리지에 저장했나요?
  - [x]  [심화] 로그인/회원가입 페이지에 접근시 로컬 스토리지에 accessToken이 있는 경우 "/folder" 페이지로 이동하나요?

</details>

<details>
  <summary>6주차</summary>
  <div markdown="1">
      
  - [x]  상단 네비게이션 바, 푸터가 랜딩 페이지와 동일한 스타일과 규칙으로 만들어졌나요? (week 1 ~ 3 요구사항 참고)
  - [x]  상단 네비게이션 바에 프로필 영역의 데이터는 https://bootcamp-api.codeit.kr/docs 에 명세된 "/api/sample/user"를 활용했나요?
  - [x]  상단 네비게이션 바에 프로필 영역의 데이터가 없는 경우 "로그인" 버튼이 보이도록 만들었나요?
  - [x]  폴더 소유자, 폴더 이름 영역, 링크들에 대한 데이터는 "/api/sample/folder"를 활용했나요?
  - [x]  Static, no image, Hover 상태 디자인을 보여주는 카드 컴포넌트를 만들었나요?
  - [x]  Hover 상태에서 이미지가 기본 크기의 130%로 커지나요?
  - [x]  카드 컴포넌트를 클릭하면 해당 링크로 새로운 창을 띄워서 이동하나요?
  - [x]  Tablet에서 카드 리스트가 화면의 너비 1124px를 기준으로 이상일 때는 3열로 작을 때는 2열로 배치되나요?
  - [x]  Tablet, Mobile에서 좌우 최소 여백은 32px 인가요?
  - [x]  [심화]커스텀 hook을 만들어 활용했나요?

</details>

<details>
  <summary>7주차</summary>
  <div markdown="1">
      
  - [x] 링크 공유 페이지 url path는 '/shared', 폴더 페이지 url path는 '/folder'가 되도록 설정했나요?
  - [x] 폴더 페이지에서 상단 네비게이션 바는 스크롤 시 상단에 고정하지 않고 가려지도록 했나요?
  - [x] 상단 네비게이션 바에 프로필 영역의 데이터는 https://bootcamp-api.codeit.kr/docs 에 명세된 "/api/users/1"을 활용했나요?
  - [x] "전체" 폴더를 선택한 경우 "공유", "이름 변경", "삭제" 버튼들이 보이지 않지만, 다른 폴더를 선택한 경우에는 버튼들이 보이나요?
  - [x] 폴더 목록에 필요한 데이터는 "/api/users/1/folders"를 활용했나요?
  - [x] "전체" 폴더에 필요한 링크들 데이터는 "/api/users/1/links"를 활용하고, 이외의 폴더에 필요한 링크들 데이터는 "/api/users/1/links?folderId={해당 폴더 ID}"를 활용했나요?

</details>

<details>
  <summary>8주차</summary>
  <div markdown="1">

  - [x] 링크를 입력하고 "추가하기" 버튼을 누르면 "폴더에 추가" 모달이 보이나요?
  - [x] "폴더 추가" 버튼을 누르면 "폴더 추가" 모달이 보이나요?
  - [x] "공유" 버튼을 누르면 "폴더 공유" 모달이 보이나요?
  - [x] "이름 변경" 버튼을 누르면 "폴더 이름 변경" 모달이 보이나요?
  - [x] "삭제" 버튼을 누르면 "폴더 삭제" 모달이 보이나요?
  - [x] 케밥 버튼을 누르면 "삭제하기", "폴더에 추가" 버튼이 있는 팝오버가 보이나요?
  - [x] 팝오버에 있는 "삭제하기" 버튼을 누르면 "링크 삭제" 모달이 보이나요?
  - [x] 팝오버에 있는 "폴더에 추가" 버튼을 누르면 "폴더에 추가" 모달이 보이나요?
  - [x] "폴더 공유" 모달에서 "카카오톡 아이콘"을 클릭하면 카카오로 공유 폴더 페이지 링크 공유하기 가능한가요?
  - [x] "폴더 공유" 모달에서 "페이스북 아이콘"을 클릭하면 페이스북으로 공유 폴더 페이지 링크 공유하기 가능한가요?
  - [x] "폴더 공유" 모달에서 "링크 아이콘"을 클릭하면 클립보드에 공유 폴더 페이지 링크가 복사 되나요?
</details>

<details>
  <summary>12주차</summary>
  <div markdown="1">
        
  - [x] TypeScript를 활용해 프로젝트에 타입 명시가 필요한 곳을 찾아 타입을 명시했나요?
  - [x] 링크 검색바에 검색어를 입력하면 현재 폴더에 있는 링크들 중 “url”, “title”, “description” 중 하나에 검색어가 포함된 링크들만 필터된 상태로 볼 수 있나요?
  - [x] 링크 검색바에 입력 값이 있는 경우 x 버튼이 보이나요?
  - [x] 링크 검색바에 x 버튼을 누르면 입력값이 없던 UI 상태로 돌아가나요?
</details>

<details>
  <summary>13주차</summary>
  <div markdown="1">

  - [x]  [기본] '/folder' 페이지를 Next.js 프로젝트에 맞게 변경 및 이전 했나요?
  - [x]  [기본] '/shared' 페이지를 Next.js 프로젝트에 맞게 변경 및 이전 했나요?
  - [x]  [기본] 다른 페이지로 이동이 필요한 곳에 next/link의 Link를 적용했나요?
  - [x]  [기본] Input 컴포넌트에 값이 없는 경우 회색의 placeholder값을 볼 수 있나요?
  - [x]  [기본] Input 컴포넌트에 focus in 하면 파랑색 테두리를 볼 수 있나요?
  - [x]  [기본] Input 컴포넌트에 눈 모양 아이콘을 누르면 비밀번호 가리기/보기 기능이 토글 되나요?
  - [x]  [기본] Input 컴포넌트에 값이 에러케이스일 경우 빨강색 테두리와 에러 메세지를 볼 수 있나요?
  - [x]  [기본] Input 컴포넌트에서 focus out 하면 실행할 함수를 설정할 수 있나요?
</details>

<details>
  <summary>14주차</summary>
  <div markdown="1">

  - [x]  [로그인 페이지] "회원 가입하기"를 클릭하면 '/signup' 페이지로 이동하나요?
  - [x]  [로그인 페이지] 이메일 input에 placeholder는 "이메일을 입력해 주세요.", 비밀번호 input에 placeholder는 "비밀번호를 입력해 주세요."가 보이나요?
  - [x]  [로그인 페이지] 이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 "이메일을 입력해주세요." 에러 메세지가 보이나요?
  - [x]  [로그인 페이지] 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 "올바른 이메일 주소가 아닙니다." 에러 메세지가 보이나요?
  - [x]  [로그인 페이지] 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 "비밀번호를 입력해주세요." 에러 메세지가 보이나요?
  - [x]  [로그인 페이지] 로그인 실패하는 경우, 이메일 input 아래에 "이메일을 확인해주세요.", 비밀번호 input 아래에 "비밀번호를 확인해주세요." 에러 메세지가 보이나요?
  - [x]  [로그인 페이지] 로그인 버튼 클릭 또는 Enter키 입력으로 로그인 실행 되나요?
  - [x]  [로그인 페이지] https://bootcamp-api.codeit.kr/docs 에 명세된 "/api/sign-in"으로 { "email": "[test@codeit.com](mailto:test@codeit.com)", "password": "sprint101" } POST 요청해서 성공 응답을 받으면 "/folder"로 이동하나요?
  - [x]  [회원가입 페이지] "회원 가입하기"를 클릭하면 '/signin' 페이지로 이동하나요?
  - [x]  [회원가입 페이지] 이메일 input에 placeholder는 "이메일을 입력해 주세요.", 비밀번호 input에 placeholder는 "영문, 숫자를 조합해 8자 이상 입력해 주세요. "비밀번호 확인 input에 placeholder는 "비밀번호와 일치하는 값을 입력해 주세요."가 보이나요?
  - [x]  [회원가입 페이지] 이메일 input에서 focus out 할 때, 값이 없을 경우 "이메일을 입력해주세요." 에러 메세지가 보이나요?
  - [x]  [회원가입 페이지] 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 "올바른 이메일 주소가 아닙니다." 에러 메세지가 보이나요?
  - [x]  [회원가입 페이지] 비밀번호 input에서 focus out 할 때, 값이 8자 미만으로 있거나 문자열만 있거나 숫자만 있는 경우, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요." 에러 메세지가 보이나요?
  - [x]  [회원가입 페이지] 비밀번호 input과 비밀번호 확인 input의 값이 다른 경우, 비밀번호 확인 input 아래에 "비밀번호가 일치하지 않아요." 에러 메세지가 보이나요?
  - [x]  [회원가입 페이지] 회원가입을 실행할 경우, 문제가 있는 경우 문제가 있는 input에 에러 메세지가 보이나요?
  - [x]  [회원가입 페이지] 회원가입 버튼 클릭 또는 Enter키 입력으로 회원가입 실행 되나요?
  - [x]  [회원가입 페이지] 이메일 중복 확인은 "/api/check-email" POST 요청해서 확인 할 수 있나요?
  - [x]  [회원가입 페이지] 유효한 회원가입 형식의 경우 "/api/sign-up" POST 요청하고 성공 응답을 받으면 "/folder"로 이동하나요?
  - [x]  [로그인, 회원가입 페이지 공통] 눈 모양 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지나요?
  - [x]  [로그인, 회원가입 페이지 공통] 비밀번호의 문자열이 가려질 때는 눈 모양 아이콘에는 사선이 그어져있고, 비밀번호의 문자열이 보일 때는 사선이 없는 눈 모양 아이콘이 보이나요?
  - [x]  [로그인, 회원가입 페이지 공통] 소셜 로그인에 구글 아이콘 클릭시 'https://www.google.com', 카카오 아이콘 클릭시 'https://www.kakaocorp.com/page'로 이동하나요?
  - [x]  [로그인, 회원가입 페이지 공통] 로그인/회원가입시 성공 응답으로 받은 accessToken을 로컬 스토리지에 저장하나요?
  - [x]  [로그인, 회원가입 페이지 공통] 로그인/회원가입 페이지에 접근시 로컬 스토리지에 accessToken이 있는 경우 '/folder' 페이지로 이동하나요?
  - [x]  [심화] 로그인, 회원가입 기능에 react-hook-form을 활용했나요?
</details>

<details>
  <summary>15주차</summary>
  <div markdown="1">

  - [x]  [링크 공유 페이지] 링크 공유 페이지의 url path를 '/shared'에서 '/shared/{folderId}'로 변경했나요?
  - [x]  [링크 공유 페이지] 폴더의 정보는 '/api/folders/{folderId}', 폴더 소유자의 정보는 '/api/users/{userId}'를 활용했나요?
  - [x]  [링크 공유 페이지] 링크 공유 페이지에서 폴더의 링크 데이터는 '/api/users/{userId}/links?folderId={folderId}'를 사용했나요?
  - [x]  [폴더 페이지] 폴더 페이지에서 유저가 access token이 없는 경우 '/signin'페이지로 이동하나요?
  - [x]  [폴더 페이지] 폴더 페이지의 url path가 '/folder'일 경우 폴더 목록에서 "전체" 가 선택되어 있고, '/folder/{folderId}'일 경우 폴더 목록에서 {folderId} 에 해당하는 폴더가 선택되어 있고 폴더에 있는 링크들을 볼 수 있나요?
  - [x]  [폴더 페이지] 폴더 페이지에서 현재 유저의 폴더 목록 데이터를 받아올 때 '/api/folders'를 활용했나요?
  - [x]  [폴더 페이지] 폴더 페이지에서 전체 링크 데이터를 받아올 때 '/api/links', 특정 폴더의 링크를 받아올 때 '/api/links?folderId=1'를 활용했나요?
  - [x]  [상단  네비게이션] 유효한 access token이 있는 경우 '/api/users'로 현재 로그인한 유저 정보를 받아 상단 네비게이션 유저 프로필을 보여주나요?
  - [x]  [심화] 리퀘스트 헤더에 인증 토큰을 첨부할 때 axios interceptors 또는 이와 유사한 기능을 활용 했나요?

</details>

<details>
  <summary>19주차</summary>
  <div markdown="1">

  - [x]  [프로젝트 전반] api 요청에 TanStack React Query를 활용했나요?
  - [x]  [로그인, 회원가입 페이지] 로그인은 POST '/auth/sign-in' 을 활용했나요?
  - [x]  [로그인, 회원가입 페이지] 회원가입은 POST '/auth/sign-up' 을 활용했나요?
  - [x]  [로그인, 회원가입 페이지] 이메일 중복확인은 POST '/users/check-email' 을 활용했나요?
  - [x]  [링크 공유 페이지] 폴더의 정보는 GET '/folders/{folderId}', 폴더 소유자의 정보는 GET '/users/{userId}'를 활용했나요?
  - [x]  [링크 공유 페이지] 폴더의 링크 데이터는 GET '/folders/{folderId}/links' 를 활용했나요?
  - [x]  [링크 공유 페이지] 유효한 access token이 있는 경우 GET '/users' 로 현재 로그인한 유저 정보를 받아 상단 네비게이션 유저 프로필을 보여 주나요?
  - [x]  [링크 공유 페이지] 유효한 access token이 없는 경우 "로그인" 버튼을 보여 주나요?
  - [x]  [폴더 페이지] 폴더 페이지에서 현재 유저의 폴더 목록 데이터는 GET '/folders' 를 활용했나요?
  - [x]  [폴더 페이지] 폴더 페이지에서 전체 링크 데이터를 받아올 때 GET '/links', 특정 폴더의 링크를 받아올 때 GET '/folders/{folderId}/links'를 활용했나요?
  - [x]  [모달] 폴더 이름 변경은 'PUT /folders/{folderId}'를 활용했나요?
  - [x]  [모달] 폴더 생성은 'POST /folders'를 활용했나요?
  - [x]  [모달] 폴더 삭제는 'DELETE /folders/{folderId}'를 활용했나요?
  - [x]  [모달] 링크 삭제는 'DELETE /links/{linkId}'를 활용했나요?
  - [x]  [모달] 링크 생성은 'POST /links'를 활용했나요?

</details>

<details>
  <summary>20주차</summary>
  <div markdown="1">

  - [x] [기본] 프로젝트 전반에 필요한 리팩토링, 기능 개선을 진행했나요?
  - [x] [기본] 즐겨찾기 설정된 카드의 별은 파랑색이 되나요?
  - [x] [기본] 파랑색 별을 다시 클릭하면 즐겨찾기 설정이 해제되고 회색으로 돌아가나요?
  - [x] [기본] 즐겨찾기 설정/해제는 PUT ‘/links/{linkId}’ 를 활용했나요?

</details>
