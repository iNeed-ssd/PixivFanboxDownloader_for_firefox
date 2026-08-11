<!-- TOC -->

- [소개](#소개)
- [설치](#설치)
- [사용 방법](#사용-방법)
- [Patreon](#patreon)

<!-- /TOC -->

[Discord](https://discord.gg/u4wVMy7xJM)

# 소개

이것은 Pixiv Fanbox에서 파일을 일괄 다운로드하기 위한 Firefox 브라우저 확장 프로그램입니다.

파일 형식 필터링, 사용자 정의 파일명 및 다국어를 지원합니다.

**참고:** 이 프로그램은 Fanbox의 유료 콘텐츠를 직접 잠금 해제할 수 없습니다. 유료 콘텐츠를 다운로드하려면 먼저 구매해야 합니다.

![screenshot](screenshot/ui-5.png)

# 설치

Firefox 142 이상이 필요합니다. 개발 버전은 `about:debugging#/runtime/this-firefox`의 “임시 부가 기능 로드”에서 `dist/manifest.json`을 선택하여 설치할 수 있습니다.

소스에서 빌드하려면 Node.js와 npm을 설치한 후 다음 명령을 실행합니다.

```sh
npm install
npm run build
```

Firefox 정식 버전에 영구 설치하려면 생성된 ZIP이 Mozilla의 서명을 받아야 합니다.

# 사용 방법

- 이 확장 프로그램을 설치한 후 fanbox 페이지를 새로고침하면 페이지 오른쪽에 파란색 다운로드 버튼이 표시됩니다. 이 버튼을 클릭하여 사용을 시작하세요.
- 다운로드한 파일은 브라우저의 다운로드 디렉토리에 저장됩니다. 다른 위치에 저장하려면 브라우저의 다운로드 디렉토리를 변경해야 합니다.
- 다운로드 시 "각 파일을 저장할 위치를 물어보기" 브라우저 설정을 비활성화하여 저장 위치를 묻는 창이 나타나지 않도록 하세요.
- 다운로드한 파일 이름이 비정상적인 경우, 다운로드 기능을 가진 다른 브라우저 확장 프로그램을 비활성화하세요.

# Patreon

Patreon에서 저를 지원할 수 있습니다. 감사합니다!

<a href='https://www.patreon.com/xuejianxianzun'><img src='https://c5.patreon.com/external/logo/become_a_patron_button.png' alt='Become a patron' width='140px' /></a>
