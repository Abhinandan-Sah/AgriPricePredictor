// 'use client'

// import { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// export default function CropRecommendations() {
//   const [cropType, setCropType] = useState('')
//   const [state, setState] = useState('')
//   const [city, setCity] = useState('')
//   const [recommendation, setRecommendation] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState('')

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     setError('')
//     setRecommendation(null)

// //     try {
// //       const response = await fetch('/recommendations', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ crop_type: cropType, state, city }),
// //       })

// //       if (!response.ok) {
// //         throw new Error('Failed to fetch recommendation')
// //       }

// //       const data = await response.json()
// //       setRecommendation(data)
// //     } catch (err) {
// //       setError('An error occurred while fetching the recommendation.')
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Crop Price Recommendations</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <Select onValueChange={setCropType} required>
//           <SelectTrigger>
//             <SelectValue placeholder="Select Crop Type" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="rice">Rice</SelectItem>
//             <SelectItem value="wheat">Wheat</SelectItem>
//             <SelectItem value="corn">Corn</SelectItem>
//             {/* Add more crop types as needed */}
//           </SelectContent>
//         </Select>
//         <Input
//           type="text"
//           placeholder="State"
//           value={state}
//           onChange={(e) => setState(e.target.value)}
//           required
//         />
//         <Input
//           type="text"
//           placeholder="City"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           required
//         />
//         <Button type="submit" disabled={loading}>
//           {loading ? 'Loading...' : 'Get Recommendation'}
//         </Button>
//       </form>

//       {error && <p className="text-red-500 mt-4">{error}</p>}

//       {recommendation && (
//         <Card className="mt-6">
//           <CardHeader>
//             <CardTitle>Recommendation</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="mb-2">{recommendation.recommendation}</p>
//             <p>Predicted Price: ₹{recommendation.predicted_price.toFixed(2)}</p>
//             <p>Historical Average: ₹{recommendation.historical_average.toFixed(2)}</p>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   )
// }
import React from 'react'
import Layout from '../Layout/Layout'

const RecommendationSystem = () => {
  return (
    <Layout >
        <div>RecommendationSystem</div>
    </Layout>
  )
}

export default RecommendationSystem