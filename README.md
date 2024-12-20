# 교환 일기 서버

이 프로젝트는 Node.js와 Express를 기반으로 한 일기 관리 API 서버입니다. 이 서버는 일기 작성, 읽기, 수정, 삭제 기능과 사용자 인증을 제공합니다. 또한, 이미지 업로드(Cloudinary 사용), 위치 기반 필터링, 공개된 일기 조회 등의 기능을 지원합니다.

+ [교환일기 웹사이트](https://nfe-1-1-3-diaryhub.vercel.app/) 
+ [프론트엔드 github](https://github.com/jinhyukSeo777/NFE-1-1-3-diaryhub)

## 주요 기능
+ 사용자 인증: bcryptjs를 사용한 비밀번호 암호화와 JWT 기반의 사용자 등록 및 로그인.
+ 일기 관리: 일기 작성, 수정, 삭제, 조회 기능 제공. 이미지 업로드와 위치 기반 필터링 지원.
+ 공개 일기: 공개된 일기 조회 기능 및 사용자 및 지역별 필터링 지원.
+ 이미지 업로드: Cloudinary를 통해 이미지 업로드 및 저장.
+ 댓글 및 좋아요 기능: 일기에 댓글을 달고 좋아요를 추가할 수 있음.

## 사용 기술
+ Node.js
+ Express.js
+ MongoDB 및 Mongoose
+ JWT를 사용한 인증
+ bcryptjs를 사용한 비밀번호 암호화
+ Cloudinary를 이용한 이미지 저장
+ multer를 사용한 파일 업로드
+ dotenv를 사용한 환경 변수 관리

## API 명세서
+ [교환일기API 명세서](https://lying-chord-ab6.notion.site/API-13d030eafe6580018841e749edd09fe1)

