import React from "react"
import "./globals.css"
import { Button } from "~components/ui/button"

function IndexPopup() {

    return (
        <div className="w-[300px] h-[300px] flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600">
            
            <div className="text-center">
                <h1 className="text-4xl font-extrabold text-white mb-2">Siddhi</h1>
                <p className="text-sm text-white/90">AI at Your Fingertips, Anytime, Anywhere.</p>
            </div>

            <Button
                className="bg-white text-white font-semibold py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
                onClick={() => chrome.runtime.openOptionsPage()}
            >
                Configuration
            </Button>

        </div>
    )
}

export default IndexPopup