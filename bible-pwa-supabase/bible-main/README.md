# 오늘의 성경말씀 PWA (Supabase)

## 1. Supabase 준비
1. Supabase 프로젝트를 생성합니다.
2. SQL Editor에서 `data/db.sql` 전체를 실행합니다. (기존 41개 말씀도 DB에 입력됩니다.)
3. Authentication > Providers에서 Email을 활성화합니다.
4. Project Settings/API에서 Project URL과 **Publishable key**(또는 legacy anon key)를 확인합니다.
5. `js/config.js`의 두 값을 교체합니다. **service_role key는 브라우저 코드에 넣지 마세요.**

## 2. Auth URL 설정
Supabase Authentication의 URL Configuration에서 Site URL을 실제 GitHub Pages 주소(예: `https://enpguy.github.io/bible/`)로 지정하고 Redirect URLs에도 같은 주소를 추가합니다.

## 3. GitHub Pages 배포
이 폴더의 파일을 저장소 루트에 올리고 Pages를 배포합니다. `manifest.json`과 service worker는 상대경로를 사용하므로 `/bible/` 같은 프로젝트 경로에서도 동작합니다.

## 구조
- `index.html`: DB 말씀 조회/랜덤 표시/즐겨찾기
- `login.html`: Supabase 이메일 회원가입/로그인
- `mypage.html`: 로그인 사용자 즐겨찾기 조회/삭제
- `js/config.js`: 공개 가능한 Supabase URL + Publishable key
- `data/db.sql`: PostgreSQL 테이블, RLS 정책, 말씀 seed
- `service-worker.js`, `manifest.json`, `icons/`: PWA

기존의 빈 `backend/`, `windows/`, 중복 `Random`, 사용하지 않는 `scripts.js`는 제거했습니다. GitHub Pages + Supabase 구조에서는 별도 Python 백엔드가 필요하지 않습니다.
