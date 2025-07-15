import React, { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'

const Weather = () => {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")
    const [temp, setTemp] = useState("")
    const [desc, setDesc] = useState("")

    function handleCity(e) {
        setCity(e.target.value)
    }

    function getWeather() {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9210333cf7bc4f7b8711d2399d7679cc&units=metric`)
            .then((res) => {
                setWeather(res.data.weather[0].main)
                setTemp(res.data.main.temp + "°C")
                setDesc(res.data.weather[0].description)
            })
            .catch(() => {
                setWeather("Not found")
                setTemp("--")
                setDesc("Invalid city name")
            })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-100 flex items-center justify-center px-4"
        >
            <div className="w-full max-w-md bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <motion.h1
                    className="text-2xl font-semibold text-center text-blue-600 mb-2"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    Weather Report
                </motion.h1>

                <p className="text-center text-gray-600 mb-6 text-sm">
                    Enter your city to get the current weather information.
                </p>

                <input
                    type="text"
                    placeholder="City name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={handleCity}
                />

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={getWeather}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Get Report
                </motion.button>

                {weather && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 space-y-4 text-gray-700"
                    >
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-medium">🌤️ Weather:</span>
                            <span>{weather}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-medium">🌡️ Temperature:</span>
                            <span>{temp}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">📖 Description:</span>
                            <span className="capitalize">{desc}</span>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    )
}

export default Weather
