# Capstone Design Project
## 2025년 1학기 캡스톤
---
# 🛡️ Flask XSS & SQL Injection 방어 시스템

이 프로젝트는 **Flask** 기반으로 개발된 웹 보안 시스템으로, **XSS(Cross-Site Scripting)** 및 **SQL Injection** 공격을 탐지 및 방어하며, 모든 공격 로그를 **MySQL 데이터베이스**에 저장하고 실시간 모니터링할 수 있도록 설계되었습니다.

---

## 🧩 주요 기능 (현재 구현 완료)

| 기능 항목                | 설명                                                                 |
|-------------------------|----------------------------------------------------------------------|
| ✅ Flask 서버 및 API     | Flask 기반 REST API 구축 및 서버 실행                               |
| ✅ MySQL 연동            | 사용자 데이터 및 공격 로그 저장용 데이터베이스 연동                |
| ✅ XSS 방어              | `bleach` 라이브러리를 이용한 입력값 필터링                         |
| ✅ SQL Injection 방어    | SQLAlchemy ORM + 파라미터화 쿼리 사용                               |
| ✅ 로그 기록             | 공격 탐지 시 로그 파일 + DB 저장                                     |
| ✅ 관리자 API            | 관리자 전용 로그 조회/필터링 기능                                   |
| ✅ JSON 응답             | 모든 결과는 JSON 형식으로 반환 (Postman 테스트 가능)               |
| ✅ 실시간 알림 시스템     | xss/ sql injection 공격 발생 시 관리자에게 메일 알림               |

---

## 🚀 향후 구현 예정

- 🔔 **실시간 알림 시스템** (공격 발생 시 관리자 알림)
- 🔐 **API 사용 제한 (Rate Limit)**
- ⛔ **공격자 IP 차단 기능**
- 💾 **로그 파일 백업 및 다운로드**
- 🖥️ **관리자 대시보드 UI 개발**

---

## 🧱 시스템 아키텍처

```text
사용자 (Postman 등)
        ↓
[Flask Web Server]
        ↓
[SQL Injection 방어 레이어] → (DB 안전 처리)
        ↓
[XSS 방어 레이어] → (입력값 필터링)
        ↓
[MySQL DB]
   └─ 사용자 데이터
   └─ 공격 로그
        ↓
[실시간 공격 탐지 시스템]
        ↓
[관리자 대시보드 / 알림 시스템]
```
```
📂 프로젝트 구조

CapstoneDesignProject/
│
├── app.py                      # Flask 앱 실행 진입점
├── README.md                   # 프로젝트 설명 문서
│
├── project/
│   ├── config/                 # 설정 관련 모듈
│   │   └── comfig.py
│
│   ├── models/                 # SQLAlchemy 모델 정의
│   │   └── attack_log.py       # 공격 로그 모델
│
│   ├── routes/                 # API 라우터
│   │   ├── admin.py            # 관리자 전용 API
│   │   └── api.py              # 사용자 입력 처리 API
│
│   ├── services/               # 보안 탐지 로직
│   │   ├── sqli_detect.py      # SQL Injection 탐지
│   │   └── xss_detect.py       # XSS 탐지 및 정화
│
│   ├── static/                 # 정적 파일
│   │   ├── css/                # 스타일 시트
│   │   ├── img/                # 이미지
│   │   └── js/                 # 자바스크립트
│
│   ├── templates/              # 관리자 UI (HTML 템플릿)
│
│   ├── utils/                  # 공통 유틸리티
│   │   ├── logger.py           # 공격 로그 기록기
│   │   ├── emailer.py          # 이메일로 관리자에게 알림
│   │   └── user_info.py        # 사용자 정보 구조체
│
│   └── __init__.py             # 패키지 초기화

```
🛠️ 사용 기술 스택
Language: Python

Web Framework: Flask

Database: MySQL + SQLAlchemy

Security Modules: bleach, logging

Email Modules: Flask-mail

Testing Tool: Postman

Future Tools: Flask-Mail, JWT, Flask-Admin 등
