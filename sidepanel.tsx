import "./globals.css"

import { useEffect, useState } from "react"

import HeroTitle from "~components/blocks/HeroTitle"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~components/ui/card"
import { Badge } from "~components/ui/badge"
import { ScrollArea } from "~components/ui/scroll-area"
import { sendToBackground } from "@plasmohq/messaging"
import { Separator } from "~components/ui/separator"
import { Button } from "~components/ui/button"
import { Input } from "~components/ui/input"

// Indian Languages
const INDIAN_LANGUAGES = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "hi", name: "Hindi (हिंदी)", flag: "🇮🇳" },
    { code: "bn", name: "Bengali (বাংলা)", flag: "🇮🇳" },
    { code: "te", name: "Telugu (తెలుగు)", flag: "🇮🇳" },
    { code: "mr", name: "Marathi (मराठी)", flag: "🇮🇳" },
    { code: "ta", name: "Tamil (தமிழ்)", flag: "🇮🇳" },
    { code: "gu", name: "Gujarati (ગુજરાતી)", flag: "🇮🇳" },
    { code: "kn", name: "Kannada (ಕನ್ನಡ)", flag: "🇮🇳" },
    { code: "ml", name: "Malayalam (മലയാളം)", flag: "🇮🇳" },
    { code: "pa", name: "Punjabi (ਪੰਜਾਬੀ)", flag: "🇮🇳" },
    { code: "or", name: "Odia (ଓଡ଼ିଆ)", flag: "🇮🇳" },
    { code: "as", name: "Assamese (অসমীয়া)", flag: "🇮🇳" },
    { code: "ur", name: "Urdu (اردو)", flag: "🇮🇳" },
    { code: "sa", name: "Sanskrit (संस्कृतम्)", flag: "🇮🇳" },
]

// Programming Languages for Code Conversion
const PROGRAMMING_LANGUAGES = [
    { code: "javascript", name: "JavaScript", icon: "🟨" },
    { code: "typescript", name: "TypeScript", icon: "🔷" },
    { code: "python", name: "Python", icon: "🐍" },
    { code: "java", name: "Java", icon: "☕" },
    { code: "csharp", name: "C#", icon: "🔵" },
    { code: "cpp", name: "C++", icon: "⚙️" },
    { code: "c", name: "C", icon: "🔧" },
    { code: "go", name: "Go", icon: "🐹" },
    { code: "rust", name: "Rust", icon: "🦀" },
    { code: "php", name: "PHP", icon: "🐘" },
    { code: "ruby", name: "Ruby", icon: "💎" },
    { code: "swift", name: "Swift", icon: "🍎" },
    { code: "kotlin", name: "Kotlin", icon: "🟣" },
    { code: "r", name: "R", icon: "📊" },
    { code: "matlab", name: "MATLAB", icon: "🔢" },
    { code: "scala", name: "Scala", icon: "🔴" },
    { code: "dart", name: "Dart", icon: "🎯" },
    { code: "lua", name: "Lua", icon: "🌙" },
    { code: "perl", name: "Perl", icon: "🐪" },
    { code: "haskell", name: "Haskell", icon: "λ" },
]

// Component to render formatted content with syntax highlighting
const FormattedContent = ({ content, theme }: { content: string; theme: "light" | "dark" }) => {
    const isDark = theme === "dark"

    // Check if content is JSON
    const tryParseJSON = (str: string) => {
        try {
            const trimmed = str.trim()
            if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
                return JSON.parse(trimmed)
            }
        } catch (e) {
            return null
        }
        return null
    }

    // Render JSON with syntax highlighting
    const renderJSON = (jsonObj: any, indent = 0) => {
        const indentStr = '  '.repeat(indent)
        
        if (typeof jsonObj === 'string') {
            return <span className="text-green-600 dark:text-green-400">"{jsonObj}"</span>
        }
        if (typeof jsonObj === 'number') {
            return <span className="text-blue-600 dark:text-blue-400">{jsonObj}</span>
        }
        if (typeof jsonObj === 'boolean') {
            return <span className="text-purple-600 dark:text-purple-400">{jsonObj.toString()}</span>
        }
        if (jsonObj === null) {
            return <span className="text-gray-500">null</span>
        }
        
        if (Array.isArray(jsonObj)) {
            return (
                <div>
                    <span className={isDark ? "text-gray-300" : "text-gray-700"}>[</span>
                    {jsonObj.map((item, i) => (
                        <div key={i} style={{ marginLeft: `${(indent + 1) * 16}px` }}>
                            {renderJSON(item, indent + 1)}
                            {i < jsonObj.length - 1 && <span>,</span>}
                        </div>
                    ))}
                    <div style={{ marginLeft: `${indent * 16}px` }}>
                        <span className={isDark ? "text-gray-300" : "text-gray-700"}>]</span>
                    </div>
                </div>
            )
        }
        
        if (typeof jsonObj === 'object') {
            const entries = Object.entries(jsonObj)
            return (
                <div>
                    <span className={isDark ? "text-gray-300" : "text-gray-700"}>{'{'}</span>
                    {entries.map(([key, value], i) => (
                        <div key={key} style={{ marginLeft: `${(indent + 1) * 16}px` }}>
                            <span className="text-red-600 dark:text-red-400">"{key}"</span>
                            <span className={isDark ? "text-gray-300" : "text-gray-700"}>: </span>
                            <span>{renderJSON(value, indent + 1)}</span>
                            {i < entries.length - 1 && <span>,</span>}
                        </div>
                    ))}
                    <div style={{ marginLeft: `${indent * 16}px` }}>
                        <span className={isDark ? "text-gray-300" : "text-gray-700"}>{'}'}</span>
                    </div>
                </div>
            )
        }
    }

    // Parse and render markdown-style content
    const renderFormattedText = () => {
        const jsonObj = tryParseJSON(content)
        
        // If it's valid JSON, render with syntax highlighting
        if (jsonObj) {
            return (
                <div className={`font-mono text-sm p-4 rounded-lg ${
                    isDark ? 'bg-gray-800' : 'bg-gray-100'
                } overflow-x-auto`}>
                    {renderJSON(jsonObj)}
                </div>
            )
        }

        // Handle code blocks first (```language ... ```)
        const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g
        const parts = []
        let lastIndex = 0
        let match

        while ((match = codeBlockRegex.exec(content)) !== null) {
            // Add text before code block
            if (match.index > lastIndex) {
                parts.push({
                    type: 'text',
                    content: content.substring(lastIndex, match.index)
                })
            }
            
            // Add code block
            parts.push({
                type: 'code',
                language: match[1] || 'text',
                content: match[2].trim()
            })
            
            lastIndex = match.index + match[0].length
        }
        
        // Add remaining text
        if (lastIndex < content.length) {
            parts.push({
                type: 'text',
                content: content.substring(lastIndex)
            })
        }

        // If no code blocks found, treat entire content as text
        if (parts.length === 0) {
            parts.push({ type: 'text', content })
        }

        return parts.map((part, partIndex) => {
            if (part.type === 'code') {
                return (
                    <div key={partIndex} className="my-4 relative group">
                        <div className={`flex items-center justify-between px-4 py-2 rounded-t-lg ${
                            isDark ? 'bg-gray-800' : 'bg-gray-200'
                        }`}>
                            <span className={`text-xs font-semibold ${
                                isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>{part.language}</span>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(part.content)
                                }}
                                className={`px-3 py-1 text-xs rounded flex items-center gap-1 ${
                                    isDark 
                                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                                        : 'bg-white hover:bg-gray-100 text-gray-700'
                                } transition-colors`}
                            >
                                📋 Copy code
                            </button>
                        </div>
                        <pre className={`p-4 rounded-b-lg overflow-x-auto ${
                            isDark ? 'bg-gray-900' : 'bg-gray-50'
                        }`}>
                            <code className={`text-sm ${
                                isDark ? 'text-green-400' : 'text-gray-800'
                            }`}>{part.content}</code>
                        </pre>
                    </div>
                )
            }

            // Render regular text with markdown support
            const lines = part.content.split('\n')
            return (
                <div key={partIndex}>
                    {lines.map((line, index) => {
                        // Headers
                        if (line.startsWith('###')) {
                            return (
                                <h3 key={index} className="text-lg font-bold mt-4 mb-2">
                                    {line.substring(3).trim()}
                                </h3>
                            )
                        }
                        if (line.startsWith('##')) {
                            return (
                                <h2 key={index} className="text-xl font-bold mt-4 mb-2">
                                    {line.substring(2).trim()}
                                </h2>
                            )
                        }

                        // Bold text **text**
                        const boldRegex = /\*\*(.*?)\*\*/g
                        if (boldRegex.test(line)) {
                            const parts = line.split(boldRegex)
                            return (
                                <p key={index} className="mb-2 leading-relaxed">
                                    {parts.map((part, i) => 
                                        i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                                    )}
                                </p>
                            )
                        }

                        // Bullet points
                        if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
                            return (
                                <li key={index} className="ml-4 mb-1">
                                    {line.trim().substring(1).trim()}
                                </li>
                            )
                        }

                        // Code inline `code`
                        const codeRegex = /`([^`]+)`/g
                        if (codeRegex.test(line)) {
                            const parts = line.split(codeRegex)
                            return (
                                <p key={index} className="mb-2 leading-relaxed font-mono">
                                    {parts.map((part, i) => 
                                        i % 2 === 1 ? (
                                            <code key={i} className={`px-1.5 py-0.5 rounded ${
                                                isDark ? 'bg-gray-800 text-yellow-300' : 'bg-gray-200 text-orange-600'
                                            }`}>
                                                {part}
                                            </code>
                                        ) : part
                                    )}
                                </p>
                            )
                        }

                        // Horizontal rule
                        if (line.trim() === '---') {
                            return <hr key={index} className="my-4 border-gray-300 dark:border-gray-600" />
                        }

                        // Regular paragraph
                        if (line.trim()) {
                            return (
                                <p key={index} className="mb-2 leading-relaxed text-base">
                                    {line}
                                </p>
                            )
                        }

                        return <br key={index} />
                    })}
                </div>
            )
        })
    }

    return <div>{renderFormattedText()}</div>
}

function IndexSidePanel() {
    const [data, setData] = useState("Loading...")
    const [selectedLanguage, setSelectedLanguage] = useState("en")
    const [originalText, setOriginalText] = useState("")
    const [isTranslating, setIsTranslating] = useState(false)
    const [theme, setTheme] = useState<"light" | "dark">("light")
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null)
    const [isCodeConversion, setIsCodeConversion] = useState(false)
    const [targetProgrammingLanguage, setTargetProgrammingLanguage] = useState("Python")
    const [originalPrompt, setOriginalPrompt] = useState("")
    const [originalSelectedText, setOriginalSelectedText] = useState("")
    const [currentMenuItemId, setCurrentMenuItemId] = useState("")
    const [isChatMode, setIsChatMode] = useState(false)
    const [chatMessages, setChatMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([])
    const [chatInput, setChatInput] = useState("")
    const [isSendingMessage, setIsSendingMessage] = useState(false)
    const [showPromptBar, setShowPromptBar] = useState(false)
    const [customPrompt, setCustomPrompt] = useState("")

    useEffect(() => {
        const messageListener = function (request, sender, sendResponse) {
            if (request.action === "send_to_sidepanel") {
                console.log("📱 Sidepanel received message:", {
                    menuItemId: request.menuItemId,
                    hasPayload: !!request.payload,
                    hasSelectedText: !!request.selectedText
                })
                
                setData(request.payload)
                setOriginalText(request.payload)
                setSelectedLanguage("en") // Reset to English when new content arrives
                stopSpeaking() // Stop any ongoing speech
                
                // Store the menu item ID for filename generation
                setCurrentMenuItemId(request.menuItemId || "")
                
                // Check if this is a chat request (Let's Talk about this)
                if (request.menuItemId === "callPhoneToTalkAboutSelection") {
                    console.log("✅ Activating chat mode")
                    setIsChatMode(true)
                    setIsCodeConversion(false)
                    setOriginalSelectedText(request.selectedText || "")
                    setOriginalPrompt(request.prompt || "")
                    setCustomPrompt(request.prompt || "")
                    setShowPromptBar(true)
                    // Initialize chat with the AI's first message
                    setChatMessages([{
                        role: 'assistant',
                        content: request.payload
                    }])
                } else if (request.menuItemId === "side_codeConvert") {
                    setIsChatMode(false)
                    setIsCodeConversion(true)
                    setOriginalSelectedText(request.selectedText || "")
                    setOriginalPrompt(request.prompt || "")
                } else {
                    setIsChatMode(false)
                    setIsCodeConversion(false)
                    setTargetProgrammingLanguage("python") // Reset to default
                }
            }
        }

        chrome.runtime.onMessage.addListener(messageListener)

        // Load saved theme preference
        const savedTheme = localStorage.getItem("siddhi-theme") as "light" | "dark"
        if (savedTheme) {
            setTheme(savedTheme)
        }

        // Load voices for speech synthesis
        const loadVoices = () => {
            window.speechSynthesis.getVoices()
        }
        
        // Load voices when they're ready
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = loadVoices
        }
        loadVoices()

        // Cleanup listener on component unmount
        return () => {
            chrome.runtime.onMessage.removeListener(messageListener)
            stopSpeaking()
        }
    }, [])

    const handleLanguageChange = async (langCode: string) => {
        // Stop any ongoing speech when language changes
        stopSpeaking()
        
        setSelectedLanguage(langCode)
        
        // If selecting English, show original text
        if (langCode === "en") {
            setData(originalText)
            return
        }

        // Translate to selected language
        setIsTranslating(true)
        try {
            const languageName = INDIAN_LANGUAGES.find(lang => lang.code === langCode)?.name.split(" (")[0] || langCode
            const response = await sendToBackground({
                name: "callOpenAIReturn",
                body: { 
                    prompt: `Translate the following text to ${languageName}. Maintain proper formatting with paragraphs and structure. Provide only the translation:`,
                    selectedText: originalText 
                }
            })
            
            if (response.errorMessage) {
                setData(`❌ Translation Error: ${response.errorMessage}`)
            } else {
                setData(response.data)
            }
        } catch (error) {
            setData(`❌ Error: ${error.message}`)
        } finally {
            setIsTranslating(false)
        }
    }

    const handleProgrammingLanguageChange = async (langCode: string) => {
        // Stop any ongoing speech
        stopSpeaking()
        
        setTargetProgrammingLanguage(langCode)
        setIsTranslating(true)
        
        try {
            const targetLang = PROGRAMMING_LANGUAGES.find(lang => lang.code === langCode)
            if (!targetLang) {
                setData("❌ Error: Invalid programming language selected")
                return
            }

            // Create a new prompt with the selected target language
            const conversionPrompt = `Convert the following code to ${targetLang.name}. Provide your response in this format:

**Original Language:** [Name of the original language]

**Target Language:** ${targetLang.name}

**Converted Code:**

\`\`\`${langCode}
[Complete converted code here - fully functional and ready to use]
\`\`\`

**Key Changes:**
- [Explain important conversions or differences]
- [Note any assumptions made]
- [Highlight syntax or structure changes]

Code to convert:

`

            const response = await sendToBackground({
                name: "callOpenAIReturn",
                body: { 
                    prompt: conversionPrompt,
                    selectedText: originalSelectedText 
                }
            })
            
            if (response.errorMessage) {
                setData(`❌ Conversion Error: ${response.errorMessage}`)
            } else {
                setData(response.data)
            }
        } catch (error) {
            setData(`❌ Error: ${error.message}`)
        } finally {
            setIsTranslating(false)
        }
    }

    const handleStartChatWithPrompt = async () => {
        setShowPromptBar(false)
        setIsSendingMessage(true)
        
        try {
            const response = await sendToBackground({
                name: "callOpenAIReturn",
                body: { 
                    prompt: customPrompt,
                    selectedText: originalSelectedText
                }
            })

            if (response.errorMessage) {
                setChatMessages([{ 
                    role: 'assistant', 
                    content: `❌ Error: ${response.errorMessage}` 
                }])
            } else {
                setChatMessages([{ 
                    role: 'assistant', 
                    content: response.data 
                }])
            }
        } catch (error) {
            setChatMessages([{ 
                role: 'assistant', 
                content: `❌ Error: ${error.message}` 
            }])
        } finally {
            setIsSendingMessage(false)
        }
    }

    const handleSendChatMessage = async () => {
        if (!chatInput.trim() || isSendingMessage) return

        const userMessage = chatInput.trim()
        setChatInput("")
        
        // Add user message to chat
        const updatedMessages = [...chatMessages, { role: 'user' as const, content: userMessage }]
        setChatMessages(updatedMessages)
        setIsSendingMessage(true)

        try {
            // Build conversation context
            const conversationContext = `Original text being discussed:\n${originalSelectedText}\n\nConversation history:\n${updatedMessages.map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`).join('\n\n')}`

            const response = await sendToBackground({
                name: "callOpenAIReturn",
                body: { 
                    prompt: `You are having a helpful conversation about the text. Continue the conversation naturally based on the user's question. Be concise and helpful.`,
                    selectedText: conversationContext
                }
            })

            if (response.errorMessage) {
                setChatMessages([...updatedMessages, { 
                    role: 'assistant', 
                    content: `❌ Error: ${response.errorMessage}` 
                }])
            } else {
                setChatMessages([...updatedMessages, { 
                    role: 'assistant', 
                    content: response.data 
                }])
            }
        } catch (error) {
            setChatMessages([...updatedMessages, { 
                role: 'assistant', 
                content: `❌ Error: ${error.message}` 
            }])
        } finally {
            setIsSendingMessage(false)
        }
    }

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        localStorage.setItem("siddhi-theme", newTheme)
    }

    const getLanguageCode = (code: string) => {
        // Map language codes to speech synthesis locale codes
        const langMap = {
            'en': 'en-US',
            'hi': 'hi-IN',
            'bn': 'bn-IN',
            'te': 'te-IN',
            'mr': 'mr-IN',
            'ta': 'ta-IN',
            'gu': 'gu-IN',
            'kn': 'kn-IN',
            'ml': 'ml-IN',
            'pa': 'pa-IN',
            'or': 'or-IN',
            'as': 'as-IN',
            'ur': 'ur-IN',
            'sa': 'sa-IN'
        }
        return langMap[code] || 'en-US'
    }

    const stopSpeaking = () => {
        // Stop browser speech synthesis
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel()
        }
        
        // Stop current audio element if exists
        if (currentAudio) {
            currentAudio.pause()
            currentAudio.currentTime = 0
            currentAudio.src = ''
            setCurrentAudio(null)
        }
        
        // Stop all audio elements as backup
        const audios = document.querySelectorAll('audio')
        audios.forEach(audio => {
            audio.pause()
            audio.currentTime = 0
            audio.src = ''
        })
        
        setIsSpeaking(false)
    }

    const handleTextToSpeech = () => {
        // If already speaking, stop
        if (isSpeaking) {
            stopSpeaking()
            return
        }

        // Clean the text (remove JSON, code blocks, markdown syntax)
        let textToRead = data
        
        // Remove JSON if present
        try {
            if (textToRead.trim().startsWith('{') || textToRead.trim().startsWith('[')) {
                const jsonEnd = textToRead.lastIndexOf('}') + 1 || textToRead.lastIndexOf(']') + 1
                if (jsonEnd > 0) {
                    textToRead = textToRead.substring(jsonEnd).trim()
                }
            }
        } catch (e) {}

        // Remove markdown syntax and clean text
        textToRead = textToRead
            .replace(/```[\s\S]*?```/g, '') // Remove code blocks
            .replace(/`([^`]+)`/g, '$1') // Remove inline code
            .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
            .replace(/###\s*/g, '') // Remove headers
            .replace(/##\s*/g, '')
            .replace(/---/g, '')
            .replace(/❌/g, 'Error: ')
            .replace(/•/g, '. ') // Replace bullets with period for better pauses
            .replace(/\n\n/g, '. ') // Add pauses between paragraphs
            .replace(/\n/g, ' ') // Replace single newlines with space
            .trim()

        if (!textToRead || textToRead.length < 3) {
            return
        }

        // Get available voices
        const voices = window.speechSynthesis.getVoices()
        const targetLangCode = getLanguageCode(selectedLanguage)
        
        // Find the best voice for the selected language
        let selectedVoice = voices.find(voice => 
            voice.lang === targetLangCode
        ) || voices.find(voice => 
            voice.lang.startsWith(targetLangCode.split('-')[0])
        ) || voices.find(voice => 
            voice.lang.includes(targetLangCode.split('-')[0])
        )

        // If no voice found for this language, use Google TTS as fallback
        if (!selectedVoice && selectedLanguage !== 'en') {
            handleGoogleTTS(textToRead, selectedLanguage)
            return
        }

        // Create speech synthesis utterance
        const utterance = new SpeechSynthesisUtterance(textToRead)
        if (selectedVoice) {
            utterance.voice = selectedVoice
        }
        utterance.lang = targetLangCode
        
        // Adjust rate and pitch based on language for better clarity
        const langSettings = {
            'en-US': { rate: 0.9, pitch: 1.0 },
            'hi-IN': { rate: 0.85, pitch: 1.1 },
            'bn-IN': { rate: 0.85, pitch: 1.05 },
            'te-IN': { rate: 0.85, pitch: 1.0 },
            'mr-IN': { rate: 0.85, pitch: 1.05 },
            'ta-IN': { rate: 0.85, pitch: 1.0 },
            'gu-IN': { rate: 0.85, pitch: 1.05 },
            'kn-IN': { rate: 0.85, pitch: 1.0 },
            'ml-IN': { rate: 0.85, pitch: 1.0 },
            'pa-IN': { rate: 0.85, pitch: 1.1 },
            'or-IN': { rate: 0.85, pitch: 1.0 },
            'as-IN': { rate: 0.85, pitch: 1.0 },
            'ur-IN': { rate: 0.85, pitch: 1.05 },
            'sa-IN': { rate: 0.8, pitch: 1.0 }
        }
        
        const settings = langSettings[targetLangCode] || { rate: 0.9, pitch: 1.0 }
        utterance.rate = settings.rate
        utterance.pitch = settings.pitch
        utterance.volume = 1.0

        // Event handlers
        utterance.onstart = () => setIsSpeaking(true)
        utterance.onend = () => setIsSpeaking(false)
        utterance.onerror = (event) => {
            console.error('Speech error:', event)
            setIsSpeaking(false)
            // Try Google TTS as fallback on error
            if (selectedLanguage !== 'en') {
                handleGoogleTTS(textToRead, selectedLanguage)
            }
        }
        utterance.onpause = () => setIsSpeaking(false)

        // Speak
        window.speechSynthesis.speak(utterance)
    }

    const handleGoogleTTS = (text: string, langCode: string) => {
        // Stop any existing audio first
        stopSpeaking()
        
        // Limit text length for Google TTS (max 200 chars per request)
        const chunks = text.match(/.{1,200}/g) || [text]
        let currentChunk = 0
        let audioElement: HTMLAudioElement | null = null

        const playNextChunk = () => {
            if (currentChunk >= chunks.length) {
                setIsSpeaking(false)
                setCurrentAudio(null)
                return
            }

            audioElement = new Audio()
            setCurrentAudio(audioElement)
            
            const encodedText = encodeURIComponent(chunks[currentChunk])
            audioElement.src = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${langCode}&client=tw-ob&q=${encodedText}`
            
            audioElement.onplay = () => setIsSpeaking(true)
            audioElement.onended = () => {
                currentChunk++
                playNextChunk()
            }
            audioElement.onerror = () => {
                console.error('Google TTS error')
                setIsSpeaking(false)
                setCurrentAudio(null)
            }
            
            audioElement.play().catch(err => {
                console.error('Audio play error:', err)
                setIsSpeaking(false)
                setCurrentAudio(null)
            })
        }

        playNextChunk()
    }

    const getCurrentLanguageInfo = () => {
        return INDIAN_LANGUAGES.find(lang => lang.code === selectedLanguage) || INDIAN_LANGUAGES[0]
    }

    const getFileNamePrefix = () => {
        // Map menu item IDs to readable filenames
        const menuItemNames = {
            'side_summariseText': 'summary',
            'side_codeConvert': 'code-conversion',
            'side_codeAnalysis': 'code-analysis',
            'side_debugFix': 'debug-fix',
            'side_generateDoc': 'documentation',
            'side_factCheck': 'fact-check',
            'side_actionChainFollowup': 'followup',
            'callPhoneToTalkAboutSelection': 'voice-discussion',
            'grammarFixer': 'grammar-fix',
            'postComment': 'comment',
            'linkedinPostEmoji': 'emoji-comment'
        }
        
        return menuItemNames[currentMenuItemId] || 'siddhi'
    }

    const getDisplayName = () => {
        // Map menu item IDs to display names for the UI
        const displayNames = {
            'side_summariseText': 'Summary',
            'side_codeConvert': 'Code Conversion',
            'side_codeAnalysis': 'Code Analysis',
            'side_debugFix': 'Debug & Fix',
            'side_generateDoc': 'Documentation',
            'side_factCheck': 'Fact Check',
            'side_actionChainFollowup': 'Follow-up',
            'callPhoneToTalkAboutSelection': 'Chat Discussion',
            'grammarFixer': 'Grammar Fix',
            'postComment': 'Comment',
            'linkedinPostEmoji': 'Emoji Comment'
        }
        
        return displayNames[currentMenuItemId] || 'Siddhi AI'
    }

    const handleDownload = () => {
        // Create a clean version of the content
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5)
        const filePrefix = getFileNamePrefix()
        const displayName = getDisplayName()
        const filename = `${filePrefix}-${timestamp}.md`
        
        // Prepare content with metadata
        const downloadContent = `# ${displayName} - Siddhi AI
Generated: ${new Date().toLocaleString()}
Language: ${getCurrentLanguageInfo().name}
Operation: ${displayName}

---

${data}
`
        
        // Create blob and download
        const blob = new Blob([downloadContent], { type: 'text/markdown;charset=utf-8' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
    }

    const isError = data.startsWith("❌")

    // Theme colors
    const colors = theme === "light" ? {
        bg: "bg-white",
        text: "text-gray-900",
        textSecondary: "text-gray-600",
        border: "border-gray-200",
        headerBg: "bg-white",
        sectionBg: "bg-gray-50",
        cardBg: "bg-white",
        footerBg: "bg-gray-50",
        selectBg: "bg-white",
        selectText: "text-black",
        separatorBg: "bg-gray-200",
        badgeBg: "bg-gray-200",
        badgeText: "text-gray-900"
    } : {
        bg: "bg-gray-900",
        text: "text-gray-100",
        textSecondary: "text-gray-400",
        border: "border-gray-700",
        headerBg: "bg-gray-900",
        sectionBg: "bg-gray-800",
        cardBg: "bg-gray-900",
        footerBg: "bg-gray-800",
        selectBg: "bg-gray-800",
        selectText: "text-gray-100",
        separatorBg: "bg-gray-700",
        badgeBg: "bg-gray-700",
        badgeText: "text-gray-100"
    }

    return (
        <div className={`flex flex-col h-screen ${colors.bg} ${colors.text}`}>
            {/* Header */}
            <div className={`p-4 ${colors.border} border-b ${colors.headerBg}`}>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <HeroTitle color={theme === "light" ? "black" : "white"} />
                        {currentMenuItemId && (
                            <span className={`text-xs ${colors.textSecondary} mt-1`}>
                                {getDisplayName()}
                            </span>
                        )}
                    </div>
                    <Button 
                        variant="outline" 
                        size="sm"
                        onClick={toggleTheme}
                        className={`${colors.selectBg} ${colors.selectText} ${colors.border}`}
                    >
                        {theme === "light" ? "🌙 Night" : "☀️ Day"}
                    </Button>
                </div>
            </div>

            {/* Language Selector Section */}
            <div className={`p-4 ${colors.border} border-b ${colors.sectionBg}`}>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <label className={`text-sm font-semibold ${colors.text}`}>
                            🌐 Language
                        </label>
                        <div className="flex items-center gap-2">
                            <Badge variant="secondary" className={`text-xs ${colors.badgeBg} ${colors.badgeText}`}>
                                {getCurrentLanguageInfo().flag} {getCurrentLanguageInfo().name.split(" (")[0]}
                            </Badge>
                            <Button 
                                variant="outline" 
                                size="sm"
                                onClick={handleTextToSpeech}
                                disabled={isTranslating || data === "Loading..."}
                                className={`${colors.selectBg} ${colors.selectText} ${colors.border} px-2 py-1`}
                            >
                                {isSpeaking ? "🔇 Stop" : "🔊 Listen"}
                            </Button>
                            <Button 
                                variant="outline" 
                                size="sm"
                                onClick={handleDownload}
                                disabled={isTranslating || data === "Loading..." || isError}
                                className={`${colors.selectBg} ${colors.selectText} ${colors.border} px-2 py-1`}
                            >
                                📥 Save
                            </Button>
                        </div>
                    </div>
                    <Select value={selectedLanguage} onValueChange={handleLanguageChange} disabled={isTranslating}>
                        <SelectTrigger className={`w-full ${colors.selectBg} ${colors.selectText} ${colors.border}`}>
                            <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent className={colors.selectBg}>
                            {INDIAN_LANGUAGES.map((lang) => (
                                <SelectItem key={lang.code} value={lang.code} className={colors.selectText}>
                                    <span className="flex items-center gap-2">
                                        <span>{lang.flag}</span>
                                        <span>{lang.name}</span>
                                    </span>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Programming Language Selector Section - Only shown for code conversion */}
            {isCodeConversion && (
                <div className={`p-4 ${colors.border} border-b ${colors.sectionBg}`}>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <label className={`text-sm font-semibold ${colors.text}`}>
                                💻 Target Programming Language
                            </label>
                            <Badge variant="secondary" className={`text-xs ${colors.badgeBg} ${colors.badgeText}`}>
                                {PROGRAMMING_LANGUAGES.find(lang => lang.code === targetProgrammingLanguage)?.icon}{" "}
                                {PROGRAMMING_LANGUAGES.find(lang => lang.code === targetProgrammingLanguage)?.name}
                            </Badge>
                        </div>
                        <Select 
                            value={targetProgrammingLanguage} 
                            onValueChange={handleProgrammingLanguageChange} 
                            disabled={isTranslating}
                        >
                            <SelectTrigger className={`w-full ${colors.selectBg} ${colors.selectText} ${colors.border}`}>
                                <SelectValue placeholder="Select target language" />
                            </SelectTrigger>
                            <SelectContent className={colors.selectBg}>
                                {PROGRAMMING_LANGUAGES.map((lang) => (
                                    <SelectItem key={lang.code} value={lang.code} className={colors.selectText}>
                                        <span className="flex items-center gap-2">
                                            <span>{lang.icon}</span>
                                            <span>{lang.name}</span>
                                        </span>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            )}

            {/* Content Section */}
            <ScrollArea className={`flex-1 ${colors.bg}`}>
                <div className="p-4">
                    {isChatMode ? (
                        /* Chat Interface */
                        <div className="flex flex-col h-full">
                            <Card className={`border-none shadow-none ${colors.cardBg} flex-1 flex flex-col`}>
                                <CardHeader className="px-0 pt-0">
                                    <CardTitle className={`text-lg flex items-center gap-2 ${colors.text}`}>
                                        <span>💬</span>
                                        <span>Chat Discussion</span>
                                    </CardTitle>
                                    <Separator className={`mt-2 ${colors.separatorBg}`} />
                                </CardHeader>
                                <CardContent className="px-0 pb-0 flex-1 flex flex-col">
                                    {/* Prompt Bar - shown before chat starts */}
                                    {showPromptBar && (
                                        <div className={`mb-4 p-4 rounded-lg border ${colors.border} ${colors.sectionBg}`}>
                                            <div className="flex flex-col gap-3">
                                                <div className="flex items-center justify-between">
                                                    <label className={`text-sm font-semibold ${colors.text}`}>
                                                        ✏️ Customize Your Prompt
                                                    </label>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => setCustomPrompt(originalPrompt)}
                                                        className="text-xs"
                                                    >
                                                        Reset
                                                    </Button>
                                                </div>
                                                <textarea
                                                    value={customPrompt}
                                                    onChange={(e) => setCustomPrompt(e.target.value)}
                                                    className={`w-full min-h-[120px] p-3 rounded-md border ${colors.border} ${colors.selectBg} ${colors.selectText} text-sm resize-y`}
                                                    placeholder="Enter your custom prompt..."
                                                />
                                                <div className="flex gap-2">
                                                    <Button
                                                        onClick={handleStartChatWithPrompt}
                                                        disabled={!customPrompt.trim() || isSendingMessage}
                                                        className="flex-1"
                                                    >
                                                        {isSendingMessage ? "Starting..." : "Start Chat"}
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        onClick={() => setShowPromptBar(false)}
                                                        disabled={isSendingMessage}
                                                    >
                                                        Skip
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {/* Chat Messages */}
                                    <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                                        {chatMessages.map((message, index) => (
                                            <div 
                                                key={index} 
                                                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                            >
                                                <div 
                                                    className={`max-w-[80%] rounded-lg p-3 ${
                                                        message.role === 'user' 
                                                            ? theme === 'light' 
                                                                ? 'bg-blue-500 text-white' 
                                                                : 'bg-blue-600 text-white'
                                                            : theme === 'light'
                                                                ? 'bg-gray-200 text-gray-900'
                                                                : 'bg-gray-700 text-gray-100'
                                                    }`}
                                                >
                                                    <div className="text-sm">
                                                        <FormattedContent content={message.content} theme={theme} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {isSendingMessage && (
                                            <div className="flex justify-start">
                                                <div className={`rounded-lg p-3 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'}`}>
                                                    <div className="flex gap-1">
                                                        <span className="animate-bounce">●</span>
                                                        <span className="animate-bounce delay-100">●</span>
                                                        <span className="animate-bounce delay-200">●</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Chat Input */}
                                    <div className="flex gap-2 pt-2 border-t">
                                        <Input
                                            value={chatInput}
                                            onChange={(e) => setChatInput(e.target.value)}
                                            onKeyPress={(e) => {
                                                if (e.key === 'Enter' && !e.shiftKey) {
                                                    e.preventDefault()
                                                    handleSendChatMessage()
                                                }
                                            }}
                                            placeholder="Type your message..."
                                            disabled={isSendingMessage}
                                            className={`flex-1 ${colors.selectBg} ${colors.selectText} ${colors.border}`}
                                        />
                                        <Button
                                            onClick={handleSendChatMessage}
                                            disabled={!chatInput.trim() || isSendingMessage}
                                            className="px-4"
                                        >
                                            {isSendingMessage ? "..." : "Send"}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ) : (
                        /* Regular Content Display */
                        <Card className={`border-none shadow-none ${colors.cardBg}`}>
                            <CardHeader className="px-0 pt-0">
                                <CardTitle className={`text-lg flex items-center gap-2 ${colors.text}`}>
                                    {isTranslating ? (
                                        <>
                                            <span className="animate-pulse">🔄</span>
                                            <span>Processing...</span>
                                        </>
                                    ) : isError ? (
                                        <>
                                            <span>❌</span>
                                            <span>Error</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>📄</span>
                                            <span>{getDisplayName()}</span>
                                        </>
                                    )}
                                </CardTitle>
                                <Separator className={`mt-2 ${colors.separatorBg}`} />
                            </CardHeader>
                            <CardContent className="px-0 pb-0">
                                {isTranslating ? (
                                    <div className="flex flex-col items-center justify-center py-8 gap-4">
                                        <div className="animate-spin text-4xl">⚙️</div>
                                        <p className={`text-sm ${colors.textSecondary}`}>
                                            {selectedLanguage !== "en" 
                                                ? `Translating to ${getCurrentLanguageInfo().name.split(" (")[0]}...`
                                                : `Processing ${getDisplayName()}...`
                                            }
                                        </p>
                                    </div>
                                ) : (
                                    <div className={`${isError ? "text-red-600" : colors.text}`}>
                                        <FormattedContent content={data} theme={theme} />
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    )}
                </div>
            </ScrollArea>

            {/* Footer Info */}
            <div className={`p-3 ${colors.border} border-t ${colors.footerBg}`}>
                <div className={`flex items-center justify-between text-xs ${colors.textSecondary}`}>
                    <span>✨ Powered by Siddhi AI</span>
                    <span>{data.length > 0 && !isTranslating ? `${data.length} characters` : ""}</span>
                </div>
            </div>
        </div>
    )
}

export default IndexSidePanel
