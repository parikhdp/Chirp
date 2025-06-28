# 📱 Chirp News

**Chirp News** is a modern, convenient, and beautifully designed mobile news application built with **React Native**, **Expo**, and **TypeScript**. Powered by [NewsAPI.org](https://newsapi.org), the app keeps you updated with the latest headlines across categories like Technology, Health, Sports, and more — all in a smooth and intuitive interface.

---

## ✨ Features

- 📰 **Top Headlines** from reliable sources
- 📚 **Category-based Filtering** (Technology, Health, Business, etc.)
- 🌙 **Light & Dark Mode Toggle**
- 📤 **Share Articles** directly from the app
- 🔗 **In-App Reading** of full articles via web view
- ⚡ **Fast & Responsive UI** with FlatList sliders and clean typography
- 🔄 **Dynamic Theming** based on system or toggle preference

--- 

## 🚀 Getting Started

### Prerequisites

- Node.js & npm or yarn
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- A valid API key from [NewsAPI.org](https://newsapi.org)

---

### 🔧 Installation

```bash
git clone https://github.com/yourusername/chirp-news.git
cd chirp-news
npm install
````

> Or use `yarn` if you prefer:

```bash
yarn
```

---

### 🔑 Setup NewsAPI Key

Create an `.env` file in the root and add:

```env
NEWS_API_KEY=your_newsapi_key_here
```

> Ensure it's linked correctly in `app.config.ts` or `Constants.expoConfig?.extra`.

---

### 🏃‍♂️ Run the App

```bash
npx expo start
```

> Scan the QR code from your Expo Go app or run on an emulator.

## 🛠️ Built With

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [NewsAPI.org](https://newsapi.org)

---

## 📤 Share Functionality

You can share any article directly with your friends and family. The app uses the device's native sharing options to allow instant sharing.

---

## 🌗 Theme Support

Supports **Dark Mode** and **Light Mode** toggling from the top-right icon in the header. Seamless switch and theme-aware component styling.

---

## 💡 Inspiration

This app was built to provide a clean and accessible news-reading experience while learning modern mobile development patterns with React Native.

