## 프로젝트 소개

해당 프로젝트는 기업에서 진행한 과제로 필수 기술스택은 `Next.js`, `Prisma`, `TypeScript`를 사용하여 백엔드와 프론트 둘 다 구현해야 되는 것이었습니다.

### 프로젝트 설치 및 실행 방법

#### 설치

```bash
npm i
```

#### 실행

```bash
npm run dev
```

### 기술 스택

- Next.js
- Prisma
- TypeScript
- Sass

### 추가로 사용한 라이브러리

- axios
- react datepicker : 사용 예시가 가독성 있게 적혀 있어 사용하기 쉬워 해당 라이브러리를 선택
- react quill : 처음에는 tip-tap 라이브러리를 사용하려고 했으나, 해당 라이브러리가 커스텀하기 쉽고, 문서가 참고하기 쉬워서 해당 라이브러리를 선택

### 구현 페이지

- `/notice` : 목록 페이지

![목록페이지](https://github.com/sejineeee/blocksmith-assignments/assets/86041335/744a347b-0917-4a25-8b4c-424a4a5cbbb0)

- `/notice/create` : 게시글 작성 페이지

![글 작성 페이지](https://github.com/sejineeee/blocksmith-assignments/assets/86041335/14a7e48e-11c8-40c9-86a5-850d4e00aa5e)

- `/notice/[id]` : 해당 게시글 세부 페이지

![글 세부 페이지](https://github.com/sejineeee/blocksmith-assignments/assets/86041335/7dd29132-9e80-4cf5-b443-fdb7351c4c65)

- `/notice/[id]/modify` : 해당 게시글 수정 페이지

![글 수정 페이지](https://github.com/sejineeee/blocksmith-assignments/assets/86041335/76cc8470-34a2-4ba6-9d93-9fd2f4e487ee)

- 페이지네이션 기능

  - 페이지네이션 기능은 구현하였으나 현재 스타일 미적용 상태

- 검색 기능
  - 검색 기능 구현하였으나 오류로 인하여 수정 예정

### 느낀점

이 프로젝트를 작업할 당시 `Next.js`와 `Prisma`를 처음 사용해본 것이었다. 그리고 `Prisma`를 적용하면서 서버에 데이터가 전송이 제대로 되고 있는지 확인하기 위해서 `MongoDB`도 처음 사용해봤다. 처음 사용해보는 것이 많아서 구현하는데 시간이 오래 걸렸다. 이미 기업 과제 기간은 넘은 상태여서 혼자서라도 마무리 해보자는 마음으로 했지만, 혼자 하는 것이다 보니 느슨해져서 작업하는 기간이 길어졌다.

추후 시간이 생긴다면 검색 기능 오류를 수정하고, 스타일을 적용하고 작은 부분들을 수정하여 완성도를 높혀 배포하고 싶다. 나중에 README에 배포한 주소를 올릴 수 있었으면 좋겠다.
