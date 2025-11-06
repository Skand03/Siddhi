# Siddhi - Your AI Partner

![logo](./assets/presentation.png)

![Version](https://img.shields.io/badge/version-0.0.27-blue)
![License](https://img.shields.io/badge/license-MIT-green)

⭐️ **AI at Your Fingertips, Anytime, Anywhere.**

## **Tired of the endless back-and-forth with ChatGPT, Claude, and other AI tools just to repeat the same task over and over?**

You're not alone! I felt the same frustration, so I built a solution: **Siddhi**—an open-source browser extension that makes AI accessible directly where you need it.

**Imagine**: You create a prompt like "Fix the grammar for this text," right-click, and job done—no more switching tabs, no more wasted time.

![](./assets/showcase/demo.gif)

> Imagine a world where every user has access to powerful models (LLMs and more) directly within their web browser. By integrating AI into everyday internet browsing, we can revolutionize the way people interact with information online, providing them with instant, intelligent assistance tailored to their needs.

## 🌟 About Siddhi

**Siddhi** is your AI companion in the browser, built on the foundation of Extension | OS with enhanced features and a fresh identity. Compatible with Chrome, Edge, Opera, and Brave browsers.

## 📸 Screenshots

Select, right-click and select the functionality—it's that easy!
![action](./assets/showcase/action.png)

Pick your favorite provider and select the model that excites you the most.
![LLM Selector](./assets/showcase/llmSelector.png)

Customize your look and feel, and unleash your creativity with your own prompts!
![Prompt Factory](./assets/showcase/promptFactory.png)

Mixture of Agents (pre-release)
![Mixture Of Agents](./assets/showcase/moa.png)s

## 👨‍💻 Author

**Skand Chaubey**
- Email: skandchaubey03@gmail.com
- GitHub: [@Skand03](https://github.com/Skand03)

## 🚀 Getting Started

### For Development

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Skand03/Siddhi.git
   cd Siddhi
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Start Development Server**
   ```bash
   pnpm dev
   ```

4. **Load in Browser**
   - Open Chrome and navigate to [chrome://extensions](chrome://extensions)
   - Enable the developer mode (toggle in top-right corner)
   - Click "Load unpacked"
   - Select the `build/chrome-mv3-dev` folder

5. **Configure API Keys**
   - The options page automatically opens
   - Go to LLM Settings
   - Choose your AI provider and insert your API key

## ✨ Features

- **🎯 Smart Text Selection Menu**: Right-click any selected text to access AI-powered actions instantly
- **🤖 Multiple AI Providers**: Support for Siddhi, Google Gemini, OpenAI, Groq, Together AI, and localhost (Ollama)
- **📋 Built-in Actions**: Comment Post, Grammar Fixer, Summarize Text, Voice Discussion, Emoji Comments
- **⚙️ Prompt Factory**: Create, edit, and customize your own AI prompts
- **🔐 Secure Storage**: API keys are stored locally in your browser, never leaving your device
- **🎨 Customizable UI**: Toggle features on/off, customize appearance
- **[Beta] Mixture of Agents**: Experience innovative multi-agent AI collaboration

## 🎨 Usage

### Quick Start Guide

1. **Configure AI Provider**
   - Click the Siddhi extension icon
   - Go to Options → LLM Settings
   - Choose a provider (Gemini recommended for free tier)
   - Enter your API key

2. **Use Text Selection**
   - Go to any webpage
   - Select text (at least 2 words)
   - Right-click or use the floating menu
   - Choose an AI action

3. **Customize Prompts**
   - Options → Prompt Factory
   - Edit existing prompts or create new ones
   - Save your changes

### Getting API Keys

#### Google Gemini (Free & Recommended)
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click "Create API Key"
3. Copy and paste into Siddhi

#### OpenAI
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create an API key
3. Add to Siddhi settings

#### Groq
1. Visit [Groq Console](https://console.groq.com/keys)
2. Generate API key
3. Configure in Siddhi

### Data - Awareness

All your data is stored locally on your hard drive.

#### MAC OSX

`/Users/<your-username>/Library/Application Support/Google/Chrome/Default/Sync Extension Settings/`

## Localhost

To utilize the localhost option and perform LLM inference, you must set up a local Ollama server. You can download and install Ollama along with the CLI [here](https://ollama.ai/).

### Pull Image

Example:

```
ollama pull llama3.1
```

### Start Server

Example:

```
OLLAMA_ORIGINS=chrome-extension://* ollama serve
```

**Important**: You need to configure the environment variable `OLLAMA_ORIGINS` to `chrome-extension://*` to permit requests from the Chrome extension. If `OLLAMA_ORIGINS` is not correctly configured, you will encounter an error in the Chrome extension.

**Secutity** the `*` in `chrome-extension://*` should be replaced with the extension id. If you have downloaded Extension | OS from chrome, please use `chrome-extension://bahjnakiionbepnlbogdkojcehaeefnp`

### macOS

Run `launchctl setenv` to set `OLLAMA_ORIGINS`.

```
launchctl setenv OLLAMA_ORIGINS "chrome-extension://bahjnakiionbepnlbogdkojcehaeefnp"
```

[Setting environment variables on Mac (Ollama)](https://github.com/ollama/ollama/blob/main/docs/faq.md#setting-environment-variables-on-mac)

### Docker

The Ollama server can also be [run in a Docker container](https://hub.docker.com/r/ollama/ollama). The container should have the `OLLAMA_ORIGINS` environment variable set to `chrome-extension://*`.

Run `docker run` with the `-e` flag to set the `OLLAMA_ORIGINS` environment variable:

```
docker run -e OLLAMA_ORIGINS="chrome-extension://bahjnakiionbepnlbogdkojcehaeefnp" -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on [GitHub](https://github.com/Skand03/Siddhi/issues)
- Email: skandchaubey03@gmail.com

## 🙏 Acknowledgments

- Built with [Plasmo Framework](https://www.plasmo.com/)
- UI Components from [shadcn/ui](https://ui.shadcn.com/)
- Based on the original Extension-OS project by Alberto Cubeddu
- Special thanks to Build Club, Leonardo.ai, Canva, and all contributors

---

Made with ❤️ by Skand Chaubey

*Based on Extension | OS - Originally created for the SF Hackathon x Build Club*

# Changelog

### 0.0.27
- [patch] Default LLM changed to llama-3.3-70b-versatile

### 0.0.26

- Adding more LLMs

### 0.0.25

- Adding new llama3.3
- Adding instruction for install ollama on the UI

### 0.0.24

- Adding the ability to specify a custom URL

### 0.0.23

- Adding the uninstall hook to understand what can we improve.

### 0.0.22

- Fixed the X,Y positioning in page like LinkedIn, Reddit and so on.
- The declarativeNetRequest has been removed to enhance the release lifecycle in light of Chrome Store authorization requirements. Ollama continue to be fully supported, and detailed configuration instructions can be found in the README.

### 0.0.21

- Chaged the introductory GIF demonstrating how to use the Extension | OS.
- PromptFactory: Implemented a notification to inform users that any selected text will be automatically appended to the end of the prompt.
- Settings: Using Switch vs CheckBoxes
- Implemented optional (disabled by default) anonymous tracking to monitor usage patterns, including the most frequently used models and vendors.

### 0.0.20

- SelectionMenu: Now accessible on Reddit as well! (Consider prefixing all Tailwind classes for consistency)
- PromptSelector: Resolved all React warnings for a smoother experience
- Verified that pre-selection functions correctly (Thanks to E2E testing)

### 0.0.19

- Added more instruction for ollama
- localhost: Add the ability to specify the model by input text (vs select box)
- Fixed a useEffect bug

### 0.0.18

- SelectionMenu: Now you can choose to enable/disable
- SelectionMenu: When a key is pressed (e.g backspace for remove, or CTRL/CMD + C for copying) the menu automatically disappear

### 0.0.17

- Development: Integrated Playwright for testing and added a suite of automated tests

### 0.0.16

- SelectionMenu: Fixed a bug that caused the menu to vanish unexpectedly after the onMouseUp event, leading to confusion regarding item selection for users.
- SelectionMenu: Adjusted the visual gap to provide more space to the user.
- UI: Eliminated the conflicting success/loading state for a clearer user experience.

### 0.0.15

- SelectionMenu: Refined the triggering mechanism for improved responsiveness.
- SelectionMenu: Reduced the size for a more compact design.
- SelectionMenu: Automatically refreshes items immediately after the user updates the prompts.

### 0.0.14

- Fixed grammar issues, thanks to Luca.
- Introduced a new menu, courtesy of Denis.
- The new menu currently does not support phone calls (feature coming soon).

### 0.0.13

- Enhanced UI (tooltips are now more noticeable) thanks to Juanjo (We Move Experience) and Agostina (PepperStudio)
- Prompt Factory: Utilizing AutoTextArea for improved prompt display
- Prompt Factory: Removed the ID to improve user experience (non-tech users)
- System: Split the systemPrompt from the userPrompt.
- UX: Small improvements and removed the complicated items

### 0.0.12 (Not released to the public)

- General: Free tier exhaustion. We haven't got a sponsor (yet) to support our community users.
- Google: Added identity, identity.email to enable automatic log-in using your google credentials.

### 0.0.11 (Not released to the public)

- General: Introduced a FREE Tier for users to explore the Extension | OS without needing to understand API Keys.
- Development: Implemented the CRX Public Key to maintain a consistent extension ID across re-installations during development.
- Development: Integrated OAUTH for user authentication when accessing the FREE tier.
- Permissions: Added identity permissions to facilitate user identity retrieval.
- Showcase: Updated images for improved visual presentation.
- Prompt Factory: Set Extension | OS as the default model, enabling users to utilize the extension without prior knowledge of API Key setup.

### 0.0.10

- Context Menu: Added a new right-click option for seamless access to configuration settings.
- Context Menu: Improved the layout and organization of the context menu for enhanced user experience.
- Prompt Factory: Introduced a comprehensive sheet that details the context and functionality of each feature.
- Prompt Factory: Implemented a clickable icon to indicate that the tooltip contains additional information when clicked.

### 0.0.9

- Bug fixes
- Clean up codebase
- UX for the functionality improved

### 0.0.8

- Removed an unnecessary dependency to comply with Chrome Store publication guidelines.
- Introduced a new icon.
- Implemented a loading state.
- Fixed an issue where Reddit visibility was broken.

### 0.0.7

- Adding missing models from together.ai
- Adding missing models from groq
- Updated About page
- **MoA**: Add the ability to use a custom prompt.

### 0.0.6

- Popup: UI revamped
- Popup: New Presentation image and slogan
- Options: Unified fonts
- Options: Minor UI updates
- Content: Better error handling and UX (user get redireted to the option page when the API key is missing)
- Fix for together.ai (it was using a non-chat model)

## 0.0.5

- Vapi affilation link (help me maintain this extension, sign up with the link)
- Vapi Enhancements: Prompts now support selecting a specific phone number to call.
- Vapi Enhancements: Prompts can now include a custom initial message for the conversation.
- Vapi Enhancements: Now every prompt can be customised using the
- UI: Section for specific configurations

## 0.0.4

- Hotfix: declarativeNetRequest was intercepting every localhost request.

## 0.0.3

- Added github branch protection.
- Changed the datastructure to achieve a clearer and more abstract way to call functions
- Function to clean the datastructure to adapt to chrome.contextMenus.CreateProperties
- use "side\_" as hack to open the sidebar. WHY: The sidebar.open doesn't work after we call the storage.get
- Allowing to change the default prompts
- chrome.runtime.openOptionsPage() opens only in production environment (onInstalled)
- Improved UI (switched to dark theme)
- Allowing to change the functionality; The "side\_" bug is annoying as it is over complicating the codebase.

## 0.0.2

- How to install and start polishing the repository

## 0.0.1

- Check the demo video

# Gotchas

- Ensure that the open.sidePanel is always initialized before the Plasmo Storage.
- We currently have two menus that function similarly but not identically; we need to implement a more efficient solution to consolidate them into one.
- The Plasmo handler may stop functioning unexpectedly without errors if a response is not returned; ensure to always return a response to prevent this issue.


## 📦 Building for Production

```bash
# Package the extension
pnpm run package

# Output will be in build/chrome-mv3-prod.zip
```

## 🧪 Testing

```bash
# Run automated tests
pnpm test
```