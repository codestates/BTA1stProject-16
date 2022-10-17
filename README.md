## 1. 팀 소개

### BTA-03-16

- **팀 명 : 2Drops**
- **팀원 : 김지훈, 홍유진**
- **Date : 2022/10/13 - 2022/10/16**
- **선정 코인 : Hermez(HEZ)**
- **깃헙 레포 : ** [GitHub - codestates/BTA1stProject-16](https://github.com/codestates/BTA1stProject-16)

## 2. 선정 네트워크 소개 (zkEVM Hermez, HEZ)
![hermez](https://user-images.githubusercontent.com/99964401/196068546-5cb95f03-4475-4008-bedb-5b401e185bae.jpeg)


### ⛓️  2.1 개요

이더리움 퍼블릭 블록체인에서 지배적인 확장 패러다임이 될 것이라는 것이 분명해졌습니다. 이를 염두에 두고 Iden3는 이더 리움에서 지불 및 토큰 전송 확장에 중점을 둔 ZK- **롤업 인 Hermez를 개발하고 최근 출시했습니다.**

**이더리움 네트워크 거래의 50% 이상이 이체**이며, 그 중 상당 부분이 **거래소에서 입출금**되는 것으로 나타났습니다. 거래소가 롤업을 사용하기 시작하거나 (이상적인 경우) 동일한 롤업에서 만나기로 동의한 경우 수요가 상당히 감소할 수 있습니다.

**사용자의 거래 비용**을 크게 줄이는 것 외에도 **가스 가격을 크게 낮추고** 더 복잡한 계약을 위해 **기본 체인을 확보**할 수 있는 추가 이점이 있습니다.

### ⛓️ 2.2 zkEVM(Hermez) 동작 원리

zkEVM의 주요 기능은 스마트 계약 지원을 제공하는 것입니다. Ethereum Layer 2 트랜잭션 실행(사용자가 네트워크로 보내는 트랜잭션)으로 인한 상태 전환 작업을 수행합니다. 그 후, 영지식 증명 기술을 사용하여 오프체인에서 수행된 이러한 상태 변경 계산의 정확성을 증명하는 유효성 증명을 생성합니다.

**[ zkEVM의 주요 구성 요소 ]**

zkEVM의 주요 구성 요소는 다음과 같습니다

- 효율성 증명(PoE) 합의 메커니즘
- zkNode software including a **synchronizer, sequencer and aggregator.**
- LX-to-LY bridge.
- zkProver.
- Active users of the zkEVM network who create transactions.는 다음과 같습니다
- **효율성 증명(PoE) 합의 메커니즘**
- zkNode software including a **synchronizer, sequencer and aggregator.**
- **LX-to-LY bridge.**
- **zkProver.**
- Active users of the zkEVM network who create transactions.

## 3. 프로젝트 소개

### 💡 핵심 기능

- Chrome Extension 기반 지갑
- 중앙 서버 통제 없이 사용자가 직접 지갑 보유
- HD지갑 발급 및 계정 발급 기능
- 잔액 조회
- 토큰 전송
- 계정 활동 내역

## Getting Started

### 1. 초기 세팅
`npm run build`

### 2. 크롬 익스텐션 -> 개발자 모드
`dir: build 선택 & 추가`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

