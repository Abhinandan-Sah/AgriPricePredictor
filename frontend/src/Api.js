import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/auth",
});

export const googleAuth = async (code) => {
  const response = await api.get(`/google?code=${code}`);
  return response.data
};

export const signupAuth = async(data)=>{
  console.log("This is inside Api ", data)
  const response = await api.post("/signup", data);
  console.log(response?.data)
  return response?.data;
}

export const signinAuth = async(data)=>{
  const response = await api.post("/signin", data);
  return response?.data;
}


// Create an axios instance for Flask API
const flask = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to send data to Flask API
export const flaskIndex = async (data) => {
  try {
    const response = await flask.post("/api/index", data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const predictPrice = async (data) => {
  try {
    const response = await flask.post("/predict", data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const bivariate_analysis = async () => {
  try {
    const response = await flask.get("/bivariate_analysis");
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const categorical_analysis = async () => {
  try {
    const response = await flask.get("/categorical_analysis");
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const heatmaps = async () => {
  try {
    const response = await flask.get("/heatmaps");
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const stats = async () => {
  try {
    const response = await flask.get("/stats");
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const retrain_model = async () => {
  try {
    const response = await flask.post("/retrain");
    console.log("inside Api");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

