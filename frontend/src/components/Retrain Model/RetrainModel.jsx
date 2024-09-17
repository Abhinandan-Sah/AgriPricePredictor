import axios from 'axios';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Layout from '../Layout/Layout';

const sampleData = `{
  "columns": ["date", "State", "City", "Crop Type", "Season", "Temperature (°C)", "Rainfall (mm)", "Supply Volume (tons)", "Demand Volume (tons)", "Transportation Cost (₹/ton)", "Fertilizer Usage (kg/hectare)", "Pest Infestation (0-1)", "Market Competition (0-1)", "Price (₹/ton)"],
  "values": [
    [],
    []
  ]
}`;

const sendData = async (parsedData) => {
    try {
      console.log(parsedData)
        const response = await axios.post('http://localhost:5000/retrain', parsedData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("Response of retrain model is given below: ")
        console.log(response.data);
    } catch (error) {
        console.error('Error sending data:', error);
    }
};

const RetrainModel = () => {
  const [inputData, setInputData] = useState(sampleData);
  const [error, setError] = useState('');
  const [parsedData, setParsedData] = useState([]);

  const validateAndParseJson = () => {
    const validateRowData = (row) => {
      return (
        typeof row.date === 'string' &&
        typeof row.State === 'string' &&
        typeof row.City === 'string' &&
        typeof row["Crop Type"] === 'string' &&
        typeof row.Season === 'string' &&
        typeof row["Temperature (°C)"] === 'number' &&
        typeof row["Rainfall (mm)"] === 'number' &&
        typeof row["Supply Volume (tons)"] === 'number' &&
        typeof row["Demand Volume (tons)"] === 'number' &&
        typeof row["Transportation Cost (₹/ton)"] === 'number' &&
        typeof row["Fertilizer Usage (kg/hectare)"] === 'number' &&
        typeof row["Pest Infestation (0-1)"] === 'number' &&
        typeof row["Market Competition (0-1)"] === 'number' &&
        typeof row["Price (₹/ton)"] === 'number'
      );
    };
    try {
      const data = JSON.parse(inputData);
      if (!Array.isArray(data.columns) || !Array.isArray(data.values)) {
        throw new Error('Invalid JSON structure. Must include "columns" and "values" arrays.');
      }

      if (data.values.length < 2) {
        throw new Error('Please enter at least 2 rows of data');
      }

      const parsedRows = data.values.map((row) => {
        if (row.length !== data.columns.length) {
          throw new Error('Number of values does not match number of columns');
        }

        const rowData = {};
        data.columns.forEach((col, index) => {
          rowData[col] = row[index];
        });

        if (!validateRowData(rowData)) {
          throw new Error('Invalid row data. Please check all fields are present and of the correct type');
        }

        return rowData;
      });

      setParsedData(parsedRows);
      setError('Data is valid!');
      sendData(parsedRows); // Send the parsed data
    } catch (err) {
      setError(err.message || 'Invalid JSON format. Please check your input and try again');
    }
  };

  return (
    <Layout>
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">SQL-like JSON Data Entry</h1>
      {error && (
        <Alert variant={error === 'Data is valid!' ? 'default' : 'destructive'}>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{error === 'Data is valid!' ? 'Success' : 'Error'}</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <div>
        <Textarea 
          value={inputData} 
          onChange={(e) => setInputData(e.target.value)} 
          rows={20} 
          placeholder="Enter your data in SQL-like JSON format..."
          className="font-mono"
        />
      </div>
      <Button onClick={validateAndParseJson}>Validate and Parse JSON</Button>
      {parsedData.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Parsed Data:</h2>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            {JSON.stringify(parsedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
    </Layout>
  );
};

export default RetrainModel;