
import { useEffect, useState } from 'react'
import { Loader2 } from "lucide-react"

export default function Marquee() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const url = "https://api.data.gov.in/resource/307b0d9c-89c5-4233-89cf-8b0a9cf785ef?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"
    try {
      const response = await fetch(url)
      const jsonData = await response.json()
      setData(jsonData?.records || [])
      setIsLoading(false)
    } catch (error) {
      console.error('Failed to fetch data', error)
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-16">
        <Loader2 className="animate-spin h-6 w-6" aria-label="Loading" />
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden bg-green-100 dark:bg-green-900 py-4">
      <marquee
        className="flex whitespace-nowrap"
        // eslint-disable-next-line react/no-unknown-property
        behavior="scroll"
        direction="left"
        // eslint-disable-next-line react/no-unknown-property
        scrollamount="7" // Adjust speed here
        aria-live="off"
      >
        {data.concat(data).map((item, index) => (
          <span
            key={index}
            className="inline-block mx-4 px-4 py-2 bg-green-200 dark:bg-green-800 rounded-full text-green-900 dark:text-green-200 shadow-md transition-transform duration-300 hover:scale-105"
          >
            {item?.commodity}: ₹{(item?.minimum_support_prices__rs__per_quintal____2022_23_rms_)*10} per ton
          </span>
        ))}
      </marquee>
    </div>
  )
}