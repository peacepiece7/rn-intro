# RN?

페이스북이 개발한 오픈 소스 모바일 애플리케이션 프레임워크

JS하나로 Android, iOS, Web 대응

## 사용하고 있는 곳

핀터레스트, 인스타그램, 디코 등...

## 동작 원리

JS로 짜면 Bridge를 통해 Native code로 변환됨

JS => RN => Bridge => iOs/Android

## 장점

- CodePush (비용 절감)
- React 사용
- Fast Refresh
- Open Source Platform

## 단점

- 결국 Native를 알아야 함, iOS/Android의 파일 구조를 알아야 할 수 있음
- 오픈 소스이기 떄문에 관리가 안될 수도 있음
- Native보다 느릴 수 있음
- RN은 main이 0.7로 안정화 되었지만, 아직도 버그가 많음
-

# Expo CLI

RN 앱을 쉽고 빠르게 구축하는 종합 선물 세트

## 장점

- 기본 제공 API, Lib이 있음
- Expo Go 어플만 있으면 기기 상관없이 프로젝트 실행 가능

## 단점

- 추가 네이티브 모듈을 사용할 수 없음

# RN CLI

고도화 기능 개발, 높은 자유도를 가짐

## 장점

- 네이티브 모듈 연결 가능 (높은 자유도)

## 단점

- 기본 제공 라이브러리가 적어서 직접 설치가 필요
- Mac 개발 필수, Native 폴더 구조에 대한 기본 지식 필요

### 선택시 고려사항

구현하고자 하는 모든 기능이 Expo에서 지원 되는가?

- 대표적으로 인 앱 결제 기능이 있음 (Expo -> RN CLI 변경하는 비용은 크지 않음)

# Getting Started

Expo Go 어플리케이션 설치

https://docs.expo.dev/more/expo-cli/ 참고

```
npx expo -h

npx create-expo-app ./first
```

```json
{
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  }
}
```

```bash
npm run start
```

- 안드로이드 exp://192.186.123.123:19000
- iOS QR코드로 실행
